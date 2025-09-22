import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import styles from './MobileDeveloper.module.css';

const InternationalProjectManager = () => {
  useEffect(() => {
    document.title = 'International Project Manager - Beam Wallet';
  }, []);

  return (
    <>
      <Hero category="Careers" title="International Project Manager" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>About the Role</h2>
            <p>
              Beam Wallet is a global digital payments platform operating in dozens of countries with millions of 
              users. We lead the market in sales automation, real-time cashback, instant banking integration, 
              and smart voucher distribution. As we expand rapidly, we're looking for top-tier professionals who 
              want to be part of reshaping the future of payments and the global digital economy.
            </p>
            <p>
              We are hiring a highly organized, experienced, and versatile Project Manager with strong 
              leadership skills, strategic thinking, and a focus on execution. This role is critical in coordinating 
              and managing Beam Wallet projects at national and international levels — including technical, 
              commercial, institutional, and operational initiatives.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Key Responsibilities</h2>
          <p className={styles.skillList}>
            Plan, coordinate, and oversee the execution of strategic projects
            <br />
            Manage timelines, resources, deliverables, budgets, and risk assessments
            <br />
            Lead and align multidisciplinary teams (technical, commercial, operational)
            <br />
            Maintain clear communication with internal and external stakeholders
            <br />
            Document project milestones and continuously improve processes
            <br />
            Prepare and present progress reports and KPIs to upper management
            <br />
            Ensure delivery quality, timeline compliance, and partner satisfaction
            <br />
            Provide basic technical oversight of projects involving AWS, Firebase, API integrations, and digital systems
            <br />
            Ensure compliance with international data protection and security standards
          </p>
        </div>

        <div className={styles.section}>
          <h2>Required Qualifications</h2>
          <p className={styles.skillList}>
            Bachelor's degree in Project Management, Engineering, Information Systems, Business Administration, or related fields
            <br />
            Minimum of 3 years of proven experience as a Project Manager (preferably in digital, fintech, banking, or tech sectors)
            <br />
            Solid knowledge of Agile methodologies (Scrum, Kanban, Lean) and traditional frameworks (PMI, PRINCE2)
            <br />
            Working knowledge of AWS and Firebase — essential for managing cloud-based project environments
            <br />
            Hands-on experience with tools like Trello, Jira, Monday, Asana, Slack, and Google Workspace
            <br />
            Good understanding of APIs, system integration flows, and digital architecture
            <br />
            Excellent communication, leadership, and organizational skills
            <br />
            Fluent in English (spoken and written) — additional languages are a strong advantage
            <br />
            Ability to manage multiple projects under pressure with a high level of accountability
            <br />
            Strategic mindset with initiative and a results-driven attitude
          </p>
        </div>

        <div className={styles.section}>
          <h2>Preferred Skills & Assets</h2>
          <p className={styles.skillList}>
            Experience in fintechs, startups, or global-scale digital platforms
            <br />
            Relevant certifications: PMP, PMI-ACP, CSM, PRINCE2, AWS Certified, etc.
            <br />
            Experience working in multicultural environments
            <br />
            Genuine interest in blockchain, automation, or digital finance
            <br />
            Self-learning attitude and adaptability in fast-paced environments
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p className={styles.skillList}>
            International work environment and high-impact global projects
            <br />
            Access to exclusive technologies and cutting-edge tools
            <br />
            Freedom to lead with autonomy and responsibility
            <br />
            Paid international travel for training and project supervision
            <br />
            Rapid career progression within the Beam Wallet structure
            <br />
            Competitive salary + performance bonuses
            <br />
            Direct contribution to shaping the future of the digital economy
          </p>
        </div>

        <div className={styles.section}>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('International Project Manager')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Remote / International Travel Required
            <br />
            <strong>Department:</strong> Operations
          </p>
        </div>
      </div>
    </>
  );
};

export default InternationalProjectManager;