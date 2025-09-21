import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import styles from './MobileDeveloper.module.css';

const Tester = () => {
  useEffect(() => {
    document.title = 'Tester (QA - Quality Assurance) - Beam Wallet';
  }, []);

  return (
    <div>
      <Hero
        title="Tester (QA – Quality Assurance)"
        subtitle="Global (remote work with possible travel for team integration) | Full-time | Technology / Quality Assurance"
        showButton={false}
      />
      
      <Section>
        <div className={styles.jobContainer}>
          <div className={styles.jobHeader}>
            <h2>About the Role</h2>
            <p>
              Join Beam Wallet as a Tester (QA – Quality Assurance) in this global position with remote work 
              flexibility and possible travel for team integration. We're looking for a quality assurance expert 
              to test all company platforms and ensure the highest standards of quality, security, and scalability.
            </p>
          </div>

          <div className={styles.jobSection}>
            <h3>Responsibilities</h3>
            <ul>
              <li>Test all company platforms: websites, partner portals, mobile apps, payment systems, external integrations, and new features</li>
              <li>Design and execute manual and automated test plans, covering multiple usage scenarios</li>
              <li>Identify, document, and track bugs, errors, and inconsistencies</li>
              <li>Work closely with developers, designers, and product managers to validate deliverables</li>
              <li>Conduct performance, compatibility, security, and usability tests</li>
              <li>Ensure all applications meet international standards of quality, security (PCI DSS), and scalability</li>
              <li>Automate QA processes whenever possible (Selenium, Cypress, or equivalent)</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Requirements</h3>
            <ul>
              <li>Proven experience as a Tester / QA Engineer for software, mobile apps, and web platforms</li>
              <li>Strong knowledge of functional, regression, performance, API testing, and test automation</li>
              <li>Hands-on experience testing mobile apps (Android/iOS)</li>
              <li>Familiarity with tools such as Jira, Trello, TestRail, Postman, Selenium, Cypress, or similar</li>
              <li>High attention to detail and strong critical thinking</li>
              <li>Excellent documentation and organizational skills</li>
              <li>Professional level of English (written and spoken)</li>
              <li>Ability to work remotely and collaboratively with an international team</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Nice to Have</h3>
            <ul>
              <li>Experience with payment platforms or fintech companies</li>
              <li>Knowledge of digital security (encryption, vulnerability testing)</li>
              <li>Understanding of UX/UI to evaluate usability</li>
              <li>Experience with blockchain or digital assets</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>What We Offer</h3>
            <ul>
              <li>Competitive salary (based on experience)</li>
              <li>Remote work with flexible hours</li>
              <li>Career growth opportunities within the company</li>
              <li>Direct collaboration with a highly qualified international team</li>
              <li>Involvement in global projects with significant impact</li>
              <li>The opportunity to work with cutting-edge technologies in digital payments, AI, and blockchain</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Important Advice for Candidates</h3>
            <p>
              Before applying, please take time to explore <strong>beamwallet.com</strong> and all our social media channels.
            </p>
            <p>
              We believe that time is money, and we only move forward with candidates who demonstrate 
              genuine interest and a minimum understanding of our platform.
            </p>
          </div>

          <div className={styles.jobSection}>
            <h3>How to Apply</h3>
            <p>
              Send your updated CV to: <strong>hr@beamwallet.com</strong>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Tester;