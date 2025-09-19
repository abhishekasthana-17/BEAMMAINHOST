import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContent } from "../utils/strapiService";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import PageHelmet from "./PageHelmet/PageHelmet";
import SectionButton from "./SectionButton";
import SocialShare from "./SocialShare/SocialShare";

// Import all the existing images from AboutPage
import dispositicoImg from "../assets/images/dispositico.jpg";
import missionImg from "../assets/images/mission.jpg";
import pagamentoImg from "../assets/images/pagamento.jpg";
import restaurantImg from "../assets/images/restaurant-2.jpg";
import top50RankingImg from "../assets/images/top50_ranking.png.webp";
import image360 from "../assets/images/360.png";

// team images
import nataliaImage from "../assets/images/natalia_catarina-1.jpg";
import rubenImage from "../assets/images/ruben_teixeira-1.jpg";
import joaoImage from "../assets/images/joao_vilela_verde.jpg";
import joseImage from "../assets/images/jose_serrao.jpg";

// logo SVGs
import starbucksLogo from "../assets/images/starbucks.svg";
import subwayLogo from "../assets/images/subway.svg";
import carrefourLogo from "../assets/images/carrefour.svg";
import calvinKleinLogo from "../assets/images/calvin_klein.svg";
import aldoLogo from "../assets/images/aldo.svg";

import styles from "../pages/AboutPage.module.css";

// Import existing components from AboutPage
const ImageGrid = () => {
  return (
    <div className={styles.imageGrid}>
      <div className={styles.imageRow}>
        <div className={styles.imageWrapper}>
          <img src={dispositicoImg} alt="Strategy" />
          <div className={styles.imageOverlay}>
            <span className={styles.imageText}>Strategy</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={missionImg} alt="Vision" />
          <div className={styles.imageOverlay}>
            <span className={styles.imageText}>Vision</span>
          </div>
        </div>
      </div>
      <div className={styles.imageRow}>
        <div className={styles.imageWrapper}>
          <img src={pagamentoImg} alt="Philosophy" />
          <div className={styles.imageOverlay}>
            <span className={styles.imageText}>Philosophy</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={restaurantImg} alt="Mission" />
          <div className={styles.imageOverlay}>
            <span className={styles.imageText}>Mission</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Logo Showcase component (copied from AboutPage)
const LogoShowcase = () => {
  return (
    <div className={styles.logoGrid}>
      <div className={styles.logoItem}>
        <img src={starbucksLogo} alt="Starbucks" />
      </div>
      <div className={styles.logoItem}>
        <img src={subwayLogo} alt="Subway" />
      </div>
      <div className={styles.logoItem}>
        <img src={carrefourLogo} alt="Carrefour" />
      </div>
      <div className={styles.logoItem}>
        <img src={calvinKleinLogo} alt="Calvin Klein" />
      </div>
      <div className={styles.logoItem}>
        <img src={aldoLogo} alt="Aldo" />
      </div>
    </div>
  );
};

// Platform Features component (copied from AboutPage)
const PlatformFeatures = () => {
  return (
    <div className={styles.platformFeatures}>
      <h3>Our Beam Wallet Platform:</h3>

      <div className={styles.featureItem}>
        <strong>Blockchain and Smart Contracts:</strong> Based on blockchain
        technology and the execution of smart contracts, we ensure security,
        transparency, and efficiency in all transactions.
      </div>

      <div className={styles.featureItem}>
        <strong>Data as Currency:</strong> We value customer data, rewarding
        them for sharing valuable information, which in turn drives powerful
        insights for businesses.
      </div>

      <div className={styles.featureItem}>
        <strong>Agile and Secure Payments:</strong> We simplify and streamline
        payments both physical and online, providing a fluid and secure
        experience for everyone.
      </div>

      <div className={styles.featureItem}>
        <strong>Direct Communication:</strong> We connect companies and
        customers, allowing a direct dialogue without intermediaries,
        eliminating fees and opening a new communication channel.
      </div>
    </div>
  );
};

// Vision component (copied from AboutPage)
const VisionComponent = () => {
  return (
    <div className={styles.visionComponent}>
      <h3>Together, we build a future where:</h3>

      <ul className={styles.visionList}>
        <li>Customers are valued and rewarded.</li>
        <li>Companies gain valuable insights and direct their strategies.</li>
        <li>Payments are simple, fast and secure.</li>
        <li>
          Communication between businesses and customers is transparent and
          straightforward.
        </li>
      </ul>

      <p className={styles.teamInvite}>
        Meet the fabulous team behind this technological revolution and join us
        on this journey!
      </p>
    </div>
  );
};

// Leadership Team component (copied from AboutPage - exact structure)
const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Natália Catarina",
      position: "CEO",
      image: nataliaImage,
    },
    {
      name: "Rúben Teixeira",
      position: "GENERAL COORDINATOR",
      image: rubenImage,
    },
    {
      name: "João Vilela",
      position: "HEAD OF LEGAL",
      image: joaoImage,
    },
    {
      name: "José Serrão",
      position: "FINANCIAL CONSULTANT",
      image: joseImage,
    },
  ];

  return (
    <div className={styles.leadershipSection}>
      <div className={styles.leadershipHeader}>
        <div className={styles.leadershipSubtitle}>BEAM WALLET</div>
        <h2 className={styles.leadershipTitle}>Leadership</h2>
        <p className={styles.leadershipDescription}>
          We help businesses reduce payment processing costs and get to know and
          communicate with their customers.
        </p>
      </div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.teamMemberInfo}>
              <h3 className={styles.teamMemberName}>{member.name}</h3>
              <p className={styles.teamMemberPosition}>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact CTA component (copied exactly from AboutPage)
const ContactCTA = () => {
  return (
    <div className={styles.contactCTASection}>
      <div className={styles.contactCTASubtitle}>
        DO YOU WANT TO KNOW MORE ABOUT US?
      </div>
      <h2 className={styles.contactCTATitle}>Get in touch</h2>
      <a href="/contacts" className={styles.contactCTAButton}>
        Contact Us
      </a>
    </div>
  );
};

/**
 * StrapiAboutPage component that uses Strapi for text content but keeps existing images and layout
 */
const StrapiAboutPage = () => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await getContent("pages", "about-us");

        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          const aboutUsPage =
            response.data.find((page) => page.slug === "about-us") ||
            response.data[0];
          setPageData(aboutUsPage);
        } else {
          console.error("About Us page not found in Strapi");
          navigate("/404", { replace: true });
        }
      } catch (err) {
        console.error("Error fetching About Us page data:", err);
        setError(err);
        navigate("/404", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [navigate]);

  if (loading) {
    return <div className="loading">Loading About Us content...</div>;
  }

  if (error || !pageData) {
    return null;
  }

  // Map background color from Strapi to CSS class
  const getBackgroundColorClass = (bgColor) => {
    const colorMap = {
      "bg-pink": "bg-pink",
      "bg-teal": "bg-teal",
      "bg-yellow": "bg-yellow",
      "bg-purple": "bg-purple",
      "bg-charcoal": "bg-charcoal",
      default: "",
    };
    return colorMap[bgColor] || "";
  };

  // Process content from Strapi (handle both rich text and plain text)
  const processContent = (content) => {
    if (!content) return "";

    if (typeof content === "string") {
      // Process markdown-style formatting
      const processMarkdown = (text) => {
        // Handle bold text **text**
        let processed = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        // Handle italic text *text*
        processed = processed.replace(/\*(.*?)\*/g, "<em>$1</em>");
        return processed;
      };

      return content
        .split("\n\n")
        .map((paragraph, index) => {
          if (paragraph.trim() === "") return null;

          // Check if it's a list (starts with - or numbers)
          if (paragraph.includes("\n-") || paragraph.startsWith("-")) {
            const listItems = paragraph
              .split("\n")
              .filter((item) => item.trim() !== "");
            return (
              <ul key={index} className={styles.visionList}>
                {listItems.map((item, itemIndex) => {
                  const cleanItem = item.replace(/^-\s*/, "").trim();
                  return (
                    <li
                      key={itemIndex}
                      dangerouslySetInnerHTML={{
                        __html: processMarkdown(cleanItem),
                      }}
                    />
                  );
                })}
              </ul>
            );
          }

          // Regular paragraph
          return (
            <p
              key={index}
              dangerouslySetInnerHTML={{
                __html: processMarkdown(paragraph.replace(/\n/g, " ")),
              }}
            />
          );
        })
        .filter(Boolean);
    }

    return content;
  };

  return (
    <div className={styles.aboutPageContainer}>
      <PageHelmet title="About Beam Wallet" pageName="about" />

      {/* Hero from Strapi */}
      {pageData.hero && (
        <Hero
          title={pageData.hero.title}
          description={pageData.hero.description}
          backgroundColor={getBackgroundColorClass(
            pageData.hero.backgroundColor
          )}
        />
      )}

      {/* First Section with content from Strapi + ImageGrid */}
      {pageData.Content && pageData.Content[0] && (
        <Section
          subtitle={pageData.Content[0].subtitle}
          title={pageData.Content[0].title}
          description={
            <div className={styles.sectionDescription}>
              {processContent(pageData.Content[0].content)}
            </div>
          }
          image={<ImageGrid />}
          align="left"
          imagePosition="right"
          textAlign="left"
          className={styles.firstSection}
        />
      )}

      {/* Platform Features Section from Strapi */}
      {pageData.Content && pageData.Content[1] && (
        <Section
          title={pageData.Content[1].title}
          description={
            <div className={styles.sectionDescription}>
              {processContent(pageData.Content[1].content)}
            </div>
          }
          align="left"
          textAlign="left"
        />
      )}

      {/* Vision Section from Strapi */}
      {pageData.Content && pageData.Content[2] && (
        <Section
          title={pageData.Content[2].title}
          description={
            <div className={styles.sectionDescription}>
              {processContent(pageData.Content[2].content)}
            </div>
          }
          align="left"
          textAlign="left"
        />
      )}

      {/* Financial IT Ranking Section from Strapi */}
      {pageData.Content && pageData.Content[3] && (
        <Section
          title={pageData.Content[3].title}
          description={
            <div className={styles.sectionDescription}>
              {processContent(pageData.Content[3].content)}
            </div>
          }
          image={
            <div className={styles.rankingImage}>
              <a
                href="/documents/TOP50.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.rankingLogoLink}
              >
                <img
                  src={top50RankingImg}
                  alt="Top 50 Financial IT Pathfinder Ranking"
                />
              </a>
            </div>
          }
          align="left"
          imagePosition="right"
          textAlign="left"
        />
      )}

      {/* Logo Showcase Section */}
      <LogoShowcase />

      {/* Pink Background Section with 360 Image from Strapi */}
      {pageData.Content && pageData.Content[4] && (
        <div className={styles.retailSection}>
          <div className={styles.retailSectionBg}></div>
          <div className={styles.retailSectionBgLines}></div>
          <div className={styles.retailSectionContent}>
            <div className={styles.retailImage}>
              <img src={image360} alt="Beam 360 innovation diagram" />
            </div>
            <div className={styles.retailTextContent}>
              <h3 className={styles.retailSubtitle}>
                {pageData.Content[4].subtitle}
              </h3>
              <h2 className={styles.retailTitle}>
                {pageData.Content[4].title}
              </h2>
              <div className={styles.retailDescription}>
                {processContent(pageData.Content[4].content)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Leadership Section from Strapi */}
      {pageData.Content && pageData.Content[5] && (
        <Section
          backgroundColor="white"
          description={
            <div className={styles.leadershipSection}>
              <div className={styles.leadershipHeader}>
                <div className={styles.leadershipSubtitle}>
                  {pageData.Content[5].subtitle}
                </div>
                <h2 className={styles.leadershipTitle}>
                  {pageData.Content[5].title}
                </h2>
                <p className={styles.leadershipDescription}>
                  {processContent(pageData.Content[5].content)}
                </p>
              </div>

              {/* Team Grid - just the cards without duplicating the header */}
              <div className={styles.teamGrid}>
                {[
                  {
                    name: "Natália Catarina",
                    position: "CEO",
                    image: nataliaImage,
                  },
                  {
                    name: "Rúben Teixeira",
                    position: "GENERAL COORDINATOR",
                    image: rubenImage,
                  },
                  {
                    name: "João Vilela",
                    position: "HEAD OF LEGAL",
                    image: joaoImage,
                  },
                  {
                    name: "José Serrão",
                    position: "FINANCIAL CONSULTANT",
                    image: joseImage,
                  },
                ].map((member, index) => (
                  <div key={index} className={styles.teamMember}>
                    <div className={styles.teamMemberImage}>
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className={styles.teamMemberInfo}>
                      <h3 className={styles.teamMemberName}>{member.name}</h3>
                      <p className={styles.teamMemberPosition}>
                        {member.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      )}

      {/* Contact CTA Section from Strapi using SectionButton */}
      {pageData.Content && pageData.Content[6] && (
        <Section
          backgroundColor="white"
          description={
            <SectionButton
              subtitle={pageData.Content[6].subtitle}
              title={pageData.Content[6].title}
              buttonText="CONTACT US"
              url="/contacts"
              external={false}
            />
          }
        />
      )}

      {/* Share Section */}
      <div className={styles.shareSection}>
        <div className={styles.shareContent}>
          <h3 className={styles.shareTitle}>Share Our Story</h3>
          <p className={styles.shareDescription}>
            Help others learn about Beam Wallet's mission and vision
          </p>
          <SocialShare
            url="/about-us"
            title="About Beam Wallet - Digital Payment Innovation"
            description="Learn about Beam Wallet's mission to revolutionize digital payments with blockchain technology and smart contracts."
            platforms={['linkedin', 'twitter', 'whatsapp', 'facebook', 'telegram', 'email']}
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default StrapiAboutPage;
