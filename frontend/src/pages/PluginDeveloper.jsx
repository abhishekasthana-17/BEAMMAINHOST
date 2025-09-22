import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./MobileDeveloper.module.css";

const PluginDeveloper = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Plugin Developer for E-Commerce Platforms - Beam Wallet";
  }, []);

  return (
    <>
      <Hero
        category="Careers"
        title="Plugin Developer for E-commerce Platforms"
      />

      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Plugin Developer for E-commerce Platforms</h2>
          <p>
            We are looking for a <strong>Plugin Developer</strong> talented and
            experienced to join our team! If you have a passion for e-commerce
            and creating customized solutions that optimize the online shopping
            experience, this role is ideal for you.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Responsibilities:</h2>
          <p className={styles.skillList}>
            Develop, maintain and update <strong>custom plugins</strong> for
            e-commerce platforms.
            <br />
            Implement and integrate payment solutions, logistics and other
            essential functionalities for online stores.
            <br />
            Work with <strong>Third-party APIs</strong> to create custom
            features.
            <br />
            Identify and resolve performance and security issues on e-commerce
            platforms.
            <br />
            Collaborate with design and marketing teams to ensure an optimized
            and intuitive user experience.
            <br />
            Participate in <strong>code reviews</strong> and guarantee the high
            quality of the developed code.
            <br />
            Apply good development practices (clean code, design patterns) in
            all deliveries.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Requirements:</h2>
          <p className={styles.skillList}>
            Proven experience in developing <strong>plugins</strong> for
            e-commerce platforms.
            <br />
            Strong knowledge in <strong>
              PHP, HTML5, CSS3, JavaScript
            </strong>{" "}
            and <strong>MySQL</strong>.<br />
            Knowledge in <strong>APIs REST</strong> and integrations with
            external systems.
            <br />
            Ability to diagnose, optimize and resolve complex online platform
            problems.
            <br />
            Understanding code security and practices for e-commerce
            environments.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Benefits:</h2>
          <p className={styles.skillList}>
            Remote or hybrid work, depending on your location and preference.
            <br />
            Flexible hours.
            <br />
            Opportunity for professional growth and development.
            <br />
            Participation in innovative and dynamic project in the financiale
            sector.
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Plugin Developer for E-commerce Platforms')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Temporary Work (Possibility to be
            included in company board)
            <br />
            <strong>Job Location:</strong> Lisbon, Cascais / Remote
            <br />
            <strong>Department:</strong> Engineering
          </p>
        </div>
      </div>
    </>
  );
};

export default PluginDeveloper;
