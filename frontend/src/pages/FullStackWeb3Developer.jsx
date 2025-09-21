import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./MobileDeveloper.module.css";

const FullStackWeb3Developer = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Full Stack/Web3 Developer - Beam Wallet";
  }, []);

  return (
    <>
      <Hero category="Careers" title="Full Stack/Web3 Developer" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>PURPOSE</h2>
            <p>
              We are looking for an experienced full stack developer to lead the integration between a token sales portal and an Ethereum smart contract. Join the platform that is transforming the global digital economy. At Beam Wallet, we build what no one else in the world can.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Responsibilities:</h2>
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
          </p>
        </div>

        <div className={styles.section}>
          <h2>Requirements:</h2>
          <h3>Essential:</h3>
          <p className={styles.skillList}>
            Strong experience in Firebase backend development
            <br />
            Solid understanding of Ethereum blockchain fundamentals
            <br />
            Familiarity with Web3 libraries, especially Web3j
            <br />
            Experience working with Ethereum testnets (Sepolia) and tools like Remix, MetaMask, and Etherscan
            <br />
            Good understanding of Solidity
            <br />
            Proven projects with smart contract development or similar integrations
            <br />
            Ability to handle transaction gas estimation, error handling, and contract method encoding
          </p>

          <h3>Nice to Have:</h3>
          <p className={styles.skillList}>
            Experience writing or working with Solidity smart contracts
            <br />
            Knowledge of token sale mechanisms (private/pre/public sales)
            <br />
            Previous experience integrating token sales into real-world portals
            <br />
            Experience with blockchain development environments (e.g., Ganache, Hardhat)
          </p>
        </div>

        <div className={styles.section}>
          <h2>Work Setup:</h2>
          <p className={styles.skillList}>
            Remote
            <br />
            Freelance or milestone-based project
            <br />
            Start: ASAP
          </p>
        </div>

        <div className={styles.section}>
          <h2>How to Apply:</h2>
          <p>
            <strong>Important tip for applicants:</strong> Before applying, visit <a href="https://beamwallet.com" target="_blank" rel="noopener noreferrer">Beam Wallet | Pay Faster and Earn More</a>, explore our mission, and understand where you're sending your talent. Time is money – yours and ours.
          </p>
          <p>
            💡 Join the platform that is transforming the global digital economy. At Beam Wallet, we build what no one else in the world can.
          </p>
        </div>

        <div className={styles.applySection}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Full Stack/Web3 Developer')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
    </>
  );
};

export default FullStackWeb3Developer;