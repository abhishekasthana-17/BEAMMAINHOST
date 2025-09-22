import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import LogoSection from './components/LogoSection';
import SubscriptionForm from './components/SubscriptionForm';
import TrustIndicators from './components/TrustIndicators';
import PrivacyDisclaimer from './components/PrivacyDisclaimer';
import StatusMessage from './components/StatusMessage';

const NewsletterSubscriptionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });

  const handleSubscription = async (formData) => {
    setIsLoading(true);
    setStatusMessage({ type: '', message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful subscription
      console.log('Subscription data:', formData);
      
      setStatusMessage({
        type: 'success',
        message: `Thank you! You've successfully subscribed to ${formData?.category?.replace('-', ' ')} updates. Check your email for confirmation.`
      });
      
    } catch (error) {
      setStatusMessage({
        type: 'error',
        message: 'Subscription failed. Please try again later or contact support if the problem persists.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseMessage = () => {
    setStatusMessage({ type: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Newsletter Subscription Widget */}
          <div className="bg-card rounded-2xl shadow-elevation p-8 sm:p-12 border border-border">
            <div className="flex flex-col items-center">
              
              {/* Logo and Heading Section */}
              <LogoSection />
              
              {/* Status Message */}
              <StatusMessage 
                type={statusMessage?.type}
                message={statusMessage?.message}
                onClose={handleCloseMessage}
              />
              
              {/* Subscription Form */}
              <SubscriptionForm 
                onSubmit={handleSubscription}
                isLoading={isLoading}
              />
              
              {/* Trust Indicators */}
              <div className="mt-8">
                <TrustIndicators />
              </div>
              
              {/* Privacy Disclaimer */}
              <PrivacyDisclaimer />
              
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="font-caption text-sm text-text-secondary">
              Join over 50,000+ subscribers who trust Beam Wallet for secure digital payments
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-caption text-sm text-text-secondary">
              © {new Date()?.getFullYear()} Beam Wallet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsletterSubscriptionComponent;