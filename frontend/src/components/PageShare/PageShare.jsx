import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageShare.module.css';

const PageShare = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get current page info
  const currentPath = location.pathname;
  const currentUrl = `${window.location.origin}${currentPath}`;
  
  // Generate page title and description based on the current route
  const getPageInfo = () => {
    const path = currentPath.toLowerCase();
    
    // Page-specific titles and descriptions
    const pageInfo = {
      '/': {
        title: 'Beam Wallet - Pay Faster and Earn More',
        description: 'Revolutionary digital wallet platform with blockchain technology, smart contracts, and secure payments. Join the future of digital transactions.'
      },
      '/about-us': {
        title: 'About Beam Wallet - Digital Payment Innovation',
        description: 'Learn about Beam Wallet\'s mission to revolutionize digital payments with blockchain technology and smart contracts.'
      },
      '/careers': {
        title: 'Careers at Beam Wallet - Join Our Team',
        description: 'Explore exciting career opportunities at Beam Wallet. Join our innovative team and help shape the future of digital payments.'
      },
      '/news': {
        title: 'Beam Wallet News - Latest Updates',
        description: 'Stay updated with the latest news, announcements, and developments from Beam Wallet.'
      },
      '/help-center': {
        title: 'Beam Wallet Help Center - Support & FAQ',
        description: 'Get help and support for Beam Wallet. Find answers to frequently asked questions and troubleshooting guides.'
      },
      '/technology-partnerships': {
        title: 'Technology Partnerships - Beam Wallet',
        description: 'Discover our technology partnerships and how we collaborate with industry leaders to advance digital payment solutions.'
      },
      '/banks': {
        title: 'Banking Solutions - Beam Wallet',
        description: 'Learn about Beam Wallet\'s banking solutions and how we partner with financial institutions.'
      },
      '/software-partners': {
        title: 'Software Partners - Beam Wallet',
        description: 'Explore our software partnerships and integration opportunities with Beam Wallet.'
      },
      '/visionary-developers': {
        title: 'Visionary Developers - Beam Wallet',
        description: 'Join our community of visionary developers building the future of digital payments with Beam Wallet.'
      },
      '/local-partners': {
        title: 'Local Partners - Beam Wallet',
        description: 'Become a local partner with Beam Wallet and help bring digital payment solutions to your community.'
      },
      '/pay-in-store': {
        title: 'Pay in Store - Beam Wallet',
        description: 'Learn how to use Beam Wallet for in-store payments and discover participating merchants.'
      },
      '/pay-online': {
        title: 'Pay Online - Beam Wallet',
        description: 'Secure online payments with Beam Wallet. Fast, safe, and convenient digital transactions.'
      },
      '/local-store': {
        title: 'Get Beam for Your Business - Local Store',
        description: 'Integrate Beam Wallet into your business and offer your customers a better payment experience.'
      },
      '/investors': {
        title: 'Investors - Beam Wallet',
        description: 'Investment opportunities and information for potential investors in Beam Wallet\'s innovative platform.'
      },
      '/contacts': {
        title: 'Contact Beam Wallet - Get in Touch',
        description: 'Get in touch with Beam Wallet. Contact our team for support, partnerships, or general inquiries.'
      }
    };
    
    // Check for exact match first
    if (pageInfo[path]) {
      return pageInfo[path];
    }
    
    // Check for dynamic routes (like career pages)
    if (path.startsWith('/careers/')) {
      return {
        title: 'Career Opportunities - Beam Wallet',
        description: 'Explore career opportunities at Beam Wallet and join our innovative team.'
      };
    }
    
    // Default fallback
    return {
      title: 'Beam Wallet - Digital Payment Platform',
      description: 'Revolutionary digital wallet platform with blockchain technology and secure payments.'
    };
  };
  
  const pageInfo = getPageInfo();
  
  // Encode the text for URL sharing
  const encodedTitle = encodeURIComponent(pageInfo.title);
  const encodedDescription = encodeURIComponent(pageInfo.description);
  const encodedUrl = encodeURIComponent(currentUrl);

  // Social media sharing URLs
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };

  // Icon mapping
  const icons = {
    linkedin: 'fa-linkedin-in',
    twitter: 'fa-x-twitter',
    whatsapp: 'fa-whatsapp',
    facebook: 'fa-facebook-f',
    telegram: 'fa-telegram',
    email: 'fa-envelope'
  };

  // Platform labels
  const labels = {
    linkedin: 'Share on LinkedIn',
    twitter: 'Share on X (Twitter)',
    whatsapp: 'Share on WhatsApp',
    facebook: 'Share on Facebook',
    telegram: 'Share on Telegram',
    email: 'Share via Email'
  };

  const handleShare = (platform) => {
    if (platform === 'email') {
      window.location.href = shareUrls[platform];
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    // Close the expanded menu after sharing
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.pageShareContainer} ${isExpanded ? styles.expanded : ''}`}>
      {/* Main toggle button */}
      <button 
        className={styles.toggleButton}
        onClick={toggleExpanded}
        aria-label={isExpanded ? 'Close sharing options' : 'Open sharing options'}
        title={isExpanded ? 'Close sharing options' : 'Share this page'}
      >
        <i className={`fas ${isExpanded ? 'fa-times' : 'fa-share-alt'}`}></i>
      </button>

      {/* Expanded sharing options */}
      <div className={`${styles.shareOptions} ${isExpanded ? styles.show : ''}`}>
        <div className={styles.shareLabel}>Share</div>
        <div className={styles.shareButtons}>
          {Object.entries(shareUrls).map(([platform, url]) => (
            <button
              key={platform}
              className={`${styles.shareButton} ${styles[platform]}`}
              onClick={() => handleShare(platform)}
              title={labels[platform]}
              aria-label={labels[platform]}
            >
              <i className={`fab ${icons[platform]}`}></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageShare;
