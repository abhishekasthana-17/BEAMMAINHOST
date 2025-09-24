/**
 * Strapi CMS service for fetching content
 */

import axios from 'axios';

// Resolve Strapi base URL from env with sensible local default and validation
const resolveStrapiBaseUrl = () => {
  const envValue = import.meta.env.VITE_STRAPI_URL;

  if (typeof envValue === 'string' && envValue.trim() !== '') {
    return envValue.replace(/\/$/, '');
  }

  // Dev-friendly default: if running on localhost and no env is set, assume Strapi on :1337
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return 'http://localhost:1337';
  }

  return null;
};

const STRAPI_URL = resolveStrapiBaseUrl();

const ensureStrapiConfigured = () => {
  if (!STRAPI_URL) {
    throw new Error(
      'VITE_STRAPI_URL is not set and no safe default is available. ' +
      'Create frontend/.env.local with VITE_STRAPI_URL=http://localhost:1337 and restart the dev server.'
    );
  }
};

const buildStrapiUrl = (path) => {
  ensureStrapiConfigured();
  const base = STRAPI_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(`${base}${normalizedPath}`);
};

/**
 * Fetches data from Strapi API with proper error handling
 * @param {string} endpoint - API endpoint to fetch from
 * @param {Object} queryParams - Optional query parameters
 * @returns {Promise<Object>} - The response data
 */
const fetchFromStrapi = async (endpoint, queryParams = {}) => {
  const url = buildStrapiUrl(`/api/${endpoint}`);

    // Helper to recursively build query strings for objects (e.g., for populate)
    function appendObjectAsQueryParams(data, parentKey) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const value = data[key];
          const currentKey = parentKey ? `${parentKey}[${key}]` : key;
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            appendObjectAsQueryParams(value, currentKey);
          } else if (value !== undefined) { // Ensure value is not undefined before appending
            url.searchParams.append(currentKey, String(value)); // Ensure value is string
          }
        }
      }
    }

    // Handle populate parameter
    if (queryParams.populate) {
      if (typeof queryParams.populate === 'string') {
        url.searchParams.append('populate', queryParams.populate);
      } else if (typeof queryParams.populate === 'object') {
        // Serialize the populate object into query parameters
        appendObjectAsQueryParams(queryParams.populate, 'populate');
      }
    }

    // Handle filters parameter with proper nesting
    if (queryParams.filters) {
      for (const [key, value] of Object.entries(queryParams.filters)) {
        if (typeof value === 'object') {
          for (const [operator, operatorValue] of Object.entries(value)) {
            url.searchParams.append(`filters[${key}][${operator}]`, String(operatorValue));
          }
        } else {
          url.searchParams.append(`filters[${key}]`, String(value));
        }
      }
    }

    // Handle any other top-level string parameters (excluding those already handled)
    for (const [key, value] of Object.entries(queryParams)) {
      if (key !== 'filters' && key !== 'populate') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
           url.searchParams.append(key, String(value));
        }
      }
    }

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching from Strapi: ${response.status} ${response.statusText}.`);
  }

  const data = await response.json();
  return data;
};

/**
 * Get a specific page content by slug or title
 * @param {string} contentType - The Strapi content type (collection)
 * @param {string} identifier - Identifier (slug or title) to filter by
 * @returns {Promise<Object>} - The page content
 */
export const getContent = async (contentType, identifier = null) => {
  console.log(`[getContent] Called with contentType: "${contentType}", identifier: "${identifier}"`);
  
  const finalQueryParams = {
    populate: '*',
  };

  // Use the content type as-is for hosted Strapi
  const endpoint = contentType;
  console.log(`[getContent] Using endpoint: "${endpoint}"`);

  if (identifier) {
    finalQueryParams.filters = { slug: { eq: identifier } };
    console.log(`[getContent] First attempt - filtering by slug: "${identifier}"`);
    console.log(`[getContent] Query params:`, finalQueryParams);

    try {
      const slugResult = await fetchFromStrapi(endpoint, finalQueryParams);
      console.log(`[getContent] Slug search result:`, slugResult);
      
      if (slugResult.data &&
          (Array.isArray(slugResult.data) ? slugResult.data.length > 0 : slugResult.data.id)) {
        console.log(`[getContent] Returning slug result with ${Array.isArray(slugResult.data) ? slugResult.data.length : 1} items`);
        return slugResult;
      }
      console.log(`[getContent] Slug search returned no results, trying title search...`);
    } catch (error) { 
      console.log(`[getContent] Slug search failed:`, error);
      // Try title match if slug lookup fails
    }

    finalQueryParams.filters = { title: { eq: identifier } }; // Retain the deep populate for title lookup too
    console.log(`[getContent] Second attempt - filtering by title: "${identifier}"`);
    console.log(`[getContent] Updated query params:`, finalQueryParams);
    return fetchFromStrapi(endpoint, finalQueryParams);
  } else {
    console.log(`[getContent] No identifier provided, fetching all content`);
    return fetchFromStrapi(endpoint, finalQueryParams);
  }
};

/**
 * Get a specific entry by ID
 * @param {string} contentType - The Strapi content type
 * @param {number} id - The entry ID
 * @returns {Promise<Object>} - The entry content
 */
export const getEntry = async (contentType, id) => {
  const endpoint = (contentType === 'page' || contentType === 'pages') ? 'pages' : contentType;
  let populateConfig = '*';
  if (contentType === 'page' || contentType === 'pages') {
    populateConfig = {
      Content: { populate: '*' },
    };
  }
  return fetchFromStrapi(`${endpoint}/${id}`, { populate: populateConfig });
};

/**
 * Get navigation menu from Strapi
 * @returns {Promise<Object>} - The menu structure
 */
export const getNavigation = async () => {
  const cacheKey = 'strapi_navigation';
  try {
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  } catch (error) {
    console.error("Could not retrieve navigation from cache", error);
  }

  try {
    const menuSlug = 'navigation';
    const navData = await fetchFromStrapi(`navigation/render/${menuSlug}`, {
      populate: 'items.related,items.parent,items.audience,items.items.related,items.items.parent,items.items.audience,items.items.items.related,items.items.items.parent,items.items.items.audience,items.items.items.items.related,items.items.items.items.parent,items.items.items.items.audience'
    });
    sessionStorage.setItem(cacheKey, JSON.stringify(navData));
    return navData;
  } catch (error) {
    console.warn('Navigation plugin not available, falling back to pages:', error);
    // Fallback to pages if navigation plugin is not installed
    return await fetchFromStrapi('pages', { populate: '*' });
  }
};


/* FOOTER */
/**
 * Get footer content from Strapi
 */
export const getFooter = async () => {
  const cacheKey = 'strapi_footer';
  try {
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  } catch (error) {
    console.error("Could not retrieve footer from cache", error);
  }

  try {
    const footerData = await fetchFromStrapi('footer', {
      populate: '*'
    });

    if (footerData && footerData.data) {
      const dataToStore = footerData.data;
      sessionStorage.setItem(cacheKey, JSON.stringify(dataToStore));
      return dataToStore;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch footer data in getFooter:", error);
    return null; // Return null to allow the component to use fallback data
  }
};

export const getPageData = async (page) => {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/pages?filters[slug][$eq]=${page}&populate=deep`);
    return response.data;
  } catch {
    return null;
  }
};

export const getFooterData = async () => {
  // ... existing code ...
};

export default {
  getContent,
  getEntry,
  getNavigation,
  getFooter,
  getPageData,
  getFooterData
};
