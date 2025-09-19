import React from "react";
import "./CTA.css";
import beamIcon from "../../assets/images/beam_token.png"; // Assuming this icon exists

const CTA = ({ theme = "teal" }) => {
  const themeClass = theme === "pink" ? "cta-theme-pink" : "cta-theme-teal";

  const handleButtonClick = () => {
    window.open("https://participate.beamwallet.com/register", "_blank");
  };

  return (
    <div className={`cta-banner ${themeClass}`}>
      <div className="cta-content">
        <span className="cta-text">
          Participate in the BEAM TOKEN Public-Sale
        </span>
        <button
          className="cta-icon-button"
          aria-label="Participate in public sale"
          onClick={handleButtonClick}
        >
          <img src={beamIcon} alt="Beam Icon" className="cta-icon-image" />
        </button>
        <button className="cta-button" onClick={handleButtonClick}>
          Click here
        </button>
      </div>
    </div>
  );
};

export default CTA;
