import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CareersPage.module.css";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import SocialShare from "../components/SocialShare/SocialShare";
import { jobListings } from "../utils/careers";

// Descriptions remain here to avoid breaking UI
const jobDescriptions = {
  "Mobile Developer": "The central purpose of the Mobile Developer role is to develop and implement high quality software as part of your product team.",
  "Java/Scala Developer": "The central purpose of the Java/Scala Developer role is to develop, support and provide technical assistance to the engineering team to reduce complexit.",
  "SEO Specialist": "Beam Wallet is growing and we need a highly qualified, forward-thinking SEO Expert who has complete command of optimization best practices and is able to execute projects from start to finish with mastery and independence.",
  "Graphic Designer": "Beam Wallet, a pioneer in digital transaction solutions and technological innovation, is expanding its team and searching for an exceptional Graphic Designer. Our goal is to redefine the global payment experience, and we need your creative touch to bring our mission to life.",
  "Plugin Developer for Ecommerce": "We are looking for a Plugin Developer talented and experienced to join our team! If you have a passion for e-commerce and creating customized solutions that optimize the online shopping experience, this role is ideal for you.",
  "Discover your best future with Beam Wallet": "Beam Wallet is opening doors to a world of possibilities and invites people from all over the globe to join our global team. Regardless of your age, color, gender, or background – what truly matters is that you are human and ready to make a difference.",
};

const CareersPage = () => {
  const [openJob, setOpenJob] = useState(null);
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Careers - Beam Wallet";
  }, []);

  return (
    <div>
      <Hero title="Careers" backgroundColor={styles.pinkBackground} />

      {/* Job Openings Section */}
      <Section
        subtitle="BECOME ONE OF US"
        title="Job Openings"
        description="These are the current offers:"
        className={styles.jobOpeningsSection}
        backgroundColor="white"
      />

      {/* Job Listings Container */}
      <div className={styles.jobListingsContainer}>
        {jobListings.map((job) => (
          <div key={job.id} className={styles.jobCardWrapper}>
            <Link to={job.path} className={styles.jobCardLink}>
              <div className={styles.jobCard}>
                <div className={styles.jobCardDecoration}>
                  <i className={`fas ${job.icon} ${styles.jobCardIcon}`}></i>
                </div>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobDescription}>{jobDescriptions[job.title]}</p>
              </div>
            </Link>
            <div className={styles.jobCardShare}>
              <SocialShare
                url={job.path}
                title={`${job.title} - Beam Wallet Careers`}
                description={jobDescriptions[job.title]}
                platforms={['linkedin', 'twitter', 'whatsapp', 'facebook']}
                size="small"
              />
              <a
                className={styles.applyNowBtn}
                href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apply now for ${job.title}`}
              >Apply Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
