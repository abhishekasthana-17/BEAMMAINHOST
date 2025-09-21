import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./MobileDeveloper.module.css";

const MobileDeveloper = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Mobile Developer - Beam Wallet";
  }, []);

  return (
    <>
      <Hero category="Careers" title="Mobile Developer" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>PURPOSE</h2>
            <p>
              Join the platform that is transforming the global digital economy.Beam Wallet, a leader in smart payments and mobile-first business solutions, is hiring a versatile and experienced Mobile Developer to help build and maintain powerful Android and iOS applications.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>What we’re looking for:</h2>
          <h3>Essential:</h3>
          <p className={styles.skillList}>
            Experience working with Swift/RxSwift
            <br />
            Experience with VIPER architecture
            <br />
            Understanding and knowledge of SnapKit
            <br />
            An excellent understanding of the iOS application lifecycle
            <br />
            Knowledge of material design themes and components
            <br />
            Understanding of Jetpack architecture components
            <br />
            General knowledge of pattern designs
          </p>

          <h3>Desired:</h3>
          <p className={styles.skillList}>
            CI/CD experience
            <br />
            Backend experience (e.g. Java/Kotlin/.Net)
            <br />
            Understanding of the AWS environment and concepts
            <br />
            Experience in a FinTech organization
          </p>
        </div>

        <div className={styles.section}>
          <h2>KEY EMPLOYEES</h2>
          <p className={styles.skillList}>
            Your team of engineers, QA, technical lead and Product Manager
            <br />
            Other teams as needed to resolve cross-functional issues
            <br />
            Lead architect to ensure solution roadmap and technology strategy
          </p>
        </div>

        <div className={styles.section}>
          <h2>MEASURABLE RESULTS</h2>
          <p>Contribute to your team's goals</p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Mobile Developer')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Worldwide — work from anywhere.
            <br />
            <strong>Department:</strong> Engineering
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileDeveloper;
