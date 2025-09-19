import React, { useEffect } from "react";
import "./PartnershipsPage.module.css";

const PartnershipsPage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Partnerships - Beam Wallet";
  }, []);

  return <div>PartnershipsPage</div>;
};

export default PartnershipsPage;
