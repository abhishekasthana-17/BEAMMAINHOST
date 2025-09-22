import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import styles from './MobileDeveloper.module.css';

const SocialMediaSpecialist = () => {
  useEffect(() => {
    document.title = 'Social Media Specialist - Beam Wallet';
  }, []);

  return (
    <div>
      <Hero
        title="Social Media Specialist"
        subtitle="Remote / International - GBC S.A."
        showButton={false}
      />
      
      <Section>
        <div className={styles.jobContainer}>
          <div className={styles.jobHeader}>
            <h2>About the Role</h2>
            <p>
              👉 <strong>Important Note:</strong> This position is open to candidates worldwide, with the opportunity 
              to work with different countries and cultures, in a truly global and dynamic environment.
            </p>
            <p>
              Beam Wallet is a global digital payments platform, present in multiple countries and continuously 
              expanding. We are looking for a Social Media Specialist who is creative, strategic, and innovative — 
              someone capable of turning content into engaging digital experiences for our users and partners.
            </p>
            <p>
              The chosen professional will be responsible for managing, developing, and expanding the presence of 
              Beam Wallet across different platforms, ensuring consistency, proximity, and growth on a global scale.
            </p>
          </div>

          <div className={styles.jobSection}>
            <h3>🎯 Responsibilities</h3>
            <ul>
              <li>Create, plan, and manage content for social media platforms (Instagram, Facebook, LinkedIn, TikTok, X/Twitter, YouTube, etc.)</li>
              <li>Define strategies for organic and paid growth, focused on reach, engagement, and conversion</li>
              <li>Monitor performance metrics, prepare reports, and continuously optimize results</li>
              <li>Develop creative campaigns that reflect Beam Wallet's vision and values</li>
              <li>Interact daily with our global community of users and partners</li>
              <li>Work closely with the marketing, design, and communication teams to ensure brand consistency across all regions</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>✅ Requirements</h3>
            <ul>
              <li>Proven experience in social media management (min. 2 years)</li>
              <li>Knowledge of management and analytics tools (Meta Business Suite, Publer, Hootsuite, Buffer, etc.)</li>
              <li>Strong writing skills to craft engaging content tailored to different audiences</li>
              <li>Basic knowledge of graphic design and video editing (Canva, Photoshop, Premiere, or similar)</li>
              <li>Excellent written and verbal communication skills</li>
              <li>Intermediate or advanced English (other languages are a plus)</li>
              <li>Creative, organized, dynamic, and results-driven profile</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>🌟 Nice-to-Haves</h3>
            <ul>
              <li>Experience with paid campaigns (Meta Ads, TikTok Ads, Google Ads)</li>
              <li>Experience with influencer marketing and collaborative campaigns</li>
              <li>Knowledge of SEO and content marketing</li>
              <li>Experience in fintech, blockchain, or payment technologies</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>💼 What We Offer</h3>
            <ul>
              <li>Opportunity to work with one of the most innovative digital payment platforms worldwide</li>
              <li>Multicultural, dynamic, and fast-growing environment</li>
              <li>Flexible working hours and remote work opportunities</li>
              <li>Career growth and involvement in global projects</li>
              <li>Competitive compensation based on experience</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Social Media Specialist')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>

          <div className={styles.jobSection}>
            <p className={styles.jobDetails}>
              <strong>Job Type:</strong> Full Time
              <br />
              <strong>Job Location:</strong> Remote
              <br />
              <strong>Department:</strong> Marketing
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SocialMediaSpecialist;