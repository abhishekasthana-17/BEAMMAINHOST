import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./JavaScalaDeveloper.module.css";
import PageHelmet from "../components/PageHelmet";

const JavaScalaDeveloper = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Java/Scala Developer - Beam Wallet";
  }, []);

  return (
    <>
    <PageHelmet 
    title="Java/Scala Developer - Beam Wallet"
    pageName="java-scala-developer"
    />
      <Hero category="Careers" title="Java/Scala Developer" />

      <div className={styles.container}>
        <div className={styles.section}>
          <p>
            At Beam, we build modern, cloud-native software applications that
            serve our customers and process payments in real time. We use
            microservices, domain-driven design, and event-driven architectures
            to ensure scalability and performance as we grow, and all of this
            presents some fascinating and innovative engineering problems for
            our teams to solve.
          </p>
          <p>
            Our goal is to always create high-quality software and deliver new
            features at a fast pace. As such, we utilize continuous
            integration/continuous deployment tools along with agile methodology
            that incorporates iterative development techniques. We value clean
            code, good design principles, and automated testing.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Functions:</h2>
          <p className={styles.skillList}>
            Collaborate with the development team to design, implement and test
            effective Java/Scala solutions.
            <br />
            Develop clean and efficient codes that follow best programming
            practices.
            <br />
            Participate in code reviews and provide constructive feedback.
            <br />
            Solve complex problems creatively and effectively.
            <br />
            Stay up to date with trends and technological advancements relevant
            to Java/Scala.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Requirements:</h2>
          <p className={styles.skillList}>
            Solid experience in Java and/or Scala programming, demonstrating
            previous successful projects.
            <br />
            Knowledge in developing scalable, high-performance applications.
            <br />
            Problem-solving and analytical thinking skills.
            <br />
            Ability to work collaboratively in a team.
            <br />
            Excellent verbal and written communication skills.
            <br />
            Training in Computer Science, Software Engineering or a related
            field (graduation is a plus, but is not a mandatory requirement).
            <br />
            Familiarity with project management software
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer:</h2>
          <p className={styles.skillList}>
            A stimulating and collaborative work environment, where your ideas
            are valued.
            <br />
            Opportunities for continuous learning and professional development.
            <br />
            Challenging projects that will improve your technical and creative
            skills.
          </p>
        </div>

        <div className={styles.section}>
          <h2>How to apply:</h2>
          <p>
            If you are excited to be part of our team and ready to take on new
            challenges, please submit your resume and cover letter demonstrating
            your Java/Scala programming experience and relevant projects. We
            look forward to receiving your application and exploring how you can
            contribute to our continued success.
          </p>
          <a className={styles.applyNowBtn} href={`/careers/apply?position=${encodeURIComponent('Java/Scala Developer')}`} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>

        <div className={styles.section}>
          <p className={styles.jobDetails}>
            <strong>Job Type:</strong> Full Time
            <br />
            <strong>Job Location:</strong> Cascais
            <br />
            <strong>Department:</strong> Engineering
          </p>
        </div>
      </div>
    </>
  );
};

export default JavaScalaDeveloper;
