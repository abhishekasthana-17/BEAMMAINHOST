import React from 'react';

const PrivacyDisclaimer = () => {
  return (
    <div className="text-center max-w-md">
      <p className="font-caption text-xs text-text-secondary leading-relaxed">
        By subscribing, you agree to receive marketing emails from Beam Wallet. 
        You can unsubscribe at any time. View our{' '}
        <a 
          href="#privacy" 
          className="text-primary hover:text-accent underline transition-smooth"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a 
          href="#terms" 
          className="text-primary hover:text-accent underline transition-smooth"
        >
          Terms of Service
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyDisclaimer;