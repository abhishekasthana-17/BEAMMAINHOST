import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CareerApplicationForm from "../components/CareerApplicationForm/CareerApplicationForm";
import PageHelmet from "../components/PageHelmet/PageHelmet";
import styles from "./CareerApplicationPage.module.css";

const CareerApplicationPage = () => {
  const [searchParams] = useSearchParams();
  const selectedPosition = searchParams.get("position") || "";

  useEffect(() => {
    document.title = "Career Application - Beam Wallet";
  }, []);

  return (
    <>
      <PageHelmet
        title="Career Application - Beam Wallet"
        description="Apply for a career position at Beam Wallet. Join our innovative team and help shape the future of digital payments."
        keywords="careers, jobs, beam wallet, application, employment, team"
      />
      
      <div className={styles.pageContainer}>
        <CareerApplicationForm selectedPosition={selectedPosition} />
      </div>
    </>
  );
};

export default CareerApplicationPage;