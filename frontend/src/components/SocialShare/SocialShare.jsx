import React from 'react';
import styles from './SocialShare.module.css';

const SocialShare = ({ 
  url, 
  title, 
  description = '', 
  platforms = ['linkedin', 'twitter', 'whatsapp', 'facebook'],
  size = 'medium' // small, medium, large
}) => {
  // Get the full URL for sharing
  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
  
  // Encode the text for URL sharing
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(fullUrl);

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
  };

  return (
    <div className={`${styles.socialShare} ${styles[size]}`}>
      <span className={styles.shareLabel}>Share:</span>
      <div className={styles.shareButtons}>
        {platforms.map((platform) => (
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
  );
};

export default SocialShare;

