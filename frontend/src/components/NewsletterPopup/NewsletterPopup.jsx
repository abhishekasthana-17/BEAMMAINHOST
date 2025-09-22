import React, { useState, useEffect, useRef, useCallback } from 'react';
import './NewsletterPopup.css';
import logoBeam from '../../assets/images/logo_beam.png';

const NewsletterPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });
  const [isAnimating, setIsAnimating] = useState(false);
  const [popupPhase, setPopupPhase] = useState('waiting'); // waiting, showing, hiding, completed

  // Timing refs
  const initialTimerRef = useRef(null);
  const reappearTimerRef = useRef(null);
  const popupShownRef = useRef(false);

  const categoryOptions = [
    { value: 'general-updates', label: 'General Updates' },
    { value: 'product-releases', label: 'Product Releases' },
    { value: 'security-alerts', label: 'Security Alerts' },
    { value: 'partnership-news', label: 'Partnership News' },
    { value: 'community-events', label: 'Community Events' },
    { value: 'developer-resources', label: 'Developer Resources' },
  ];

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

  // Initial popup timer (6 seconds)
  useEffect(() => {
    if (!popupShownRef.current && popupPhase === 'waiting') {
      initialTimerRef.current = setTimeout(() => {
        showPopup();
      }, 6000); // 6 seconds
    }

    return () => {
      if (initialTimerRef.current) {
        clearTimeout(initialTimerRef.current);
      }
    };
  }, [showPopup, popupPhase]);

  // Handle close modal with reappear logic
  const handleCloseModal = useCallback(() => {
    hidePopup();
    
    // Only set reappear timer if not completed
    if (popupPhase !== 'completed') {
      reappearTimerRef.current = setTimeout(() => {
        if (popupPhase !== 'completed') {
          showPopup();
        }
      }, 30000); // 30 seconds
    }
  }, [hidePopup, showPopup, popupPhase]);

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
    
    if (!category?.trim()) {
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

        // Make API call to newsletter backend
        const apiUrl = import.meta.env.VITE_NEWSLETTER_API_URL || 'http://localhost:3000';
        const response = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, category }),
        });

        if (!response.ok) {
          throw new Error('Subscription failed');
        }

        const data = await response.json();
        
        setStatusMessage({
          type: 'success',
          message: `Thank you! You've successfully subscribed to ${data.data?.category?.replace('-', ' ')} updates. Check your email for confirmation.`
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
      className={`newsletter-modal-overlay ${isAnimating ? 'animating' : ''}`}
      onClick={handleCloseModal}
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
        <button 
          className="newsletter-close-btn"
          onClick={handleCloseModal}
          ref={closeButtonRef}
          aria-label="Close newsletter popup"
        >
          ×
        </button>
        
        <div className="newsletter-popup">
          {/* Logo Section */}
          <div className="newsletter-logo-section">
            <img src={logoBeam} alt="Beam Wallet Logo" className="newsletter-logo-image" />

            <h1 id="newsletter-title" className="newsletter-main-heading">Stay Updated with Beam Wallet</h1>
            <p id="newsletter-description" className="newsletter-subheading">
              Get the latest updates, exclusive offers, and insights delivered straight to your inbox. 
              Join thousands of users who trust Beam Wallet for their digital transactions.
            </p>
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

            <div className="newsletter-form-group">
              <select
                value={category}
                onChange={(e) => setCategory(e?.target?.value)}
                className={`newsletter-category-select ${errors?.category ? 'error' : ''}`}
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
              {errors?.category && <span id="category-error" className="newsletter-error-message" role="alert">{errors?.category}</span>}
            </div>

            <button
              type="submit"
              className={`newsletter-subscribe-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
              aria-describedby="subscribe-status"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="newsletter-trust-indicators">
            <div className="newsletter-trust-item">
              <span className="newsletter-check-icon">✓</span>
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="newsletter-trust-item">
              <span className="newsletter-check-icon">✓</span>
              <span>Secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;