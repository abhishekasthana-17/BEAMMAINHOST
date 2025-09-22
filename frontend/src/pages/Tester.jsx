import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import styles from './MobileDeveloper.module.css';

const Tester = () => {
  useEffect(() => {
    document.title = 'Tester - Beam Wallet';
  }, []);

  return (
    <>
      <Hero category="Careers" title="Tester" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>About the Role</h2>
            <p>
              Join Beam Wallet as a Tester and help ensure the quality and reliability of our cutting-edge 
              digital payment platform. We're looking for a detail-oriented professional who is passionate 
              about quality assurance and testing in fintech environments.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Key Responsibilities</h2>
          <p className={styles.skillList}>
            Design and execute comprehensive test plans for web and mobile applications
            <br />
            Perform functional, regression, integration, and user acceptance testing
            <br />
            Identify, document, and track software defects and inconsistencies
            <br />
            Collaborate with development teams to ensure quality standards are met
            <br />
            Test payment processing systems and financial transactions
            <br />
            Validate security features and compliance requirements
            <br />
            Conduct performance and load testing on critical systems
            <br />
            Maintain test documentation and reporting
            <br />
            Participate in agile development processes and sprint planning
          </p>
        </div>

        <div className={styles.section}>
          <h2>Required Qualifications</h2>
          <p className={styles.skillList}>
            Bachelor's degree in Computer Science, Engineering, or related field
            <br />
            Minimum 3 years of experience in software testing and quality assurance
            <br />
            Experience with manual and automated testing methodologies
            <br />
            Knowledge of testing tools and frameworks (Selenium, Jest, Cypress, etc.)
            <br />
            Understanding of web technologies (HTML, CSS, JavaScript)
            <br />
            Experience testing mobile applications (iOS and Android)
            <br />
            Strong analytical and problem-solving skills
            <br />
            Excellent attention to detail and documentation skills
            <br />
            Experience with bug tracking tools (Jira, Bugzilla, etc.)
          </p>
        </div>

        <div className={styles.section}>
          <h2>Preferred Skills</h2>
          <p className={styles.skillList}>
            Experience in fintech or payment processing systems
            <br />
            Knowledge of API testing and tools (Postman, REST Assured)
            <br />
            Understanding of blockchain and cryptocurrency testing
            <br />
            Experience with CI/CD pipelines and DevOps practices
            <br />
            Security testing experience and knowledge of OWASP
            <br />
            Performance testing tools experience (JMeter, LoadRunner)
            <br />
            ISTQB or other testing certifications
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p className={styles.skillList}>
            Competitive salary and benefits package
            <br />
            Opportunity to work on innovative fintech solutions
            <br />
            Professional development and training opportunities
            <br />
            Collaborative and dynamic work environment
            <br />
            Remote work flexibility
            <br />
            Career growth opportunities in a rapidly expanding company
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Tester')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Remote
            <br />
            <strong>Department:</strong> Quality Assurance
          </p>
        </div>
      </div>
    </>
  );
};

export default Tester;