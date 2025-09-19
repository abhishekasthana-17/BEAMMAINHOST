import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContent } from "../utils/strapiService";
import StrapiHero from "./Hero/StrapiHero";
import StrapiSection from "./Section/StrapiSection";
import PageHelmet from "./PageHelmet/PageHelmet";

/**
 * A dynamic page component that renders content from Strapi CMS
 * Uses URL parameters for contentType and slug, or accepts them as props
 */
const StrapiPage = ({ contentType: propContentType, slug: propSlug }) => {
  // Get contentType and slug from URL parameters or props
  const { contentType: urlContentType, slug: urlSlug } = useParams();
  const navigate = useNavigate();

  // Use props if provided, otherwise fall back to URL parameters
  const contentType = propContentType || urlContentType;
  const slug = propSlug || urlSlug;

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      if (!contentType || !slug) {
        console.error("Missing contentType or slug for StrapiPage");
        navigate("/404", { replace: true });
        return;
      }

      try {
        setLoading(true);
        console.log(
          `[StrapiPage] Fetching content for contentType: "${contentType}", slug: "${slug}"`
        );
        const response = await getContent(contentType, slug);

        console.log(`[StrapiPage] Full API response:`, response);
        console.log(`[StrapiPage] Response data:`, response.data);
        console.log(
          `[StrapiPage] Number of pages returned:`,
          response.data?.length
        );

        // Strapi v4/v5 returns data in an array. Find the page that matches our slug.
        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          // Log all page slugs for debugging
          console.log(
            `[StrapiPage] Available page slugs:`,
            response.data.map((page) => page.slug)
          );
          console.log(`[StrapiPage] Looking for slug: "${slug}"`);

          // Find the page with the matching slug
          const matchingPage = response.data.find((page) => page.slug === slug);
          console.log(`[StrapiPage] Found matching page:`, matchingPage);

          const pageObject = matchingPage || response.data[0];
          console.log(`[StrapiPage] Using page object:`, pageObject);
          console.log(`[StrapiPage] Page title:`, pageObject.Title);
          console.log(`[StrapiPage] Page slug:`, pageObject.slug);

          setPageData(pageObject);
        } else {
          console.error(`Page with slug "${slug}" not found in Strapi`);
          navigate("/404", { replace: true });
        }
      } catch (err) {
        console.error("Error fetching Strapi page data:", err);
        setError(err);
        navigate("/404", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [contentType, slug, navigate]);

  if (loading) {
    return <div className="loading">Loading page content...</div>;
  }

  if (error || !pageData) {
    // Error is already logged, and we've navigated to 404, so we can return null.
    return null;
  }

  // Dynamically render components based on the pageData
  return (
    <div className="strapi-page">
      {/* Render SEO information if available */}
      {pageData.seo && (
        <PageHelmet
          title={pageData.seo.metaTitle}
          description={pageData.seo.metaDescription}
        />
      )}

      {/* Render the Hero component if it exists */}
      {pageData.hero && <StrapiHero defaultContent={pageData.hero} />}

      {/* Render components from the 'Content' dynamic zone */}
      {pageData.Content &&
        pageData.Content.map((component, index) => {
          // We get the component name from __component. e.g., "content.section"
          const componentType = component.__component.split(".").pop();

          switch (componentType) {
            case "section":
              return <StrapiSection key={index} defaultContent={component} />;
            // NOTE: Add cases for other components like 'faq', 'team-section' etc. as you build them
            default:
              return (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    background: "#f0f0f0",
                    margin: "10px",
                  }}
                >
                  <p>
                    <strong>Component not yet implemented on frontend:</strong>
                  </p>
                  <pre>{component.__component}</pre>
                </div>
              );
          }
        })}
    </div>
  );
};

export default StrapiPage;
