import React from 'react';
import AppIcon from '../../../components/AppIcon'; // Update path if needed

const LogoSection = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      {/* Logo without background box */}
      <AppIcon
        src="/assets/images/logo.png" // or the correct path to your logo
        size={64}
        alt="Beam Wallet Logo"
        className="mb-6"
      />

      {/* Main Heading */}
      <h1 className="font-heading text-3xl md:text-4xl text-secondary text-center mb-4">
        Stay Updated with Beam Wallet
      </h1>

      {/* Subheading */}
      <p className="font-body text-lg text-text-secondary text-center max-w-md">
        Get the latest updates, features, and insights delivered straight to your inbox
      </p>
    </div>
  );
};

export default LogoSection;
