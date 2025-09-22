import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./MobileDeveloper.module.css";

const FullStackWeb3Developer = () => {
  useEffect(() => {
    document.title = "Full Stack/Web3 Developer - Beam Wallet";
  }, []);

  return (
    <>
      <Hero category="Careers" title="Full Stack/Web3 Developer" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>About the Role</h2>
            <p>
              We are looking for an experienced full stack developer to lead the integration between a token sales portal and an Ethereum smart contract. Join the platform that is transforming the global digital economy. At Beam Wallet, we build what no one else in the world can.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Key Responsibilities</h2>
          <p className={styles.skillList}>
            Implement Web3 integration to interact with the Ethereum smart contract (testnet & mainnet)
            <br />
            Call and manage functions like buy, sell, distributeSalesphases, advanceSalePhase, etc.
            <br />
            Fetch real-time on-chain data such as token balances, sale phase status, Chainlink price feeds, etc.
            <br />
            Handle wallet connections and transaction signing (e.g., MetaMask, WalletConnect)
            <br />
            Ensure secure, reliable, and efficient interaction with the blockchain
            <br />
            Collaborate with the smart contract and frontend teams to complete the full integration flow
            <br />
            Develop and maintain backend services using Firebase
            <br />
            Build responsive frontend interfaces for token sale portal
          </p>
        </div>

        <div className={styles.section}>
          <h2>Required Qualifications</h2>
          <p className={styles.skillList}>
            Strong experience in Firebase backend development
            <br />
            Solid understanding of Ethereum blockchain fundamentals
            <br />
            Familiarity with Web3 libraries, especially Web3j
            <br />
            Experience with smart contract interaction and ABI handling
            <br />
            Knowledge of Solidity and smart contract development
            <br />
            Proficiency in JavaScript/TypeScript and modern frameworks
            <br />
            Experience with wallet integration (MetaMask, WalletConnect)
            <br />
            Understanding of DeFi protocols and token economics
            <br />
            Strong problem-solving and debugging skills
          </p>
        </div>

        <div className={styles.section}>
          <h2>Preferred Skills</h2>
          <p className={styles.skillList}>
            Experience with React.js and modern frontend frameworks
            <br />
            Knowledge of Chainlink oracles and price feeds
            <br />
            Familiarity with testing frameworks for smart contracts
            <br />
            Experience with cloud platforms (AWS, Google Cloud)
            <br />
            Understanding of security best practices in Web3
            <br />
            Experience with CI/CD pipelines and DevOps practices
            <br />
            Knowledge of Layer 2 solutions and scaling technologies
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p className={styles.skillList}>
            Competitive salary and token incentives
            <br />
            Opportunity to work on cutting-edge blockchain technology
            <br />
            Remote work flexibility with global team collaboration
            <br />
            Professional development in the rapidly growing Web3 space
            <br />
            Access to latest tools and technologies
            <br />
            Career growth opportunities in a innovative fintech company
            <br />
            Comprehensive benefits package
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Full Stack/Web3 Developer')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Remote
            <br />
            <strong>Department:</strong> Engineering
          </p>
        </div>
      </div>
    </>
  );
};

export default FullStackWeb3Developer;