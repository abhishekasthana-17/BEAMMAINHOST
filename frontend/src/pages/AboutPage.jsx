import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";

// images
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

import styles from "./AboutPage.module.css";

// Image grid component
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

// Platform Features component
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

// Vision component
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

// Logo Showcase component
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

// Leadership Team component
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

// Contact CTA component
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

const AboutPage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "About Beam Wallet";
  }, []);

  return (
    <div className={styles.aboutPageContainer}>
      <PageHelmet title="About Beam Wallet" pageName="about" />

      <Hero
        title="About Us"
        backgroundColor="bg-pink" // Note: This relies on bg-pink being global
        // Omit other props like image, description, button for a simple hero
      />
      {/* First Section with WHO WE ARE content and image grid */}
      <Section
        subtitle="WHO WE ARE:"
        title="The Technological Revolution of Digital Payments"
        description={
          <div className={styles.sectionDescription}>
            <p>
              BEAM represents a state-of-the-art mobile payment app, providing
              users with a convenient and secure platform for conducting
              transactions, overseeing loyalty programs, and accessing exclusive
              deals, all within the convenience of their smartphones. Instant
              cashback rewards are applicable across all BEAM-affiliated
              retailers, both online and offline.
            </p>
            <p>
              The app is readily available for free download on both the Apple
              Store and Play Store, having garnered considerable consumer
              rewards for renowned brands like Carrefour, Calvin Klein, Costa
              Coffee, Tommy Hilfiger, and numerous others. The BEAM Token is a
              cutting-edge digital asset built on the principles of
              decentralization, security, and scalability. Powered by the
              ETHEREUM Blockchain (ERC-20) is designed to have maximum liquidity
              and should appreciate in value significantly as the Beam Platform
              scales.
            </p>
            <p>
              The BEAM token sale will provide resources for expanding,
              improving, and growing the Beam Platform. Holders of BEAM tokens
              are provided instant liquidity, meaning they are free to exchange
              their tokens whenever necessary.
            </p>
          </div>
        }
        image={<ImageGrid />}
        align="left"
        imagePosition="right"
        textAlign="left"
        className={styles.firstSection}
      />
      {/* Platform Features Section */}
      <Section
        description={<PlatformFeatures />}
        align="left"
        textAlign="left"
      />
      {/* Vision Section */}
      <Section
        description={<VisionComponent />}
        align="left"
        textAlign="left"
      />
      {/* Financial IT Ranking Section */}
      <Section
        description={
          <div className={styles.customRankingSection}>
            <h2 className={styles.rankingTitle}>
              #5 in Financial IT Pathfinder Rankings for 2016/2017
            </h2>
            <div className={styles.sectionDescription}>
              <p>
                Coming in at No. 5 on the Top 50 most promising startups from
                across the World. Voted by an expert Panel, consisting of
                industry veterans, venture capitalists (VCs) and Financial IT's
                senior editors and research analysts.
              </p>
            </div>
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
      {/* Logo Showcase Section */}
      <LogoShowcase />
      {/* Pink Background Section with 360 Image */}
      <div className={styles.retailSection}>
        <div className={styles.retailSectionBg}></div>
        <div className={styles.retailSectionBgLines}></div>
        <div className={styles.retailSectionContent}>
          <div className={styles.retailImage}>
            <img src={image360} alt="Beam 360 innovation diagram" />
          </div>
          <div className={styles.retailTextContent}>
            <h3 className={styles.retailSubtitle}>
              SHAPING THE FUTURE OF RETAIL
            </h3>
            <h2 className={styles.retailTitle}>
              Innovators in Retail. Digitalizers of the consumer experience
            </h2>
            <h3 className={styles.retailSubheading}>Where are we going</h3>
            <p className={styles.retailDescription}>
              Beam's mission is to unite digital payments, consumer experience
              and retail marketing. To this, Beam Wallet focuses on all the
              pillars of its innovation strategy, creating an authentic 360°
              solution adapted to all retail and commerce agents.
            </p>
          </div>
        </div>
      </div>
      {/* Leadership Section */}
      <Section backgroundColor="white" description={<LeadershipTeam />} />
      {/* Contact CTA Section */}
      <Section backgroundColor="white" description={<ContactCTA />} />
    </div>
  );
};

export default AboutPage;
