const { addRowToGoogleSheet } = require('../services/googleSheetsService');

const newsletterSubscribe = async (req, res) => {
  try {
    const { email, category } = req.body;

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

    // Add email and category to Google Sheet
    await addRowToGoogleSheet([email, category || 'Not specified', new Date().toISOString()]);

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe to newsletter' 
    });
  }
};

module.exports = {
  newsletterSubscribe
};