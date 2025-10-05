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
        console.log(`[StrapiPage] Fetching contentType: "${contentType}", slug: "${slug}"`);
        const response = await getContent(contentType, slug);
        console.log(`[StrapiPage] Full response:`, response);

        const pages = response?.data || [];
        const matchingPage = pages.find(
          (page) => page?.attributes?.slug === slug
        );

        if (!matchingPage) {
          console.warn(`No matching page found for slug "${slug}"`);
          navigate("/404", { replace: true });
          return;
        }

        const attributes = matchingPage.attributes;
        console.log(`[StrapiPage] Page attributes:`, attributes);
        setPageData(attributes);
      } catch (err) {
        console.error("Error fetching Strapi page:", err);
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
    return null;
  }

  return (
    <div className="strapi-page">
      {pageData.seo && (
        <PageHelmet
          title={pageData.seo.metaTitle}
          description={pageData.seo.metaDescription}
        />
      )}

      {pageData.hero && <StrapiHero defaultContent={pageData.hero} />}

      {Array.isArray(pageData.Content) &&
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
        })}
    </div>
  );
};

export default StrapiPage;
