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
    // Always attempt to add email to Google Sheet
    await addRowToGoogleSheet([email, new Date().toISOString()]);

    // Return success ONLY if the write succeeded
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    // Signal failure when the Google Sheets write does not succeed
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe to newsletter' 
    });
  }
};

module.exports = {
  newsletterSubscribe
};