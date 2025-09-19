import React, { useEffect } from "react";
import styles from "./NewsPage.module.css";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";
import menaCompaniesImage from "../assets/images/mena_companies-1.jpg";

const NewsPage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "News - Beam Wallet";
  }, []);

  return (
    <div className={styles.newsPage}>
      {/* Page-specific meta tags and title */}
      <PageHelmet title="News - Beam Wallet" pageName="news" />

      {/* Hero Section */}
      <Hero title="News" backgroundColor={styles.pinkBackground} />

      {/* News Article */}
      <Section
        image={menaCompaniesImage}
        imagePosition="image-top"
        title="MENA Companies Embrace Embedded Finance"
        description="In the Middle East and North Africa (MENA), embedded finance is picking up steam among telcos, tech startups and retailers."
        className={styles.newsArticle}
        imageAlt="MENA Companies Embrace Embedded Finance"
      />
    </div>
  );
};

export default NewsPage;
