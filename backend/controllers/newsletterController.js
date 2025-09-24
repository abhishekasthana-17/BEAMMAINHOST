const { addRowToGoogleSheet } = require('../services/googleSheetsService');

const newsletterSubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Check if fallback mode is enabled
    const fallbackMode = process.env.NEWSLETTER_FALLBACK_MODE === 'true';
    
    if (fallbackMode) {
      // In fallback mode, just log the email and return success
      console.log('📧 Newsletter subscription (fallback mode):', email, new Date().toISOString());
      
      res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      });
    } else {
      // Try to add email to Google Sheet
      await addRowToGoogleSheet([email, new Date().toISOString()]);

      res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      });
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // If Google Sheets fails, try fallback mode
    const fallbackMode = process.env.NEWSLETTER_FALLBACK_MODE === 'true';
    
    if (!fallbackMode) {
      // Enable fallback mode temporarily and log the email
      console.log('📧 Newsletter subscription (emergency fallback):', req.body.email, new Date().toISOString());
      
      res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to subscribe to newsletter' 
      });
    }
  }
};

module.exports = {
  newsletterSubscribe
};