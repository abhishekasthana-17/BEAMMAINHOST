import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import styles from "./PayInStorePage.module.css";
import CTA from "../components/CTA/CTA";
import PageHelmet from "../components/PageHelmet";

import appStoreIcon from "../assets/icons/logo_app_store.png";
import googlePlayIcon from "../assets/icons/logo_google_play.png";
import devicesImage from "../assets/images/dispositivos-600x859 (1).png";
import digitalWalletImg from "../assets/images/digital_wallet.png";
import earnAutomaticallyImg from "../assets/images/earn_automatically.png";
import beamNetwork from "../assets/images/beam_network.png";

const pageData = {
  hero: {
    image: devicesImage,
    title: "Pay with Beam at your favorite local stores",
    subtitle: "PAY IN STORE",
    description:
      "All you need is your smartphone. With the Beam app you will have all your cards available whenever you need your wallet. Contactless payment methods allow for a quick, fluid and smooth purchasing experience with immediate cashback.",
  },
  digitalWalletImg1: {
    subtitle: "DIGITAL WALLET",
    title: "Pay using your Smartphone",
    image: digitalWalletImg,
    imagePosition: "left",
    imageAlt: "Paying with Beam at a store",
    description:
      "You're in your favorite place, with your friends, what more do you need? Pay quickly and easily. That's where Beam comes in, it only needs your smartphone to manage all payment processing. Easy isn't it?",
  },
  earnAutomaticallyImg1: {
    subtitle: "EARN AUTOMATICALLY",
    title: "Get Cashback",
    image: earnAutomaticallyImg,
    imagePosition: "right",
    imageAlt: "Earning cashback with Beam",
    description:
      "What's better than being rewarded by the store where you made a purchase? The merchants that are part of our network thank you with each purchase for choosing them and for using Beam, returning a percentage in cashback so that you can spend it on another purchase on the network, without an expiration date or geographical limitations. It's our way of showing that you are important to us!",
  },
  beamNetworkImg: {
    image: beamNetwork,
    imagePosition: "left",
    imageAlt: "Beam Network",
    title: "One of a kind network",
    subtitle: "BEAM NETWORK",
    description:
      "Our network is global and diverse. You can buy a product in one country and spend the cashback in another, without geographic or sectoral limitations. It's an entire network working together to give you the best and the best experience.",
  },
};

const PayInStorePage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Pay in Store - Beam Wallet";
  }, []);

  const renderAppButtons = () => (
    <div className={styles.homeAppButtons}>
      <a href="https://apps.apple.com/au/app/beam/id560637969" className={styles.appStoreBtn}>
        <img src={appStoreIcon} alt="App Store" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.beamwallet&hl=en"
        className={styles.googlePlayBtn}
      >
        <img src={googlePlayIcon} alt="Google Play" />
      </a>
    </div>
  );

  return (
    <>
      <PageHelmet title="Pay in Store - Beam Wallet" pageName="pay-in-store" />

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

export default PayInStorePage;
