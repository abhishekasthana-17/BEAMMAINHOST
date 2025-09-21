import React, { useEffect } from "react";
import styles from "./MobileDeveloper.module.css";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";

const SalesAgent = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Sales Agent - Beam Wallet Careers";
  }, []);

  return (
    <div>
      <Hero title="Sales Agent" backgroundColor={styles.pinkBackground} />
      
      <Section
        subtitle="JOIN OUR GLOBAL TEAM"
        title="Sales Agent - Beam Wallet"
        description="Are you ready to represent one of the smartest and most complete payment platforms in the world?"
        className={styles.jobDetailsSection}
        backgroundColor="white"
      />

      <div className={styles.jobContent}>
        <div className={styles.jobDescription}>
          <p className={styles.introText}>
            Beam Wallet is hiring high-level sales professionals in any country, with the goal of expanding its 
            global presence and offering real opportunities for those who want to grow with results.
          </p>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>About Beam Wallet</h3>
            <p>
              Beam Wallet is not just an app — it's a technological platform that transforms the way businesses 
              interact with their customers. Through digital payments with real cashback, intelligent loyalty, 
              integrated marketing, complete CRM, and cutting-edge security, we help businesses of all sizes sell 
              more, every single day.
            </p>
            <p>
              Beam is already present in dozens of countries, with thousands of active users and merchants. And 
              now we're opening new positions for commercial agents around the world.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>What You'll Do</h3>
            <ul className={styles.bulletList}>
              <li>Present Beam Wallet to local businesses, physical or online</li>
              <li>Close new contracts and support commercial activations</li>
              <li>Work independently, with full support from our team</li>
              <li>Build and manage your own portfolio of clients and partners</li>
              <li>Participate in local and international Beam Wallet campaigns</li>
              <li>Represent the platform with excellence and a results-driven mindset</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>What We're Looking For</h3>
            <ul className={styles.bulletList}>
              <li>Motivated, organized individuals who are eager to grow</li>
              <li>Experience in sales or commercial representation (preferred but not required)</li>
              <li>Entrepreneurial spirit and ability to work autonomously</li>
              <li>Excellent communication skills in any language</li>
              <li>Availability to work remotely or on-site, depending on your local market</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>What We Offer</h3>
            <ul className={styles.bulletList}>
              <li>A real earning model: with work, dedication, and strategy, our agents can earn €15,000 or more per month</li>
              <li>Complete and ongoing training</li>
              <li>International support and access to our infrastructure</li>
              <li>Regional CRM to manage your operations and clients</li>
              <li>Commissions per installation and recurring monthly revenue</li>
              <li>Opportunities to lead growing teams</li>
              <li>Training trips and exchanges with other countries (fully paid by Beam)</li>
              <li>Long-term professional growth within the company</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>How to Apply</h3>
            <p>
              Go to <strong>agents.beamwallet.com</strong> and fill out the application form with your details. Once you complete 
              this step and advance with the commercial plan, you become a lifetime member of Beam Wallet — 
              with full access to our infrastructure, ongoing training, exclusive technology, and international 
              expansion opportunities.
            </p>
            <p>
              This step is very important, because at Beam Wallet we pay well to those who work well. So whoever 
              joins must commit, with the right mindset and confidence — and without fear, because we are here 
              to support you in everything.
            </p>
            <p>
              This is the right moment to change your professional life. If you're looking for independence, 
              above-average income, and a global support network, Beam Wallet is ready to welcome you. Join us 
              with enthusiasm — because here, those who take the first step never walk alone.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Important Note for Candidates</h3>
            <p>
              Before applying, take a few minutes to understand what Beam Wallet is all about. All information is 
              available on <strong>beamwallet.com</strong> and on our social media channels. Knowing what you're joining is 
              essential — because time is money, and both you and Beam Wallet deserve a productive and 
              transparent process.
            </p>
          </div>

          <div className={styles.applySection}>
            <a 
              href="https://agents.beamwallet.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.applyButton}
            >
              Apply Now at agents.beamwallet.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAgent;