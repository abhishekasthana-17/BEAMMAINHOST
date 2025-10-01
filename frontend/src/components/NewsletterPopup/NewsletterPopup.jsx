import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NewsletterPopup.css';
import logoBeam from '../../assets/images/logo_beam.png';

const NewsletterPopup = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });
  const [isAnimating, setIsAnimating] = useState(false);
  const [popupPhase, setPopupPhase] = useState('waiting'); // waiting, showing, hiding, completed

  // Timing refs
  const initialTimerRef = useRef(null);
  const reappearTimerRef = useRef(null);
  const popupShownRef = useRef(false);

  // Clear all timers
  const clearAllTimers = useCallback(() => {
    if (initialTimerRef.current) {
      clearTimeout(initialTimerRef.current);
      initialTimerRef.current = null;
    }
    if (reappearTimerRef.current) {
      clearTimeout(reappearTimerRef.current);
      reappearTimerRef.current = null;
    }
  }, []);

  // Show popup with animation
  const showPopup = useCallback(() => {
    if (popupPhase === 'completed') return;
    
    setIsAnimating(true);
    setPopupPhase('showing');
    setIsModalOpen(true);
    popupShownRef.current = true;
  }, [popupPhase]);

  // Hide popup with animation
  const hidePopup = useCallback(() => {
    setIsAnimating(true);
    setPopupPhase('hiding');
    
    setTimeout(() => {
      setIsModalOpen(false);
      setIsAnimating(false);
    }, 300);
  }, []);

  // Show popup on every page visit
  useEffect(() => {
    // Show popup whenever someone opens the website
    if (popupPhase === 'waiting') {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        showPopup();
      }, 1000); // 1 second delay
      
      return () => clearTimeout(timer);
    }
  }, [popupPhase, showPopup]);

  // Initial popup timer - removed since popup shows immediately
  // useEffect(() => {
  //   if (!popupShownRef.current && popupPhase === 'waiting') {
  //     initialTimerRef.current = setTimeout(() => {
  //       showPopup();
  //     }, 6000); // 6 seconds
  //   }

  //   return () => {
  //     if (initialTimerRef.current) {
  //       clearTimeout(initialTimerRef.current);
  //     }
  //   };
  // }, [showPopup, popupPhase]);

  // Handle close modal - disabled for mandatory popup
  const handleCloseModal = useCallback(() => {
    // Popup cannot be closed until email is submitted
    return;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!agreeToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
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
        console.log('Subscription data:', { email });

        // Make API call to newsletter backend
        // Supports two env styles:
        // 1) VITE_NEWSLETTER_API_URL = "http://<host>:3001" (server root)
        // 2) VITE_NEWSLETTER_API_URL = "http://<host>:3001/api/newsletter" (newsletter base)
        const envUrl = import.meta.env.VITE_NEWSLETTER_API_URL || 'http://localhost:3001';
        const base = envUrl.replace(/\/+$/,'');
        const finalUrl = /\/api\/newsletter$/.test(base)
          ? `${base}/subscribe`
          : `${base}/api/newsletter/subscribe`;

        const response = await fetch(finalUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('Newsletter API success:', data);
          
          // Only show success message when data is actually saved
          setStatusMessage({
            type: 'success',
            message: `Thank you! Your subscription has been successfully recorded. Welcome to the BEAM community!`
          });
          
          // Note: Not storing in localStorage since we want popup to show every time
          // localStorage.setItem('beam_newsletter_email_provided', 'true');
          
          setEmail('');
          setErrors({});
          
          // Mark popup system as completed after successful subscription
          setPopupPhase('completed');
          clearAllTimers();
          
          // Hide the popup after successful submission
          setTimeout(() => {
            setIsModalOpen(false);
          }, 3000); // Hide after 3 seconds to show success message
        } else {
          // Show error message when API fails
          const errorData = await response.json().catch(() => ({}));
          setStatusMessage({
            type: 'error',
            message: errorData.message || 'Failed to subscribe. Please try again later.'
          });
        }
        
      } catch (error) {
        // Handle network errors or other unexpected errors
        console.log('Newsletter subscription error:', error);
        
        setStatusMessage({
          type: 'error',
          message: 'Network error. Please check your connection and try again.'
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
      className={`newsletter-modal-overlay ${isAnimating ? 'animating' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
      aria-describedby="newsletter-description"
    >
      <div 
        className={`newsletter-modal-content ${popupPhase}`}
        onClick={(e) => e?.stopPropagation()}
        ref={modalRef}
      >
        
        <div className="newsletter-popup">
          {/* Logo Section */}
          <div className="newsletter-logo-section">
            <img src={logoBeam} alt="Beam Wallet Logo" className="newsletter-logo-image" />

            <h1 id="newsletter-title" className="newsletter-main-heading">To continue, we kindly ask you to enter your email (to avoid spam) and agree to our Terms and Conditions</h1>
          </div>

          {/* Status Message */}
          {statusMessage?.message && (
            <div className={`newsletter-status-message ${statusMessage?.type}`}>
              <div className="newsletter-status-content">
                <span className="newsletter-status-icon">
                  {statusMessage?.type === 'success' ? '✓' : '!'}
                </span>
                <p className="newsletter-status-text">{statusMessage?.message}</p>
                <button className="newsletter-status-close" onClick={handleCloseMessage}>×</button>
              </div>
            </div>
          )}

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="newsletter-subscription-form">
            <div className="newsletter-form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                className={`newsletter-email-input ${errors?.email ? 'error' : ''}`}
                required
                aria-describedby={errors?.email ? 'email-error' : undefined}
              />
              {errors?.email && <span id="email-error" className="newsletter-error-message" role="alert">{errors?.email}</span>}
            </div>

            <div className="newsletter-form-group newsletter-checkbox-group">
              <label className="newsletter-checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className={`newsletter-checkbox ${errors?.terms ? 'error' : ''}`}
                  aria-describedby={errors?.terms ? 'terms-error' : undefined}
                />
                <span className="newsletter-checkbox-text">
                  I agree to the <Link to="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="newsletter-terms-link">Terms and Conditions</Link>
                </span>
              </label>
              {errors?.terms && <span id="terms-error" className="newsletter-error-message" role="alert">{errors?.terms}</span>}
            </div>

            <button
              type="submit"
              className={`newsletter-subscribe-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
              aria-describedby="subscribe-status"
            >
              {isLoading ? 'Agreeing...' : 'Agree'}
            </button>
          </form>


        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;