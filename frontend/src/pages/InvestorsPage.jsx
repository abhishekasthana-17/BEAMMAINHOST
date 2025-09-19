import React from "react";
import styles from "./InvestorsPage.module.css";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import heroStyles from "../components/Hero/Hero.module.css";
import PageHelmet from "../components/PageHelmet";

import cofreHeader from "../assets/images/cofre_header-1.png";
import top50 from "../assets/images/top50_ranking.png";
import image360 from "../assets/images/360.png";
import beamUniverse from "../assets/images/beam_universe.png";

import Section from "../components/Section/Section";

const pageData = {
  hero: {
    image: cofreHeader,
    category: "INVESTORS",
    title: "Make your money work for you!",
    description:
      "Amidst the universe of numbers, calculations and research, we have built a unique business model. You can count on BEAM's global network to overcome growth challenges and multiply the impact of your investments worldwide. Be part of this network of high growth entrepreneurs. For entrepreneurs, investors and investment funds.",
    buttonText: "CONTACT US",
  },
  investorDescription: {
    image: image360,
    imageAlt: "socialInvestor",
    imagePosition: "right",
    description: (
      <>
        <p style={{ marginBottom: "30px" }}>
          Beam Wallet is a marketing, loyalty and global payments acceptance
          platform with built-in support for smart contracts.
        </p>
        <p style={{ marginBottom: "30px" }}>
          Rather than wasting over $5.2 trillion on payments fees, utilizing
          unmeasurable marketing and inefficient processes, we create Beam
          Wallet to allow stakeholders of the retail value to reward their
          customers directly.
        </p>
        <p style={{ marginBottom: "30px" }}>
          The Beam Wallet is revolutionizing the cashback market around the
          world, not only as an innovative platform, but also as a blockchain
          with its own token, the Beam Token. This unique approach eliminates
          exorbitant fees and provides investors with a high profit opportunity,
          driven by the increasing adoption of cryptocurrencies and cashback.
        </p>
        <p>
          Our vision is to create a future where every product and service is
          perfectly matched to our needs and knows the customer it's destined
          for in advance. We are no longer wasting our time searching for
          products and services. And the retailers are no longer wasting their
          money searching for us. Instead, what we need and want find us at the
          right time, right place and for the right price.
        </p>
      </>
    ),
  },

  marketSection: {
    subtitle: "why should i consider investing?",
    title: "For many reasons. Here are the main ones:",
    imagePosition: "center",
    imageAlt: "",
    description: (
      <div>
        <p>
          <strong style={{ color: "#000" }}>
            1. Disruptive blockchain technology:
          </strong>{" "}
          Beam Wallet utilizes blockchain technology to ensure the security,
          transparency, and immutability of transactions, as well as eliminate
          intermediaries and reduce costs. This innovative approach appeals to
          users and investors who are looking for more efficient and secure
          solutions for their finances.
        </p>
        <p>
          <strong style={{ color: "#000" }}>
            2. Beam Token – Exponential Appreciation Potential:
          </strong>{" "}
          The Beam Token is the heart of the Beam ecosystem, used to reward
          users, drive cashback, and fund the development of the platform. With
          the increasing adoption of Beam Wallet and the demand for
          cryptocurrencies, Beam Token holds exponential upside potential,
          providing investors with a significant profit opportunity.
        </p>
        <p>
          <strong style={{ color: "#000" }}>
            3. Sustainable and scalable business model:
          </strong>{" "}
          Beam Wallet generates revenue through the issuance of new Beam Tokens,
          the sale of premium services, and strategic partnerships with
          businesses and merchants. This diverse and scalable business model
          ensures the sustainability of the platform and the continued growth of
          Beam Token's value.
        </p>
        <p>
          <strong style={{ color: "#000" }}>
            4. Engaged and growing community:
          </strong>{" "}
          Beam Wallet has an active and engaged community of users and
          investors, who believe in the potential of the platform and the Beam
          Token. This community drives the adoption of Beam Wallet, contributes
          to the development of the platform, and increases demand for the Beam
          Token, generating a virtuous cycle of growth.
        </p>
        <p>
          <strong style={{ color: "#000" }}>
            5. Visionary and experienced team:
          </strong>{" "}
          Beam Wallet has a multidisciplinary and experienced team with
          expertise in blockchain, cryptocurrencies, finance, marketing, and
          business development. This team is committed to building an innovative
          and sustainable ecosystem that generates value for users and
          investors.
        </p>
      </div>
    ),
  },
  businessModel: {
    title: "Business Model",
    description: (
      <div>
        <p>
          Our business model is based on the volume of transactions between
          consumers and merchants using the Beam platform, assuming both parties
          recognize the advantages of using such system instead of others.
        </p>
        <p>
          With built-in supports for smart contracts, Beam Wallet enables all
          stakeholders in the entire retail value chain to exchange data for
          value without having to invest in a proprietary loyalty solution or
          spend any money upfront. And since multiple network participants are
          competing to unlock the value attached to smart contracts, the
          stakeholders will always get the best possible outcome in terms of
          effectiveness and cost efficiency.
        </p>
        <p>
          The added benefit of Beam Wallet as a payment method enables retail
          customers to earn and burn their rewards automatically as well as pay
          the balance of the transaction with another funding source in a single
          step.
        </p>
        <p>
          Beam Wallet is also a payments acceptance platform. All existing apps
          acting as Issuers and POS vendors as Acquirers are incentivised to
          process transactions on the network.
        </p>
        <p>
          The incentives attached to smart contracts on the Beam networks
          provide all participants with additional revenue streams and will
          therefore exponentially increase participation and adoption of the
          plataform globally.
        </p>
        <p>
          None of the participants on the network are required to get banking
          licenses or deal with settlements and proprietary point-to-point
          integrations. A single integration with the Beam Plataform takes care
          of all integrations, flow of funds and settlements between all parties
          on the network.
        </p>
        <p>
          Furthermore, the Beam system just launched an advanced incentive model
          to all stakeholders in the Beam Wallet universe, by issuing Beam
          tokens with the primary purpose of incentivizing network growth
          through appreciation of its value. You can see all the information
          about the Beam Token&nbsp;
          <a href="https://ico.beamwallet.com/" target="_blank" rel="noopener">
            <b>here</b>
          </a>
          .
        </p>
      </div>
    ),
  },
  lifetimeOpportunity: {
    subtitle: "ONCE-IN-A-LIFETIME OPPORTUNITY",
    title: "BEAM TOKEN",
    description:
      "Beam Wallet represents a unique and promising investment opportunity, combining the growth potential of the cashback market with the disruptive technology of cryptocurrencies. With a solid business model, an experienced team and an engaged community, Beam Wallet is poised to lead the cashback revolution in the world and generate exponential value for its investors through Beam Token.",
    image: beamUniverse,
    imagePosition: "center",
    imageAlt: "",
  },
  becomeInvestor: {
    heading: "START YOUR OWN BUSINESS!",
    title: "Become an Investor",
    buttonText: "CONTACT US",
  },
};

// Bottom CTA component
const BottomCTA = () => {
  return (
    <div className={styles.bottomCtaSection}>
      <h3 className={styles.ctaSubtitle}>START YOU OWN BUSINESS!</h3>
      <h2 className={styles.ctaTitle}>Become an Investor</h2>
      <a href="/investors-form" className={styles.ctaButton}>
        CONTACT US
      </a>
    </div>
  );
};

const InvestorsPage = () => {
  return (
    <>
      <PageHelmet title="Investors - Beam Wallet" pageName="investors" />

      <CTA theme="pink" />
      <Hero
        image={pageData.hero.image}
        imageClassName={styles.investorsHeroImage}
        category={pageData.hero.category}
        title={pageData.hero.title}
        description={pageData.hero.description}
        imagePosition="left"
        backgroundColor={heroStyles.bgTeal}
      >
        <div className={styles.descriptionCTA}>
          <a href="/investors-form" className={styles.contactButton}>
            {pageData.hero.buttonText}
          </a>
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
      </Hero>
      <Section
        subtitle={pageData.investorDescription.subtitle}
        description={
          <div className={styles.customInvestorSection}>
            <h2 className={styles.investorSectionTitle}>
              Transforming each payment into a conversation
            </h2>
            {pageData.investorDescription.description}
          </div>
        }
        image={pageData.investorDescription.image}
        imagePosition={pageData.investorDescription.imagePosition}
        imageAlt={pageData.investorDescription.imageAlt}
        className={`${styles.investorInfoSection} page-section`}
      />

      <Section
        subtitle={pageData.marketSection.subtitle}
        title={pageData.marketSection.title}
        description={pageData.marketSection.description}
        image={pageData.marketSection.image}
        imagePosition={pageData.marketSection.imagePosition}
        imageAlt={pageData.marketSection.imageAlt}
        className={`${styles.marketPositionSection} page-section`}
      />
      <Section
        title={pageData.businessModel.title}
        description={pageData.businessModel.description}
        className={`${styles.businessModelSection} page-section`}
      />

      {/* Money Work Section - Custom implementation */}
      <div className={styles.moneyWorkSection}>
        <div className={styles.moneyWorkContent}>
          <h2 className={styles.moneyWorkTitle}>
            Make your money work for you
          </h2>

          <p className={styles.moneyWorkIntro}>
            As a disruptive technology that adds value to marketing, loyalty,
            payments and blockchain, 100% digital and green (plastic-free &
            paper-free), Beam Wallet has huge growth potential and unlimited and
            global scalability.
          </p>

          <p className={styles.moneyWorkIntro}>
            To the tremendous capacity that the Beam network has on its own, you
            also have to add the value of the Beam Tokens, which has been
            carefully designed to increase progressively over time:
          </p>

          <div className={styles.moneyWorkBox}>
            <p>
              <strong>1.</strong> As a direct result of a Local Partner's
              requirement to hold tokens, supply of Beam tokens in circulation
              will continuously reduce as more Local Partners launch Beam Wallet
              in more countries.
            </p>
          </div>

          <div className={styles.moneyWorkBox}>
            <p>
              <strong>2.</strong> By increasing the size of the acceptance
              network using the Network Development Fund. This will naturally
              attract more users to the platform, increasing the number of
              transactions processed on the network.
            </p>
          </div>

          <div className={styles.moneyWorkBox}>
            <p>
              <strong>3.</strong> Every transaction on the platform results in
              participants automatically acquiring Beam tokens from the market
              with the revenues they generate for their services on the network.
              This improves the liquidity of Beam tokens through constantly
              increasing demand.
            </p>
          </div>

          <p className={styles.moneyWorkOutro}>
            Whilst each of these factors operates independently, collectively
            they are designed to be synergetic, each amplifying the effect of
            the others.
          </p>
        </div>
      </div>

      <Section
        subtitle={pageData.lifetimeOpportunity.subtitle}
        title={pageData.lifetimeOpportunity.title}
        description={pageData.lifetimeOpportunity.description}
        image={pageData.lifetimeOpportunity.image}
        imagePosition={pageData.lifetimeOpportunity.imagePosition}
        imageAlt={pageData.lifetimeOpportunity.imageAlt}
        className="page-section"
      />
      <BottomCTA />
    </>
  );
};

export default InvestorsPage;
