import React, { useState } from "react";
import styles from "./HomePage.module.css";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import VideoModal from "../components/VideoModal/VideoModal";
import PageHelmet from "../components/PageHelmet";
import SocialShare from "../components/SocialShare/SocialShare";
import beamImage from "../assets/images/dispositivos_header_home.png";
import appStoreIcon from "../assets/icons/logo_app_store.png";
import googlePlayIcon from "../assets/icons/logo_google_play.png";
import star5 from "../assets/images/n5-1-1.svg";
import top50 from "../assets/images/top50_ranking.png.webp";
import platformImage from "../assets/images/imagem_video-2.png";
import partnerLogos from "../assets/images/partners_logos.png";
import beamUniverse from "../assets/images/beam_universe.png";
import problemImage from "../assets/images/the_problem.png";
import solutionImage from "../assets/images/the_solution.png";
import fundoVideo from "../assets/icons/fundo_video.svg";
import mapImage from "../assets/images/map-testi-home9.png";
import FAQ from "../components/FAQ";

// YouTube video URL
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=doKbQAqioig";

// Example of data that could come from a CMS in the future
const pageData = {
  hero: {
    image: beamImage,
    title: "Shaping the future of Retail",
    description:
      "Beam's mission is to unite digital payments, consumer experience and retail marketing. To do this, Beam wallet focuses on all the pillars of its innovation strategy, creating an authentic 360º solution adapted to all retail and commerce agents.",
  },
  rankingSection: {
    subtitle: "BEAM WALLET",
    title: "#5 in Financial IT Pathfinder Rankings",
    description:
      "Coming in at No. 5 on the Top 50 most promising startups from across Europe. Voted by an expert Panel, consisting of industry veterans, venture capitalists (VCs) and Financial IT's senior editors and research analysts.",
    image: star5,
    imageAlt: "Number 5 ranking",
    decoration: null,
  },
  platformSection: {
    subtitle: "WHO WE ARE",
    title: "Platform for the future",
    description:
      "Beam is a global payments acceptance platform for the 21st century with built-in support for smart contracts. Rather than wasting over $4.5 trillion on payment fees, utilizing unmeasurable marketing and inefficient processes, we created Beam to allow stakeholders of the retail value chain to reward their customers directly.",
    image: platformImage,
    imageAlt: "Platform video thumbnail",
    imagePosition: "center",
    secondaryDescription:
      "Our vision is to create a future where every product and service is perfectly matched to our needs and wants; and knows the customer it's destined for in advance. We are no longer wasting our time searching for products and services; and the retailers are not wasting their money searching for us. Instead, what we need and want find us at the right time, right place and for the right price.",
    hasPlayButton: true,
    backgroundColor: fundoVideo,
  },
  partnersSection: {
    subtitle: "PARTNERS & SUCCESS CASES",
    title: "Where Beam is making a difference",
    description:
      "We have several technology partners with whom we have carried out BEAM integrations: SAGE, SHOPIFY, WOOCOMMERCE. Whether implementations in ecommerce checkouts, or as a payment method in invoicing software.\n\nWe deserve the trust of hundreds of stores that have decided to innovate and be more futuristic when it comes to accepting payments. Be part of our huge list of partners and take your business to the highest level of success.",
    image: partnerLogos,
    imageAlt: "Partner logos",
    imagePosition: "right",
  },
  marketSection: {
    subtitle: "NO COMPETITION",
    title: "Market Position",
    description:
      "With built-in support for smart contracts, Beam enables all stakeholders in the entire retail value chain to exchange data for value without having to invest in a proprietary loyalty solution or spend any money up front. And since multiple network participants are competing to unlock the value attached to smart contracts, the stakeholders will always get the best possible outcome in terms of effectiveness and cost efficiency. \n\nIn addition, the added benefit of Beam as Payment method allows customers to automatically collect cash rewards on each purchase they can use whenever and wherever they want, as well as the possibility of using another source of funding to pay for purchases. \n\nFinally, when joining Beam, Merchants do not need to have banking licenses or deal with agreements and proprietary integrations at each point of sale. A single integration with the Beam Platform takes care of all integrations, fund flow and settlements between all parts of the network.",
    image: beamUniverse,
    imagePosition: "center",
    imageAlt: "",
  },
  featureSection: {
    subtitle: "ECOSYSTEMS",
    title: "Why choose Beam Wallet",
    features: [
      {
        icon: styles.retailIcon,
        title: "Retail value chain stakeholders:",
        description: "Achieve the desired behavior encoded in smart contracts.",
      },
      {
        icon: styles.customersIcon,
        title: "Customers",
        description: "Earn monetary or intrinsic value from every transaction.",
      },
      {
        icon: styles.networksIcon,
        title: "Networks participants",
        description:
          "Unlock the value attached to the smart contract of a given challenge.",
      },
      {
        icon: styles.tokenIcon,
        title: "Token holders",
        description:
          "The value of a Beam token is linked to the total throughput of transactions processed on the network.",
      },
    ],
  },
  becomeUsSection: {
    title: "Want to become part of the team?",
    description: "Send us your application and we'll be in touch.",
    buttonText: "Get in Touch",
    buttonUrl: "/careers",
  },
  blogCtaSection: {
    title: "Visit our blog today!",
    description: "Stay informed with the latest news and updates.",
    buttonText: "Click here",
    buttonUrl: "https://www.blog.beamwallet.com/",
  },
};

// Statistics data
const statsData = [
  {
    number: "50M+",
    description: "Users downloads & installations",
    colorClass: styles.statPink,
  },
  {
    number: "1M+",
    description: "Transactions Everyday",
    colorClass: styles.statPink,
  },
  {
    number: "100M+",
    description: "Number of rewards redeemed worldwide",
    colorClass: styles.statPink,
  },
  {
    number: "300k",
    description: "Terminals",
    colorClass: styles.statPurple,
  },
  {
    number: "100k+",
    description: "Stores accept Beam",
    colorClass: styles.statPurple,
  },
];

const HomePage = () => {
  // State for video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Toggle video modal
  const toggleVideoModal = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  // Render download buttons for the app
  const renderAppButtons = () => (
    <div className={styles.homeAppButtons}>
      <a
        href="https://apps.apple.com/au/app/beam/id560637969"
        className={styles.appStoreBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={appStoreIcon} alt="App Store" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.beamwallet&hl=en"
        className={styles.googlePlayBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={googlePlayIcon} alt="Google Play" />
      </a>
    </div>
  );

  return (
    <div className={styles.homePageContainer}>
      {/* Page-specific meta tags and title */}
      <PageHelmet
        title="Beam Wallet | Pay Faster and Earn more - Beam Wallet"
        pageName="home"
      />

      {/* CTA section */}
      <CTA theme="teal" />
      <Hero
        image={pageData.hero.image}
        title={pageData.hero.title}
        description={pageData.hero.description}
      >
        {renderAppButtons()}
      </Hero>

      {/* Ranking section - Custom implementation */}
      <div className={styles.rankingSection}>
        <div className={styles.rankingContent}>
          <div className={styles.rankingImageContainer}>
            <img
              src={pageData.rankingSection.image}
              alt={pageData.rankingSection.imageAlt}
              className={styles.rankingImage}
            />
          </div>
          <div className={styles.rankingTextContainer}>
            <div className={styles.rankingSubtitle}>
              {pageData.rankingSection.subtitle}
            </div>
            <h2 className={styles.rankingTitle}>
              {pageData.rankingSection.title}
            </h2>
            <div className={styles.rankingDescription}>
              {pageData.rankingSection.description}
            </div>
            <div className={styles.rankingLogoWrapper}>
              <a
                href="https://beamwallet.com/wp-content/uploads/2023/08/TOP50.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.rankingLogoLink}
              >
                <img
                  src={top50}
                  alt="TOP50 Financial IT"
                  className={styles.rankingLogo}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Platform section with YouTube video */}
      <Section
        subtitle={pageData.platformSection.subtitle}
        title={pageData.platformSection.title}
        description={pageData.platformSection.description}
        image={pageData.platformSection.image}
        imageAlt={pageData.platformSection.imageAlt}
        imagePosition={pageData.platformSection.imagePosition}
        hasPlayButton={pageData.platformSection.hasPlayButton}
        onPlayButtonClick={toggleVideoModal}
        secondaryDescription={pageData.platformSection.secondaryDescription}
        backgroundColor={pageData.platformSection.backgroundColor}
        textColor="dark"
        className="page-section"
      />

      {/* Video Modal */}
      <VideoModal
        videoUrl={YOUTUBE_VIDEO_URL}
        isOpen={isVideoModalOpen}
        onClose={toggleVideoModal}
      />

      {/* Partners section - Direct HTML/CSS implementation */}
      <div className={styles.customPartnersSection}>
        <div className={styles.partnersContent}>
          <div className={styles.partnersTextContainer}>
            <div className={styles.partnersSubtitle}>
              {pageData.partnersSection.subtitle}
            </div>
            <h2 className={styles.partnersTitle}>
              {pageData.partnersSection.title}
            </h2>
            <div className={styles.partnersDescription}>
              {pageData.partnersSection.description}
            </div>
          </div>
          <div className={styles.partnersImageContainer}>
            <img
              src={pageData.partnersSection.image}
              alt={pageData.partnersSection.imageAlt}
              className={styles.partnersImage}
            />
          </div>
        </div>
      </div>

      {/* Market Section - Direct HTML/CSS implementation */}
      <div className={styles.customMarketSection}>
        <div className={styles.marketContent}>
          <div className={styles.marketTextContainer}>
            <div className={styles.marketSubtitle}>
              {pageData.marketSection.subtitle}
            </div>
            <h2 className={styles.marketTitle}>
              {pageData.marketSection.title}
            </h2>
            <div className={styles.marketDescription}>
              {pageData.marketSection.description
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className={styles.marketParagraph}>
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
          <div className={styles.marketImageContainer}>
            <img
              src={pageData.marketSection.image}
              alt={pageData.marketSection.imageAlt}
              className={styles.marketImage}
            />
          </div>
        </div>
      </div>

      {/* Problem and Solution sections grouped together */}
      <div className={styles.problemSolutionContainer}>
        {/* Problem section */}
        <Section
          cardStyle={true}
          cardLabel="The problem"
          title="The Vicious Cycle of Uncertainty"
          description="Over $4.5 trillion dollars are extracted out of the retail value chain each year in the form of payment processing fees, upfront marketing spend and waste."
          image={problemImage}
          imagePosition="right"
          backgroundColor="problem"
        />

        {/* Solution section */}
        <Section
          cardStyle={true}
          cardLabel="The solution"
          title="Win the Data War"
          description="Rather than spending trillions on payment processing fees, media buying and marketing, the retail value chain rewards its customers directly for their data. Every interaction with customers generates insights driving better decisions and further reducing waste."
          image={solutionImage}
          imagePosition="left"
          backgroundColor="solution"
        />
      </div>

      {/* Why choose Beam wallet section */}
      <div className={styles.featureSection}>
        <div className={styles.featureSectionHeader}>
          <div className={styles.featureSubtitle}>
            {pageData.featureSection.subtitle}
          </div>
          <h2 className={styles.featureTitle}>
            {pageData.featureSection.title}
          </h2>
        </div>

        <div className={styles.featureCards}>
          {pageData.featureSection.features.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={`${styles.featureIcon} ${feature.icon}`}></div>
              <h3 className={styles.featureCardTitle}>{feature.title}</h3>
              <p className={styles.featureCardDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Become part of the team section - Using direct JSX --- */}
      <div className={styles.ctaBox}>
        <div className={styles.ctaBoxText}>
          <h2 className={styles.ctaBoxTitle}>
            {pageData.becomeUsSection.title}
          </h2>
          <p className={styles.ctaBoxDescription}>
            {pageData.becomeUsSection.description}
          </p>{" "}
        </div>
        <div className={styles.ctaBoxAction}>
          <a
            href={pageData.becomeUsSection.buttonUrl}
            className={styles.ctaBoxButton}
          >
            {pageData.becomeUsSection.buttonText}
          </a>
        </div>
      </div>

      {/* --- Statistics Section --- */}
      <div className={styles.statsSection}>
        {/* World Map Image */}
        <div className={styles.statsMapContainer}>
          <img
            src={mapImage}
            alt="World map with user testimonials"
            className={styles.statsMapImage}
          />
        </div>
        {/* Statistics Grid */}
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div className={styles.statItem} key={index}>
              <div className={`${styles.statNumber} ${stat.colorClass}`}>
                {stat.number}
              </div>
              <div className={styles.statDescription}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FAQ Section --- */}
      <FAQ />

      {/* --- Blog CTA Section - Using direct JSX --- */}
      <div className={styles.ctaBox}>
        <div className={styles.ctaBoxText}>
          <h2 className={styles.ctaBoxTitle}>
            {pageData.blogCtaSection.title}
          </h2>
          <p className={styles.ctaBoxDescription}>
            {pageData.blogCtaSection.description}
          </p>
        </div>
        <div className={styles.ctaBoxAction}>
          <a
            href={pageData.blogCtaSection.buttonUrl}
            className={styles.ctaBoxButton}
          >
            {pageData.blogCtaSection.buttonText}
          </a>
        </div>
      </div>

     
    </div>
  );
};

export default HomePage;
