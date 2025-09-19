import React, { useState, useEffect } from "react";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import heroStyles from "../components/Hero/Hero.module.css";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";
import styles from "./BeamForBusiness.module.css";

import dispositivos2 from "../assets/images/dispositivos_2-2.png";
import digitalImg from "../assets/images/360.png";
import digitalPayment from "../assets/images/digital_payments.png";
import businessImg from "../assets/images/business.png";

// Import company logos
import aldoLogo from "../assets/icons/aldo.svg";
import calvinLogo from "../assets/icons/calvin_klein.svg";
import carrefourLogo from "../assets/icons/carrefour (1).svg";
import starbucksLogo from "../assets/icons/starbucks.svg";
import subwayLogo from "../assets/icons/subway.svg";

const pageData = {
  hero: {
    image: dispositivos2,
    category: "BEAM FOR BUSINESS",
    title: "Digital payments for your store!",
    subtitle: "LOCAL STORE",
    backgroundColor: "bg-teal",
    description:
      "Our physical payment solutions make implementing a digital payment system very simple. No need for expensive equipment, just a computer, tablet, cell phone or integrate with your POS.",
    buttonText: "JOIN",
    buttonUrl: "#installation-packs",
  },
  section1: {
    subtitle: "DIGITAL PAYMENTS",
    title: "Easily accept payments in your Physical and Online Store",
    image: digitalPayment,
    imagePosition: "right",
    containerAlign: "left",
    description: (
      <>
        <p>
          Start accepting mobile payments in your physical store. No need for
          expensive equipment, or monthly fees . Reduce transaction fees until
          0%.
        </p>
        <p>
          Improve your clients payment experience with different innovative
          technology. Order your Bluetooth terminal or NFC sticker now! If you
          already use a TPA/POS system, we can integrate it!
        </p>
      </>
    ),
  },
  section2: {
    subtitle: "MARKETING",
    subtitleAlign: "left",
    title: "Visibility for your campaigns",
    titleAlign: "left",
    containerAlign: "left",
    image: digitalImg,
    imagePosition: "left",
    description: (
      <>
        <p>
          Beam offers a pratical and effective customer loyalty solution that
          allows Merchants and Brands to atract and retain diferent costumer
          profiles trought personalized rewards campaigns easy to monitor. With
          Beam you will only spend after you see your results!
        </p>
        <ol>
          <li>
            Create costum cashback campaigns with flexible percentage on
            specific times and days
          </li>
          <li>
            Create campaigns for diferent types of costumers like VIP costumers,
            Lost costumers or even New costumers;
          </li>
          <li>Create vouchers and Promocodes</li>
        </ol>
      </>
    ),
  },
  section3: {
    subtitle: "BUSINESS AND MARKETING ANALYTICS",
    title: "Know more about your business",
    image: businessImg,
    imagePosition: "right",
    containerAlign: "left",
    description: (
      <>
        <p>
          With Beam, brands and companies can monitor their customers' level of
          satisfaction through NPS indicators and in-store Feedback! Easily
          control the volume of in-store transactions, customer visits to your
          store and the performance of all your campaigns in one place. Analyze
          your business performance, receive tips on areas to improve and
          optimize your sales.
        </p>
      </>
    ),
  },
  section4: {
    subtitle: "AND ALL THIS FOR A",
    title: "one-time payment of just €55",
    description: (
      <>
        <p>
          When a merchant decides to install Beam Wallet in their store, they
          are not just acquiring a tool; they are unlocking access to a complete
          system for sales, management, and customer relationship that will
          transform their business definitively. And all this for a one-time
          payment of just €55 (or equivalent in your local currency). No monthly
          fees, no hidden charges, no surprises – just a powerful and accessible
          solution.
        </p>
        <p>
          With Beam Wallet, the merchant gains much more than a payment system.
          They install an AI that works 24 hours a day, tirelessly selling and
          maximizing every business opportunity. This artificial intelligence
          can recommend products, create automated promotions, and interact with
          consumers in real-time, ensuring that every customer finds exactly
          what they need – whether in-store or online. And the best part? It
          never takes a break, guaranteeing the store is "open" for sales even
          when the merchant is resting.
        </p>
        <p>
          Additionally, Beam Wallet offers a state-of-the-art CRM that brings
          customers back, fosters loyalty, and manages everything in real time.
          Imagine a system that analyzes your customers' buying behavior,
          creates personalized campaigns, sends direct notifications to their
          phones, and monitors your store's performance. All of this without the
          merchant having to worry about spreadsheets or complex systems. Beam
          Wallet organizes every interaction, manages inventory, and even
          provides detailed reports so you have full control of your business.
        </p>
        <p>
          And there's more. Beam Wallet also eliminates operational and
          financial barriers. With integrated real cashback, it turns every
          purchase into an incentive for customers to return. Its operation is
          fully digital, eliminating the need for physical cards, paper
          receipts, or any other unnecessary costs. It's sustainable, modern
          technology that not only benefits the merchant but also the planet.
        </p>
        <p>
          Now, you might be thinking, "Such an advanced solution must be
          expensive." But this is where Beam Wallet stands out even more. For
          only €55, or the equivalent in dollars or another local currency, you
          get access to all of this. No monthly fees. No additional charges.
          It's a one-time payment that ensures a robust, efficient, and
          future-ready system. No matter the size of your store or service, Beam
          Wallet was designed to adapt perfectly to your needs.
        </p>
        <p>
          What does this mean for the merchant? It means eliminating concerns
          about recurring costs, automatically increasing sales, and fostering
          customer loyalty like never before. With Beam Wallet, the growth of
          your business is inevitable. And it all starts with a single
          investment – simple, affordable, and incredibly advantageous.
        </p>
        <p>
          Whether you run a small local business or a growing store, Beam Wallet
          is the tool you've been waiting for to transform your operations.
          While other platforms charge high monthly fees or require long,
          complicated contracts, Beam Wallet delivers everything you need for a
          price that fits your budget and a return that exceeds all
          expectations. After all, when it comes to sales, management, and
          innovation,{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>
            Beam Wallet doesn't just promise, it delivers.
          </span>
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          So, why wait? Install Beam Wallet today and discover how a one-time
          investment of just €55 can completely change the future of your
          business.
        </p>
      </>
    ),
  },
};

// Button component using CSS module instead of inline styles
const JoinNowButton = () => (
  <a href="#installation-packs" className={styles.joinButton}>
    Join now
  </a>
);

// Features component with three feature boxes
const Features = () => {
  return (
    <div className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featureBox}>
          <i className={`fa-solid fa-wallet ${styles.featureIcon}`}></i>
          <h3 className={styles.featureTitle}>No Monthly Costs</h3>
        </div>

        <div className={styles.featureBox}>
          <i className={`fa-solid fa-user-clock ${styles.featureIcon}`}></i>
          <h3 className={styles.featureTitle}>Customer Loyalty</h3>
          <div className={styles.featureSubtitle}>(automatic cashback)</div>
        </div>

        <div className={styles.featureBox}>
          <i className={`fa-solid fa-bullhorn ${styles.featureIcon}`}></i>
          <h3 className={styles.featureTitle}>
            Creation of Customized Campaigns
          </h3>
        </div>
      </div>
    </div>
  );
};

// Partners component to show company logos
const Partners = () => {
  return (
    <div className={styles.partnersSection}>
      <div className={styles.partnersHeadingContainer}>
        <h2 className={styles.partnersHeading}>You will be in good company</h2>
      </div>
      <div className={styles.logosSection}>
        <div className={styles.logosContainer}>
          <div className={styles.logoItem}>
            <img src={carrefourLogo} alt="Carrefour logo" />
          </div>
          <div className={styles.logoItem}>
            <img src={calvinLogo} alt="Calvin Klein logo" />
          </div>
          <div className={styles.logoItem}>
            <img src={starbucksLogo} alt="Starbucks logo" />
          </div>
          <div className={styles.logoItem}>
            <img src={subwayLogo} alt="Subway logo" />
          </div>
          <div className={styles.logoItem}>
            <img src={aldoLogo} alt="Aldo logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Table component
const ServiceTable = () => {
  const serviceData = [
    {
      feature: "24/7 Sales AI",
      description:
        "Automates sales, interacts with customers, and promotes products around the clock, even outside business hours.",
      benefit: "Constant sales without additional human effort.",
    },
    {
      feature: "Integrated CRM",
      description:
        "Manages customer data, fosters loyalty, and organizes transactions in real-time.",
      benefit: "Customer retention and better control.",
    },
    {
      feature: "Real Cashback",
      description:
        "Offers cashback to customers after purchases, encouraging repeat visits.",
      benefit: "Attracts and retains customers with rewards.",
    },
    {
      feature: "Inventory Management",
      description:
        "Tracks sales and sends alerts for low inventory to prevent stockouts.",
      benefit: "More efficient operation with fewer losses.",
    },
    {
      feature: "Financial Reports",
      description:
        "Generates detailed reports on sales, profits, and cashback campaigns.",
      benefit: "Complete financial transparency.",
    },
    {
      feature: "Automated Promotions",
      description:
        "Creates marketing campaigns based on purchase data and customer preferences.",
      benefit: "Strategically increases sales.",
    },
    {
      feature: "Direct Notifications",
      description:
        "Sends personalized messages to customers about promotions and updates.",
      benefit: "Continuous engagement and direct communication.",
    },
    {
      feature: "Sustainable Operation",
      description:
        "Eliminates the need for physical cards, paper receipts, and other polluting materials.",
      benefit: "Contributes to environmental sustainability.",
    },
    {
      feature: "One-Time Payment",
      description:
        "Only €55 (or equivalent), with no monthly fees or additional costs.",
      benefit: "Affordable access and guaranteed returns.",
    },
  ];

  return (
    <div className={styles.serviceTableSection}>
      <h2 className={styles.tableTitle}>Beam Wallet Service Table</h2>
      <table className={styles.serviceTable}>
        <thead>
          <tr>
            <th>SERVICE/FEATURE</th>
            <th>DESCRIPTION</th>
            <th>MAIN BENEFIT</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((service, index) => (
            <tr key={index}>
              <td className={styles.serviceFeature}>{service.feature}</td>
              <td className={styles.serviceDescription}>
                {service.description}
              </td>
              <td className={styles.serviceBenefit}>{service.benefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Installation Pack component
const InstallationPacks = () => {
  return (
    <div id="installation-packs" className={styles.installationSection}>
      <span className={styles.joinNowTag}>JOIN NOW</span>
      <h2 className={styles.installationTitle}>
        Start by choosing your instalation Pack
      </h2>

      <div className={styles.packContainer}>
        {/* Physical Store Option */}
        <div className={styles.packCard}>
          <div
            className={`${styles.packImage} ${styles.packImagePhysical}`}
          ></div>
          <div className={styles.packType}>INSTALLATION PACK</div>
          <h3 className={styles.packTitle}>Physical Store</h3>
          <p className={styles.packRequirement}>
            <span className={styles.packHighlight}>Requirement:</span> To have
            internet access
          </p>
          <p className={styles.packPrice}>One Time Price:</p>
          <div className={styles.priceValue}>75€</div>
          <a
            href="https://shop.beamwallet.com/product/beam-wallet-nfc/"
            className={styles.joinButton}
          >
            Join
          </a>
        </div>

        {/* Online Store Option */}
        <div className={styles.packCard}>
          <div
            className={`${styles.packImage} ${styles.packImageOnline}`}
          ></div>
          <div className={styles.packType}>INSTALLATION PACK</div>
          <h3 className={styles.packTitle}>Online Store</h3>
          <p className={styles.packRequirement}>
            <span className={styles.packHighlight}>Requirement:</span> Have an
            Online Store build in Woocommerce
          </p>
          <p className={styles.packPrice}>One Time Price:</p>
          <div className={styles.priceValue}>65€</div>
          <a
            href="https://shop.beamwallet.com/product/beam-wallet-for-woocommerce/"
            className={styles.joinButton}
          >
            Join
          </a>
        </div>
      </div>
    </div>
  );
};

// HowItWorks component
const HowItWorks = () => {
  return (
    <div className={styles.howItWorksSection}>
      <h2 className={styles.howItWorksTitle}>How it works</h2>
      <div className={styles.howItWorksContainer}>
        <div className={styles.howItWorksBox}>
          <div className={styles.boxIcon}>
            <i className="fa-solid fa-dollar-sign"></i>
          </div>
          <h3 className={styles.boxTitle}>What is the amount to pay?</h3>
          <p className={styles.boxDescription}>
            Define the total amount of the bill to be paid in the Terminal. Our
            system is automatically prepared to read your customer's app and
            charge the amount.
          </p>
        </div>

        <div className={styles.howItWorksBox}>
          <div className={styles.boxIcon}>
            <i className="fa-solid fa-user"></i>
          </div>
          <h3 className={styles.boxTitle}>Choosing payment method</h3>
          <p className={styles.boxDescription}>
            Your customer will define whether they want to pay with NFC,
            Bluetooth (if available) or QR Code.
          </p>
        </div>

        <div className={styles.howItWorksBox}>
          <div className={styles.boxIcon}>
            <i className="fa-solid fa-credit-card"></i>
          </div>
          <h3 className={styles.boxTitle}>Payment</h3>
          <p className={styles.boxDescription}>
            Your customer will bring their smartphone close to the NFC device or
            read the QR Code available next to the payment box. At that moment,
            Beam will be processing all payments in an automated and secure way.
          </p>
        </div>

        <div className={styles.howItWorksBox}>
          <div className={styles.boxIcon}>
            <i className="fa-solid fa-check-circle"></i>
          </div>
          <h3 className={styles.boxTitle}>It's done!</h3>
          <p className={styles.boxDescription}>
            Payment is complete and cashback is automatically made available to
            your customer.
          </p>
        </div>
      </div>
    </div>
  );
};

// FAQ Component for BeamForBusiness page
const BusinessFAQ = () => {
  // Business-specific FAQ data
  const faqData = [
    {
      id: 1,
      question: "What is Beam?",
      answer:
        "Beam is a mobile application that processes online and offline payments. Users can associate different payment methods such as credit cards, debit and other digital wallets, paypal etc. On each beam purchase they earn cashback to use in future purchases. They can pay through their accumulated Beam balance or from another source of financing.",
    },
    {
      id: 2,
      question: "What is Cashback?",
      answer:
        "The merchant defines a cashback percentage that he wants to offer to his customers in each transaction, as an incentive to purchase, as well as to attract new customers. This cashback amount can be discounted by the customer on future purchases in the Beam network.",
    },
    {
      id: 3,
      question: "How can Beam benefit my business?",
      answer:
        "In addition to your store being recommended daily in the app to millions of Beamers arround the world, you can retain clientes through campaigns. Beam is also a global payment solution capable of converting different currencies intantiately, allowing your customers to pay anywhere in the world!",
    },
  ];

  // State to track which question is expanded
  const [activeQuestion, setActiveQuestion] = useState(1);

  // Toggle question expansion
  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <h3 className={styles.faqSubtitle}>BEAM WALLET</h3>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      </div>

      <div className={styles.faqQuestions}>
        {faqData.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <div
              className={`${styles.faqQuestion} ${
                activeQuestion === item.id ? styles.active : ""
              }`}
              onClick={() => toggleQuestion(item.id)}
            >
              <h4>{item.question}</h4>
              <span className={styles.faqArrow}>
                {activeQuestion === item.id ? "↑" : "↓"}
              </span>
            </div>
            {activeQuestion === item.id && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Bottom CTA component
const BottomCTA = () => {
  return (
    <div className={styles.bottomCtaSection}>
      <h3 className={styles.ctaSubtitle}>BEAM WALLET</h3>
      <h2 className={styles.ctaTitle}>
        Digital payments for your local store!
      </h2>
      <a href="#installation-packs" className={styles.ctaButton}>
        JOIN
      </a>
    </div>
  );
};

const BeamForBusiness = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Local Store - Beam Wallet";
  }, []);

  return (
    <>
      <PageHelmet title="Local Store - Beam Wallet" pageName="local-store" />

      <CTA theme="pink" />
      <Hero
        image={pageData.hero.image}
        backgroundColor={heroStyles.bgTeal}
        category={pageData.hero.category}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
      >
        <div className={styles.descriptionCTA}>
          <a href="/local-store#installation-packs" className={styles.contactButton}>
            {pageData.hero.buttonText}
          </a>
        </div>
      </Hero>

      <Section
        subtitle={pageData.section1.subtitle}
        title={pageData.section1.title}
        image={pageData.section1.image}
        imagePosition={pageData.section1.imagePosition}
        description={pageData.section1.description}
        actionElement={<JoinNowButton />}
      />

      <Section
        subtitle={pageData.section2.subtitle}
        subtitleAlign={pageData.section2.subtitleAlign}
        title={pageData.section2.title}
        titleAlign={pageData.section2.titleAlign}
        containerAlign={pageData.section2.containerAlign}
        image={pageData.section2.image}
        imagePosition={pageData.section2.imagePosition}
        description={pageData.section2.description}
        actionElement={<JoinNowButton />}
      />
      <Section
        subtitle={pageData.section3.subtitle}
        title={pageData.section3.title}
        image={pageData.section3.image}
        imagePosition={pageData.section3.imagePosition}
        description={pageData.section3.description}
        actionElement={<JoinNowButton />}
      />
      <Features />
      <Partners />
      <Section
        subtitle={pageData.section4.subtitle}
        title={pageData.section4.title}
        description={pageData.section4.description}
      />
      <ServiceTable />
      <InstallationPacks />
      <HowItWorks />
      <BusinessFAQ />
      <BottomCTA />
    </>
  );
};

export default BeamForBusiness;
