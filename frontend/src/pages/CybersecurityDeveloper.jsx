import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import styles from './MobileDeveloper.module.css';

const CybersecurityDeveloper = () => {
  useEffect(() => {
    document.title = 'Cybersecurity Developer with Expertise in AWS and Google Cloud - Beam Wallet';
  }, []);

  return (
    <div>
      <Hero
        title="Cybersecurity Developer with Expertise in AWS and Google Cloud"
        subtitle="Remote or International Offices | Full-Time / Project-Based | Immediate Availability"
        showButton={false}
      />
      
      <Section>
        <div className={styles.jobContainer}>
          <div className={styles.jobHeader}>
            <h2>About the Role</h2>
            <p>
              We are looking for a Cybersecurity Developer with strong expertise in AWS and Google Cloud 
              environments, capable of auditing, programming, and implementing secure and efficient solutions. 
              This role requires strategic thinking, a proactive approach to threat prevention, and the ability to 
              ensure the integrity, availability, and security of our infrastructure and data.
            </p>
            <p>
              The ideal candidate will be a cross-functional expert, working closely with DevOps, backend, and 
              infrastructure teams, and will serve as a key security and cloud architecture leader.
            </p>
          </div>

          <div className={styles.jobSection}>
            <h3>Responsibilities</h3>
            <ul>
              <li>Audit and secure AWS and Google Cloud environments against internal and external threats</li>
              <li>Implement security policies, firewalls, access controls, encryption, and backups</li>
              <li>Automate security tasks using Python, Bash, or PowerShell scripting</li>
              <li>Build and maintain secure and reliable CI/CD pipelines</li>
              <li>Collaborate with technical teams to review code and enforce security best practices</li>
              <li>Monitor logs, alerts, and detection systems (SIEM, IDS/IPS)</li>
              <li>Support incident response, penetration testing, and mitigation plans</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Requirements</h3>
            <ul>
              <li>Minimum 3 years of hands-on experience with AWS and Google Cloud server environments</li>
              <li>Strong understanding of cybersecurity principles and secure cloud architecture</li>
              <li>Experience with IAM, VPC, Cloud Firewalls, KMS, SSL, TLS, SSH, SFTP, etc.</li>
              <li>Proficiency in scripting languages such as Python, Bash, or PowerShell</li>
              <li>Familiarity with security and monitoring tools, such as Wireshark, Nmap, Snort, Suricata, CloudWatch, Stackdriver, etc.</li>
              <li>Ability to configure scalable, secure, and resilient cloud environments</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Ideal Profile</h3>
            <ul>
              <li>Highly autonomous, disciplined, and detail-oriented</li>
              <li>Proactive, capable of identifying and implementing technical improvements</li>
              <li>Strong communication skills to clearly articulate risks and solutions</li>
              <li>Well-versed in current cybersecurity trends and cloud security innovations</li>
              <li>Responsible and results-driven mindset</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Nice to Have (Not Mandatory)</h3>
            <ul>
              <li>Certifications such as: AWS Certified Security, Google Professional Cloud Security Engineer, CEH, OSCP</li>
              <li>Experience with blockchain, smart contract security, or Web3 environments</li>
              <li>Fluency in technical English and/or Spanish</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Compensation</h3>
            <p>
              <strong>Competitive + Performance Bonus</strong>
            </p>
          </div>

          <div className={styles.jobSection}>
            <h3>How to Apply</h3>
            <p>
              Please send your updated CV, along with a brief description of your most relevant security and 
              cloud projects (or GitHub/portfolio links), to: <strong>hr@beamwallet.com</strong>
            </p>
            <p>
              <strong>Subject:</strong> Cybersecurity Developer – AWS/Google Cloud
            </p>
          </div>

          <div className={styles.jobSection}>
            <h3>Important</h3>
            <p>
              Only complete applications will be considered. To save time — because time is 
              money — we recommend getting to know Beam Wallet in advance by visiting <strong>beamwallet.com</strong> and 
              our social media channels. Knowing where you're applying makes all the difference.
            </p>
            <p>
              If you're looking for a high-impact team, real-world projects, and a security-first culture, Beam 
              Wallet is ready to grow with you.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CybersecurityDeveloper;