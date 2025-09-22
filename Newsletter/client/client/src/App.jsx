import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import api from 'config/api';

function App() {
  // Popup timing and state management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [popupPhase, setPopupPhase] = useState('initial'); // 'initial', 'first-reappear', 'final-reappear', 'completed'
  
  // Form state
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });
  
  // Timing refs for cleanup
  const timersRef = useRef({
    initial: null,
    firstReappear: null,
    finalReappear: null
  });
  
  // Track if popup has been shown to prevent duplicates
  const popupShownRef = useRef({
    initial: false,
    firstReappear: false,
    finalReappear: false
  });

  const categoryOptions = [
    { value: 'investors', label: 'For investors' },
    { value: 'businesses', label: 'For Businesses' },
    { value: 'beamers', label: 'For Beamers' },
    { value: 'tech-partners', label: 'For Technologic Partners' },
    { value: 'banks', label: 'For Banks and financial institutions' },
    { value: 'careers', label: 'Careers' },
    { value: 'commercial-agents', label: 'For commercial agents' },
    { value: 'beam-token', label: 'Beam Token' }
  ];

  // Clear all timers
  const clearAllTimers = useCallback(() => {
    Object.values(timersRef.current).forEach(timer => {
      if (timer) clearTimeout(timer);
    });
    timersRef.current = {
      initial: null,
      firstReappear: null,
      finalReappear: null
    };
  }, []);

  // Show popup with animation
  const showPopup = useCallback((phase) => {
    if (popupShownRef.current[phase] || isModalOpen) return;
    
    popupShownRef.current[phase] = true;
    setPopupPhase(phase);
    setIsAnimating(true);
    
    // Small delay to ensure animation class is applied
    setTimeout(() => {
      setIsModalOpen(true);
    }, 50);
  }, [isModalOpen]);

  // Hide popup with animation
  const hidePopup = useCallback(() => {
    setIsAnimating(false);
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  }, []);

  // Initialize popup timing system
  useEffect(() => {
    // Clear any existing timers
    clearAllTimers();

    // Initial popup after 6 seconds
    timersRef.current.initial = setTimeout(() => {
      showPopup('initial');
    }, 6000);

    // Cleanup on unmount
    return () => {
      clearAllTimers();
    };
  }, [showPopup, clearAllTimers]);

  // Handle popup dismissal and reappear logic
  const handleCloseModal = useCallback(() => {
    hidePopup();
    
    // Set up reappear timers based on current phase
    if (popupPhase === 'initial' && !popupShownRef.current.firstReappear) {
      // First reappear after 30 seconds
      timersRef.current.firstReappear = setTimeout(() => {
        showPopup('first-reappear');
      }, 30000);
    } else if (popupPhase === 'first-reappear' && !popupShownRef.current.finalReappear) {
      // Final reappear after 1 minute
      timersRef.current.finalReappear = setTimeout(() => {
        showPopup('final-reappear');
      }, 60000);
    } else if (popupPhase === 'final-reappear') {
      // Mark as completed - no more popups
      setPopupPhase('completed');
    }
  }, [popupPhase, hidePopup, showPopup]);

  const validateForm = () => {
    const newErrors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex?.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!category) {
      newErrors.category = 'Please select a category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      setStatusMessage({ type: '', message: '' });

      try {
        console.log('Subscription data:', { email, category });

        const response = await api.post('newsletter/subscribe', {email, category});
        
        setStatusMessage({
          type: 'success',
          message: `Thank you! You've successfully subscribed to ${response.data.data.category?.replace('-', ' ')} updates. Check your email for confirmation.`
        });
        
        setEmail('');
        setCategory('');
        setErrors({});
        
        // Mark popup system as completed after successful subscription
        setPopupPhase('completed');
        clearAllTimers();
        
      } catch (error) {
        setStatusMessage({
          type: 'error',
          message: 'Subscription failed. Please try again later or contact support if the problem persists.'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCloseMessage = () => {
    setStatusMessage({ type: '', message: '' });
  };

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, handleCloseModal]);

  // Focus management for accessibility
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null; // Don't render anything when modal is closed
  }

  return (
    <div 
      className={`modal-overlay ${isAnimating ? 'animating' : ''}`}
      onClick={handleCloseModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
      aria-describedby="newsletter-description"
    >
      <div 
        className={`modal-content ${popupPhase}`}
        onClick={(e) => e?.stopPropagation()}
        ref={modalRef}
      >
        <button 
          className="close-btn"
          onClick={handleCloseModal}
          ref={closeButtonRef}
          aria-label="Close newsletter popup"
        >
          ×
        </button>
        
        <div className="newsletter-popup">
          {/* Logo Section */}
          <div className="logo-section">
            <img src="/assets/images/logo.png" alt="Beam Wallet Logo" className="logo-image" />

            <h1 id="newsletter-title" className="main-heading">Stay Updated with Beam Wallet</h1>
            <p id="newsletter-description" className="subheading">
              Get the latest updates, exclusive offers, and insights delivered straight to your inbox. 
              Join thousands of users who trust Beam Wallet for their digital transactions.
            </p>
          </div>

          {/* Status Message */}
          {statusMessage?.message && (
            <div className={`status-message ${statusMessage?.type}`}>
              <div className="status-content">
                <span className="status-icon">
                  {statusMessage?.type === 'success' ? '✓' : '!'}
                </span>
                <p className="status-text">{statusMessage?.message}</p>
                <button className="status-close" onClick={handleCloseMessage}>×</button>
              </div>
            </div>
          )}

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="subscription-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                className={`email-input ${errors?.email ? 'error' : ''}`}
                required
                aria-describedby={errors?.email ? 'email-error' : undefined}
              />
              {errors?.email && <span id="email-error" className="error-message" role="alert">{errors?.email}</span>}
            </div>

            <div className="form-group">
              <select
                value={category}
                onChange={(e) => setCategory(e?.target?.value)}
                className={`category-select ${errors?.category ? 'error' : ''}`}
                required
                aria-describedby={errors?.category ? 'category-error' : undefined}
              >
                <option value="">Select a category</option>
                {categoryOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
              {errors?.category && <span id="category-error" className="error-message" role="alert">{errors?.category}</span>}
            </div>

            <button
              type="submit"
              className={`subscribe-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
              aria-describedby="subscribe-status"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="check-icon">✓</span>
              <span>No spam, ever</span>
            </div>
            <div className="trust-item">
              <span className="check-icon">✓</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          {/* Privacy Disclaimer */}
          <div className="privacy-disclaimer">
            <p>
              By subscribing, you agree to receive marketing emails from Beam Wallet. 
              You can unsubscribe at any time by clicking the link in our emails. 
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;