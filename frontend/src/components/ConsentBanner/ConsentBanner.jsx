import React, { useState, useEffect } from "react";
import "./ConsentBanner.css";

const API_URL = import.meta.env.VITE_API_URL;

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = async (consentValue) => {
    localStorage.setItem("cookie_consent", consentValue);
    setShowBanner(false);

    // Update Google Consent Mode status
    const consentState = consentValue === "accepted" ? "granted" : "denied";
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "update_consent",
      analytics_storage: consentState,
      ad_storage: consentState,
      functionality_storage: consentState,
      security_storage: consentState,
    });

    try {
      const response = await fetch(`${API_URL}/api/log-consent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          consent: consentValue,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to log consent");
      }
    } catch (error) {
      console.error("Error logging cookie consent:", error);
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="consent-overlay">
      <div className="consent-modal">
        <p>
          We use cookies to improve your experience and for analytical purposes.
          Do you accept?
        </p>
        <div className="consent-actions">
          <button
            onClick={() => handleConsent("declined")}
            className="decline-btn"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="accept-btn"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
