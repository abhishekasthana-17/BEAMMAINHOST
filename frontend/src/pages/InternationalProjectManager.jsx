import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../App.css';

const InternationalProjectManager = () => {
  return (
    <div className="App">
      <Helmet>
        <title>International Project Manager - Beam Wallet Careers</title>
        <meta name="description" content="Join Beam Wallet as an International Project Manager. Lead strategic projects across global markets in the digital payments industry." />
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="career-detail-header">
              <Link to="/careers" className="back-link">
                <i className="fas fa-arrow-left"></i> Back to Careers
              </Link>
              <h1 className="career-title">International Project Manager</h1>
              <div className="career-meta">
                <span className="location"><i className="fas fa-map-marker-alt"></i> Remote | International Travel Required</span>
                <span className="type"><i className="fas fa-briefcase"></i> Full-time | Initial Internship Period</span>
                <span className="start-date"><i className="fas fa-calendar"></i> Immediate Start</span>
              </div>
            </div>

            <div className="career-content">
              <section className="career-section">
                <h2>💼 About Beam Wallet</h2>
                <p>
                  Beam Wallet is a global digital payments platform operating in dozens of countries with millions of 
                  users. We lead the market in sales automation, real-time cashback, instant banking integration, 
                  and smart voucher distribution. As we expand rapidly, we're looking for top-tier professionals who 
                  want to be part of reshaping the future of payments and the global digital economy.
                </p>
              </section>

              <section className="career-section">
                <h2>📌 About the Role</h2>
                <p>
                  We are hiring a highly organized, experienced, and versatile Project Manager with strong 
                  leadership skills, strategic thinking, and a focus on execution. This role is critical in coordinating 
                  and managing Beam Wallet projects at national and international levels — including technical, 
                  commercial, institutional, and operational initiatives.
                </p>
              </section>

              <section className="career-section">
                <h2>🛠 Key Responsibilities</h2>
                <ul className="career-list">
                  <li>Plan, coordinate, and oversee the execution of strategic projects</li>
                  <li>Manage timelines, resources, deliverables, budgets, and risk assessments</li>
                  <li>Lead and align multidisciplinary teams (technical, commercial, operational)</li>
                  <li>Maintain clear communication with internal and external stakeholders</li>
                  <li>Document project milestones and continuously improve processes</li>
                  <li>Prepare and present progress reports and KPIs to upper management</li>
                  <li>Ensure delivery quality, timeline compliance, and partner satisfaction</li>
                  <li>Provide basic technical oversight of projects involving AWS, Firebase, API integrations, and digital systems</li>
                  <li>Ensure compliance with international data protection and security standards</li>
                </ul>
              </section>

              <section className="career-section">
                <h2>✅ Required Qualifications</h2>
                <ul className="career-list">
                  <li>Bachelor's degree in Project Management, Engineering, Information Systems, Business Administration, or related fields</li>
                  <li>Minimum of 3 years of proven experience as a Project Manager (preferably in digital, fintech, banking, or tech sectors)</li>
                  <li>Solid knowledge of Agile methodologies (Scrum, Kanban, Lean) and traditional frameworks (PMI, PRINCE2)</li>
                  <li>Working knowledge of AWS and Firebase — essential for managing cloud-based project environments</li>
                  <li>Hands-on experience with tools like Trello, Jira, Monday, Asana, Slack, and Google Workspace</li>
                  <li>Good understanding of APIs, system integration flows, and digital architecture</li>
                  <li>Excellent communication, leadership, and organizational skills</li>
                  <li>Fluent in English (spoken and written) — additional languages are a strong advantage</li>
                  <li>Ability to manage multiple projects under pressure with a high level of accountability</li>
                  <li>Strategic mindset with initiative and a results-driven attitude</li>
                </ul>
              </section>

              <section className="career-section">
                <h2>⭐️ Preferred Skills & Assets</h2>
                <ul className="career-list">
                  <li>Experience in fintechs, startups, or global-scale digital platforms</li>
                  <li>Relevant certifications: PMP, PMI-ACP, CSM, PRINCE2, AWS Certified, etc.</li>
                  <li>Experience working in multicultural environments</li>
                  <li>Genuine interest in blockchain, automation, or digital finance</li>
                  <li>Self-learning attitude and adaptability in fast-paced environments</li>
                </ul>
              </section>

              <section className="career-section">
                <h2>🎯 What We Offer</h2>
                <ul className="career-list">
                  <li>International work environment and high-impact global projects</li>
                  <li>Access to exclusive technologies and cutting-edge tools</li>
                  <li>Freedom to lead with autonomy and responsibility</li>
                  <li>Paid international travel for training and project supervision</li>
                  <li>Rapid career progression within the Beam Wallet structure</li>
                  <li>Competitive salary + performance bonuses</li>
                  <li>Direct contribution to shaping the future of the digital economy</li>
                </ul>
              </section>

              <section className="career-section">
                <h2>📩 How to Apply</h2>
                <div className="application-info">
                  <p>Please send your updated CV and a cover letter or portfolio of past projects (if available) to:</p>
                  <div className="contact-info">
                    <p><strong>📧 hr@beamwallet.com</strong></p>
                    <p><strong>Subject:</strong> Project Manager – [Your Name]</p>
                  </div>
                  <div className="important-note">
                    <p><strong>Important:</strong> Only complete applications submitted to the above email will be considered.</p>
                    <p>
                      Before applying, we strongly recommend that you explore Beam Wallet through our website and 
                      social channels. Time is money, and we value candidates who know the real power of what we do.
                    </p>
                  </div>
                </div>
              </section>

              <section className="career-section highlight-section">
                <h2>💡 Important Note for Applicants</h2>
                <p>
                  This is not a standard role. It's an opportunity to build something global and impactful. Take the 
                  time to study Beam Wallet, understand our mission, and show us how your experience and vision 
                  align with ours. Preparation is the first sign of excellence.
                </p>
              </section>

              <div className="apply-section">
                <Link to="/careers" className="btn btn-secondary">
                  <i className="fas fa-arrow-left"></i> Back to All Positions
                </Link>
                <a href="mailto:hr@beamwallet.com?subject=Project Manager – Application" className="btn btn-primary">
                  <i className="fas fa-envelope"></i> Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalProjectManager;