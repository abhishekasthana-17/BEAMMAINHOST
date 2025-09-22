import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import styles from './MobileDeveloper.module.css';

const SalesAgent = () => {
  useEffect(() => {
    document.title = 'Sales Agent - Beam Wallet';
  }, []);

  return (
    <>
      <Hero category="Careers" title="Sales Agent" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>About the Role</h2>
            <p>
              Join Beam Wallet as a Sales Agent and be part of our dynamic sales team driving growth 
              in the digital payment industry. We're looking for motivated individuals who are passionate 
              about fintech solutions and have a proven track record in sales.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Key Responsibilities</h2>
          <p className={styles.skillList}>
            Generate new business opportunities through prospecting and lead qualification
            <br />
            Build and maintain relationships with potential and existing clients
            <br />
            Present Beam Wallet's products and services to prospective customers
            <br />
            Negotiate contracts and close deals to meet sales targets
            <br />
            Collaborate with marketing team to develop sales strategies
            <br />
            Maintain accurate records of sales activities in CRM system
            <br />
            Provide excellent customer service and support throughout the sales process
            <br />
            Stay updated on industry trends and competitive landscape
            <br />
            Participate in trade shows, conferences, and networking events
          </p>
        </div>

        <div className={styles.section}>
          <h2>Required Qualifications</h2>
          <p className={styles.skillList}>
            Bachelor's degree in Business, Marketing, or related field
            <br />
            Minimum 2 years of experience in B2B sales or business development
            <br />
            Proven track record of meeting or exceeding sales targets
            <br />
            Excellent communication and presentation skills
            <br />
            Strong negotiation and closing abilities
            <br />
            Experience with CRM software and sales tools
            <br />
            Self-motivated with strong organizational skills
            <br />
            Ability to work independently and as part of a team
            <br />
            Professional appearance and demeanor
          </p>
        </div>

        <div className={styles.section}>
          <h2>Preferred Skills</h2>
          <p className={styles.skillList}>
            Experience in fintech, payments, or financial services industry
            <br />
            Knowledge of digital payment solutions and blockchain technology
            <br />
            Experience with enterprise sales and complex sales cycles
            <br />
            Multilingual capabilities for international markets
            <br />
            Experience with Salesforce or similar CRM platforms
            <br />
            Network of contacts in the financial services industry
            <br />
            Previous experience in startup or high-growth environments
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p className={styles.skillList}>
            Competitive base salary plus commission structure
            <br />
            Comprehensive benefits package including health insurance
            <br />
            Professional development and training opportunities
            <br />
            Opportunity to work with cutting-edge fintech solutions
            <br />
            Flexible work arrangements and remote work options
            <br />
            Career advancement opportunities in a growing company
            <br />
            Performance bonuses and incentive programs
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Sales Agent')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Remote/Hybrid
            <br />
            <strong>Department:</strong> Sales
          </p>
        </div>
      </div>
    </>
  );
};

export default SalesAgent;