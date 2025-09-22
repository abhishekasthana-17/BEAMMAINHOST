import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import styles from './MobileDeveloper.module.css';

const SecurityDeveloper = () => {
  useEffect(() => {
    document.title = 'Security Developer - Beam Wallet';
  }, []);

  return (
    <>
      <Hero category="Careers" title="Security Developer" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>About the Role</h2>
            <p>
              Join Beam Wallet as a Security Developer in this international position with remote work flexibility 
              and opportunities for international travel. We're looking for a cybersecurity expert to develop, 
              implement, and enhance security architectures across all levels of our global digital payment platform.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Responsibilities</h2>
          <p className={styles.skillList}>
            Develop, implement, and continuously enhance security architectures across all levels (application, network, servers, blockchain)
            <br />
            Analyze, design, and reinforce smart contracts and blockchain-based systems to ensure transaction integrity
            <br />
            Monitor systems 24/7, detect advanced threats, and deploy mitigation measures in real time
            <br />
            Conduct code audits, penetration testing, and red teaming across cloud, mobile, and blockchain environments
            <br />
            Ensure compliance with PCI DSS, GDPR, ISO 27001, NIST, and other international standards
            <br />
            Develop and maintain advanced encryption protocols, multifactor authentication, and quantum security mechanisms
            <br />
            Implement identity and access management (IAM) policies and secure access controls
            <br />
            Create and manage incident response, disaster recovery, and business continuity plans
            <br />
            Train and guide internal teams on cybersecurity best practices
            <br />
            Integrate security from the initial design phase by working closely with development teams
          </p>
        </div>

        <div className={styles.section}>
          <h2>Requirements</h2>
          <p className={styles.skillList}>
            Proven experience in cybersecurity applied to fintech, digital banking, or blockchain platforms
            <br />
            Deep expertise in blockchain security, including defense against attacks on distributed networks, smart contracts, and decentralized protocols
            <br />
            Strong background in cloud security (AWS, Google Cloud, Azure)
            <br />
            Solid knowledge of modern cryptography and quantum encryption algorithms
            <br />
            Experience with security frameworks (OWASP, NIST, CIS Controls, ISO 27001)
            <br />
            Ability to perform forensic analysis on compromised systems
            <br />
            Hands-on experience with DevSecOps, secure CI/CD pipelines, and monitoring
            <br />
            Strategic mindset: ability to identify risks before they escalate into incidents
            <br />
            Strong communication and teamwork skills
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p className={styles.skillList}>
            Integration into a high-impact global project
            <br />
            A dynamic, multicultural, and technology-driven environment
            <br />
            Career growth with international strategic projects
            <br />
            Competitive salary + benefits + potential involvement in exclusive initiatives
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Security Developer')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Remote / International Travel
            <br />
            <strong>Department:</strong> Engineering
          </p>
        </div>
      </div>
    </>
  );
};

export default SecurityDeveloper;