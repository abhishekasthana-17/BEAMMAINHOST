import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./SeoSpecialist.module.css";

const SeoSpecialist = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "SEO Specialist - Beam Wallet";
  }, []);

  return (
    <>
      <Hero category="Careers" title="SEO Specialist" />

      <div className={styles.container}>
        <div className={styles.section}>
          <p>
            Beam Wallet is growing and we need a highly qualified,
            forward-thinking{" "}
            <strong>
              SEO Expert who has complete command of optimization best practices
              and is able to execute projects from start to finish with mastery
              and independence.
            </strong>
          </p>
          <p>
            If you are a professional who is passionate about SEO, versatile,
            and knows how to drive results in competitive digital environments,{" "}
            <strong>this vacancy is for you!</strong>
          </p>
        </div>

        <div className={styles.section}>
          <h2>What we expect from you:</h2>
          <p className={styles.skillList}>
            <strong>– Proven SEO expertise:</strong> You have in-depth knowledge
            of all areas of SEO, including <strong>on-page, off-page</strong>,
            and <strong>technical SEO</strong>.
            <br />
            <strong>– Complete execution:</strong> Ability to take on projects
            from strategic planning to implementation and monitoring of results,
            with a focus on organic growth.
            <br />
            <strong>– Futuristic vision:</strong> Always ahead of new trends,
            emerging technologies and changes in search algorithms. Constantly
            seeks innovation in strategies to ensure long-term success.
            <br />
            <strong>– Versatility and autonomy:</strong> You know how to adapt
            to different challenges, work on different fronts and deliver
            consistent results autonomously.
            <br />
            <strong>– Mastery of SEO tools:</strong> Experience with tools such
            as Google Analytics, Search Console, SEMrush, Ahrefs, and others, to
            monitor, audit, and optimize websites.
            <br />
            <strong>– Strategic thinking:</strong> Ability to outline clear and
            objective strategies, aligned with Beam Wallet's business
            objectives, aiming to maximize our organic presence.
            <br />
            <strong>– Analytical skills:</strong> Can interpret metrics and
            transform data into valuable insights to improve website performance
            and increase conversion.
            <br />
            <strong>– Adaptability:</strong> Understanding the constant changes
            in the world of SEO and willingness to quickly adapt strategies
            based on search engine updates.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Responsibilities:</h2>
          <p className={styles.skillList}>
            <strong>–</strong> Create, implement and optimize{" "}
            <strong>SEO strategies</strong> to increase Beam Wallet's organic
            visibility across different markets and platforms.
            <br />
            <strong>–</strong> Perform <strong>competitor analysis</strong>,
            technical audits and identify growth opportunities.
            <br />
            <strong>–</strong> Constantly improve the user experience, focusing
            on SEO and best practices for mobile-first, loading speed and data
            structures.
            <br />
            <strong>–</strong> Coordinate with development teams, content
            marketing, and designers to ensure cohesive implementation of SEO
            best practices.
            <br />
            <strong>–</strong> Monitor and adjust SEO campaigns and strategies
            based on performance reports and new market data.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Differentials that we value:</h2>
          <p className={styles.skillList}>
            <strong>–</strong> Knowledge of <strong>blockchain</strong> and{" "}
            <strong>fintechs</strong>, with a focus on{" "}
            <strong>digital wallets</strong>.
            <br />
            <strong>–</strong> Experience in <strong>international SEO</strong>{" "}
            strategies.
            <br />
            <strong>–</strong> Familiarity with{" "}
            <strong>SEO for multimedia content</strong> such as videos and
            podcasts.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Why join Beam Wallet?</h2>
          <p className={styles.skillList}>
            <strong>– Innovative environment:</strong> Work at a company that is
            revolutionizing the fintech and blockchain industry, with the
            freedom to innovate and shape the future of SEO.
            <br />
            <strong>– Collaborative culture:</strong> A dynamic environment,
            with a talented team and a strong spirit of cooperation.
            <br />
            <strong>– Growth Opportunity:</strong> Contribute to the growth of
            Beam Wallet and grow with the company, exploring new challenges and
            expanding your skills.
          </p>
        </div>

        <div className={styles.section}>
          <p>
            If you have the profile of a visionary SEO, with impeccable
            execution capacity and an interest in being part of a company that
            is at the forefront of innovation in the digital financial market,{" "}
            <strong>we want to talk to you!</strong>
          </p>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('SEO Specialist')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Cascais
            <br />
            <strong>Department:</strong> Marketing
          </p>
        </div>
      </div>
    </>
  );
};

export default SeoSpecialist;
