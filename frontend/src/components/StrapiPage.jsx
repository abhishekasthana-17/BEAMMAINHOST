import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContent } from "../utils/strapiService";
import StrapiHero from "./Hero/StrapiHero";
import StrapiSection from "./Section/StrapiSection";
import PageHelmet from "./PageHelmet/PageHelmet";

const StrapiPage = ({ contentType: propContentType, slug: propSlug }) => {
  const { contentType: urlContentType, slug: urlSlug } = useParams();
  const navigate = useNavigate();

  const contentType = propContentType || urlContentType || "pages";
  // Decode the slug from the URL for matching and API usage
  const slug = propSlug || (urlSlug ? decodeURIComponent(urlSlug) : undefined);

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      if (!contentType || !slug) {
        console.error("Missing contentType or slug for StrapiPage");
        // Instead of navigating to /404, show a fallback page
        setPageData({ title: "Page Not Found", Content: [], fallback: true });
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Debug: Print requested slug and all available slugs
        console.log('[StrapiPage] Requested slug:', slug);
        const response = await getContent(contentType, slug);
        console.log("🔥 Full Strapi response:", response);

        const pages = response?.data || [];
        console.log('[StrapiPage] Available slugs:', pages.map(p => p?.attributes?.slug));
        // Case-insensitive matching (slug is already decoded)
        const matchingPage = pages.find(
          (page) => page?.attributes?.slug?.toLowerCase() === slug?.toLowerCase()
        );
        console.log("🔍 Matching page:", matchingPage);

        if (!matchingPage) {
          // Instead of navigating to /404, show a fallback page
          setPageData({ title: "Page Not Found", Content: [], fallback: true });
          setLoading(false);
          return;
        }

        const attributes = matchingPage.attributes;
        console.log("📄 Page attributes:", attributes);
        setPageData(attributes);
      } catch (err) {
        console.error("Error fetching Strapi page:", err);
        // Instead of navigating to /404, show a fallback page
        setPageData({ title: "Page Not Found", Content: [], fallback: true });
        setLoading(false);
      }
    };

    fetchPageData();
  }, [contentType, slug, navigate]);

  if (loading) {
    return <div className="loading">Loading page content...</div>;
  }

  if (error || !pageData) {
    return null;
  }

  return (
    <div className="strapi-page">
      {/* Optional page title */}
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        {pageData.title || "Untitled Page"}
      </h1>

      {/* SEO meta tags */}
      {pageData.seo && (
        <PageHelmet
          title={pageData.seo.metaTitle}
          description={pageData.seo.metaDescription}
        />
      )}

      {/* Hero section */}
      {pageData.hero && <StrapiHero defaultContent={pageData.hero} />}

      {/* Dynamic zone rendering */}
      {Array.isArray(pageData.Content) && pageData.Content.length > 0 ? (
        pageData.Content.map((component, index) => {
          const componentType = component.__component?.split(".").pop();

          switch (componentType) {
            case "section":
              return <StrapiSection key={index} defaultContent={component} />;
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
                  <p><strong>Component not implemented:</strong></p>
                  <pre>{component.__component}</pre>
                </div>
              );
          }
        })
      ) : (
        <p style={{ padding: "2rem", textAlign: "center" }}>
          No content available for this page.
        </p>
      )}
    </div>
  );
};

export default StrapiPage;
