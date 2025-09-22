import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./MobileDeveloper.module.css";

const GraphicDesigner = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title =
      "Unlock Your Potential as a Graphic Designer at Beam Wallet";
  }, []);

  return (
    <>
      <Hero category="Careers" title="Graphic Designer" />

      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Beam Wallet is Hiring a Creative Graphic Designer!</h2>
          <p>
            Beam Wallet, a pioneer in digital transaction solutions and
            technological innovation, is expanding its team and searching for an
            exceptional graphic designer. Our goal is to redefine the global
            payment experience, and we need your creative touch to bring our
            mission to life.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Who We Are:</h2>
          <p>
            Beam Wallet leads the market with a platform that combines robust
            security, cutting-edge artificial intelligence, and a 15-year
            history of innovation. We are a team dedicated to transforming the
            way the world perceives and utilizes payment solutions, ensuring
            success and sustainability for our partners.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Who We're Looking For:</h2>
          <p className={styles.skillList}>
            <strong>– Creativity and Innovation:</strong> Ability to create
            unique designs that elevate the brand identity.
            <br />
            <strong>– Technical Proficiency:</strong> Excellence in design
            software such as Adobe Creative Suite (Photoshop, Illustrator,
            InDesign).
            <br />
            <strong>– Visual Storytelling:</strong> Skill in expressing complex
            ideas through simple and engaging visuals.
            <br />
            <strong>– Attention to Detail:</strong> Precision in every aspect of
            design, from concept to final execution.
            <br />
            <strong>– Project Management Skills:</strong> Organized and
            efficient in managing multiple deadlines and priorities.
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer:</h2>
          <p className={styles.skillList}>
            <strong>– Innovative Environment:</strong> Be part of a team that
            doesn't just follow trends, but creates them.
            <br />
            <strong>– Growth and Development:</strong> Clear paths for
            professional advancement and continuous skill improvement.
            <br />
            <strong>– Global Impact:</strong> Work on campaigns that reach
            millions around the world, contributing directly to Beam Wallet's
            mission.
            <br />
            <strong>– Dynamic and Inclusive Culture:</strong> Collaborate with a
            multicultural team that values diverse perspectives and ideas.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Why Beam Wallet?</h2>
          <p>
            Joining Beam Wallet is more than a job - it's a chance to be part of
            a global digital transformation. With our commitment to excellence
            and innovation, you'll have the opportunity to work with technology
            that is years ahead of anything else on the market.
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Graphic Designer')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Cascais
            <br />
            <strong>Department:</strong> Design
          </p>
        </div>
      </div>
    </>
  );
};

export default GraphicDesigner;
