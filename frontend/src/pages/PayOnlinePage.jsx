import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import styles from "./PayOnlinePage.module.css";
import CTA from "../components/CTA/CTA";
import PageHelmet from "../components/PageHelmet";

import appStoreIcon from "../assets/icons/logo_app_store.png";
import googlePlayIcon from "../assets/icons/logo_google_play.png";

import siteImage from "../assets/images/site_1-1024x1024.png";
import onlineGatewayImg from "../assets/images/online_gateway.png";
import marketingImg from "../assets/images/marketing-1-720x598.png";
import secureImg from "../assets/images/security.png";

const pageData = {
  hero: {
    image: siteImage,
    title: "Pay with Beam at your favorite local stores",
    subtitle: "PAY IN STORE",
    description:
      "All you need is your smartphone. With the Beam app you will have all your cards available whenever you need your wallet. Contactless payment methods allow for a quick, fluid and smooth purchasing experience with immediate cashback.",
  },
  digitalWalletImg1: {
    subtitle: "ONLINE GATEWAY",
    title: "Pay online",
    image: onlineGatewayImg,
    imagePosition: "left",
    imageAlt: "Paying with Beam at a store",
    description:
      "We are digital natives and were designed for total integration with the digital world. Your online shopping experience needs to be agile, fast and secure and Beam can offer all of this. For us, two steps are enough to give you all this.",
  },
  earnAutomaticallyImg1: {
    subtitle: "AUTHENTICATE YOURSELF",
    title: "So are you a Beamer?",
    image: marketingImg,
    imagePosition: "right",
    imageAlt: "Earning cashback with Beam",
    description:
      "The only step we actually need from you is to verify your identity. If you want to pay, we'll take care of the rest! You receive a unique code that you place on the website and this way we can ensure that you are the one who wants to pay.",
  },
  beamNetworkImg: {
    image: secureImg,
    imagePosition: "left",
    imageAlt: "Beam Network",
    title: "Secure payments",
    subtitle: "SECURITY",
    description:
      "Security. Security is fundamental to any purchase and we take the security of your cards very seriously. Beam is fully compliant with payment security and data processing regulations. All transactions are completely encrypted.",
  },
};

const PayOnlinePage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Pay Online - Beam Wallet";
  }, []);

  const renderAppButtons = () => (
    <div className={styles.homeAppButtons}>
      <a href="https://apps.apple.com/au/app/beam/id560637969" className={styles.appStoreBtn}>
        <img src={appStoreIcon} alt="App Store" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.beamwallet&hl=en" className={styles.googlePlayBtn}>
        <img src={googlePlayIcon} alt="Google Play" />
      </a>
    </div>
  );

  return (
    <>
      <PageHelmet title="Pay Online - Beam Wallet" pageName="pay-online" />

      <CTA />
      <Hero
        image={pageData.hero.image}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
      >
        {renderAppButtons()}
      </Hero>
      <Section
        subtitle={pageData.digitalWalletImg1.subtitle}
        title={pageData.digitalWalletImg1.title}
        description={pageData.digitalWalletImg1.description}
        image={pageData.digitalWalletImg1.image}
        imagePosition={pageData.digitalWalletImg1.imagePosition}
        imageAlt={pageData.digitalWalletImg1.imageAlt}
      />
      <Section
        subtitle={pageData.earnAutomaticallyImg1.subtitle}
        title={pageData.earnAutomaticallyImg1.title}
        image={pageData.earnAutomaticallyImg1.image}
        imagePosition={pageData.earnAutomaticallyImg1.imagePosition}
        description={pageData.earnAutomaticallyImg1.description}
        imageAlt={pageData.earnAutomaticallyImg1.imageAlt}
      />
      <Section
        image={pageData.beamNetworkImg.image}
        imagePosition={pageData.beamNetworkImg.imagePosition}
        imageAlt={pageData.beamNetworkImg.imageAlt}
        title={pageData.beamNetworkImg.title}
        subtitle={pageData.beamNetworkImg.subtitle}
        description={pageData.beamNetworkImg.description}
      />
    </>
  );
};

export default PayOnlinePage;
