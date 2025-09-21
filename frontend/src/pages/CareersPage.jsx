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
  "Full Stack/Web3 Developer": "We are looking for an experienced full stack developer to lead the integration between a token sales portal and an Ethereum smart contract. Join the platform that is transforming the global digital economy.",
  "Designer": "A Beam Wallet está a contratar um Designer para apoiar a produção criativa em múltiplos formatos e canais. Procuramos alguém versátil, inovador e atento ao detalhe, capaz de transformar conceitos em materiais visuais de alto impacto.",
  "Security Developer": "Join Beam Wallet as a Security Developer in this international position. Develop, implement, and enhance security architectures across all levels including blockchain, smart contracts, and cloud environments. Experience in fintech cybersecurity required.",
  "Social Media Specialist": "We are looking for a creative, strategic, and innovative Social Media Specialist capable of turning content into engaging digital experiences. Manage and expand Beam Wallet's presence across different platforms on a global scale.",
  "International Project Manager": "Join Beam Wallet as an International Project Manager in this remote position with international travel requirements. Lead strategic projects across global markets, coordinate multidisciplinary teams, and manage technical, commercial, and operational initiatives in the digital payments industry.",
  "Tester (QA – Quality Assurance)": "Join Beam Wallet as a Tester (QA – Quality Assurance) in this global position with remote work flexibility. Test all company platforms including websites, mobile apps, payment systems, and ensure the highest standards of quality, security, and scalability.",
  "Cybersecurity Developer": "Join Beam Wallet as a Cybersecurity Developer with expertise in AWS and Google Cloud environments. Audit, program, and implement secure solutions while working closely with DevOps, backend, and infrastructure teams to ensure the integrity, availability, and security of our infrastructure and data.",
  "Sales Agent": "Are you ready to represent one of the smartest and most complete payment platforms in the world? Join Beam Wallet as a Sales Agent with earning potential of €15,000+ per month. Work independently with full support, build your client portfolio, and grow with our global expansion.",
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
