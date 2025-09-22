import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import styles from './MobileDeveloper.module.css';

const CybersecurityDeveloper = () => {
  useEffect(() => {
    document.title = 'Cybersecurity Developer - Beam Wallet';
  }, []);

  return (
    <>
      <Hero category="Careers" title="Cybersecurity Developer" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>About the Role</h2>
            <p>
              We are looking for a Cybersecurity Developer with strong expertise in AWS and Google Cloud 
              environments, capable of auditing, programming, and implementing secure and efficient solutions. 
              This role requires strategic thinking, a proactive approach to threat prevention, and the ability to 
              ensure the integrity, availability, and security of our infrastructure and data.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Key Responsibilities</h2>
          <p className={styles.skillList}>
            Audit and secure AWS and Google Cloud environments against internal and external threats
            <br />
            Implement security policies, firewalls, access controls, encryption, and backups
            <br />
            Automate security tasks using Python, Bash, or PowerShell scripting
            <br />
            Build and maintain secure and reliable CI/CD pipelines
            <br />
            Collaborate with technical teams to review code and enforce security best practices
            <br />
            Monitor logs, alerts, and detection systems (SIEM, IDS/IPS)
            <br />
            Support incident response, penetration testing, and mitigation plans
            <br />
            Conduct vulnerability assessments and security audits
            <br />
            Develop and maintain security documentation and procedures
          </p>
        </div>

        <div className={styles.section}>
          <h2>Required Qualifications</h2>
          <p className={styles.skillList}>
            Bachelor's degree in Computer Science, Cybersecurity, or related field
            <br />
            Minimum 5 years of experience in cybersecurity and cloud security
            <br />
            Strong expertise in AWS and Google Cloud Platform security services
            <br />
            Experience with security frameworks and compliance standards (ISO 27001, SOC 2, PCI DSS)
            <br />
            Proficiency in scripting languages (Python, Bash, PowerShell)
            <br />
            Knowledge of network security, encryption, and identity management
            <br />
            Experience with security tools (SIEM, vulnerability scanners, penetration testing tools)
            <br />
            Strong understanding of DevSecOps practices and secure coding principles
            <br />
            Excellent analytical and problem-solving skills
          </p>
        </div>

        <div className={styles.section}>
          <h2>Preferred Skills</h2>
          <p className={styles.skillList}>
            Professional certifications (CISSP, CISM, AWS Security, Google Cloud Security)
            <br />
            Experience in fintech or financial services security
            <br />
            Knowledge of blockchain and cryptocurrency security
            <br />
            Experience with container security (Docker, Kubernetes)
            <br />
            Familiarity with threat intelligence and security research
            <br />
            Experience with security automation and orchestration tools
            <br />
            Knowledge of regulatory compliance in financial services
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p className={styles.skillList}>
            Competitive salary and comprehensive benefits package
            <br />
            Opportunity to work on cutting-edge fintech security challenges
            <br />
            Professional development and certification support
            <br />
            Remote work flexibility with global team collaboration
            <br />
            Access to latest security tools and technologies
            <br />
            Career growth opportunities in cybersecurity leadership
            <br />
            Collaborative and innovative work environment
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Cybersecurity Developer')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Remote
            <br />
            <strong>Department:</strong> Security
          </p>
        </div>
      </div>
    </>
  );
};

export default CybersecurityDeveloper;