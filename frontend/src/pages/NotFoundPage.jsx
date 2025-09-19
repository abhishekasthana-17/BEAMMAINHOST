import React, { useEffect } from "react";
import "./NotFoundPage.module.css";

const NotFoundPage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Page Not Found - Beam Wallet";
  }, []);

  return <div>NotFoundPage</div>;
};

export default NotFoundPage;
