import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import styles from './MobileDeveloper.module.css';

const SecurityDeveloper = () => {
  useEffect(() => {
    document.title = 'Security Developer - Beam Wallet';
  }, []);

  return (
    <div>
      <Hero
        title="Security Developer"
        subtitle="International Position - Remote | Availability for international travel"
        showButton={false}
      />
      
      <Section>
        <div className={styles.jobContainer}>
          <div className={styles.jobHeader}>
            <h2>About the Role</h2>
            <p>
              Join Beam Wallet as a Security Developer in this international position with remote work flexibility 
              and opportunities for international travel. We're looking for a cybersecurity expert to develop, 
              implement, and enhance security architectures across all levels of our global digital payment platform.
            </p>
          </div>

          <div className={styles.jobSection}>
            <h3>Responsibilities</h3>
            <ul>
              <li>Develop, implement, and continuously enhance security architectures across all levels (application, network, servers, blockchain)</li>
              <li>Analyze, design, and reinforce smart contracts and blockchain-based systems to ensure transaction integrity</li>
              <li>Monitor systems 24/7, detect advanced threats, and deploy mitigation measures in real time</li>
              <li>Conduct code audits, penetration testing, and red teaming across cloud, mobile, and blockchain environments</li>
              <li>Ensure compliance with PCI DSS, GDPR, ISO 27001, NIST, and other international standards</li>
              <li>Develop and maintain advanced encryption protocols, multifactor authentication, and quantum security mechanisms</li>
              <li>Implement identity and access management (IAM) policies and secure access controls</li>
              <li>Create and manage incident response, disaster recovery, and business continuity plans</li>
              <li>Train and guide internal teams on cybersecurity best practices</li>
              <li>Integrate security from the initial design phase by working closely with development teams</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>Requirements</h3>
            <ul>
              <li>Proven experience in cybersecurity applied to fintech, digital banking, or blockchain platforms</li>
              <li>Deep expertise in blockchain security, including defense against attacks on distributed networks, smart contracts, and decentralized protocols</li>
              <li>Strong background in cloud security (AWS, Google Cloud, Azure)</li>
              <li>Solid knowledge of modern cryptography and quantum encryption algorithms</li>
              <li>Experience with security frameworks (OWASP, NIST, CIS Controls, ISO 27001)</li>
              <li>Ability to perform forensic analysis on compromised systems</li>
              <li>Hands-on experience with DevSecOps, secure CI/CD pipelines, and monitoring</li>
              <li>Strategic mindset: ability to identify risks before they escalate into incidents</li>
              <li>Strong communication and teamwork skills</li>
            </ul>
          </div>

          <div className={styles.jobSection}>
            <h3>What We Offer</h3>
            <ul>
              <li>Integration into a high-impact global project</li>
              <li>A dynamic, multicultural, and technology-driven environment</li>
              <li>Career growth with international strategic projects</li>
              <li>Competitive salary + benefits + potential involvement in exclusive initiatives</li>
            </ul>
          </div>

          <div className={styles.importantNote}>
            <h3>⚠️ Important Note</h3>
            <p>
              ⏳ <strong>Time is money.</strong> Before applying, we strongly advise you to visit the official website 
              <a href="https://www.beamwallet.com" target="_blank" rel="noopener noreferrer"> www.beamwallet.com </a>
              and our social media channels to better understand our standards and expectations.
            </p>
          </div>

          <div className={styles.applicationSection}>
            <h3>How to Apply</h3>
            <p>
              Ready to secure the future of digital payments? Apply now and become part of our international team 
              working on cutting-edge blockchain security solutions.
            </p>
            <button className={styles.applyButton}>
              Apply Now
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SecurityDeveloper;