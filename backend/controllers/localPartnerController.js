const { sendNotificationEmail } = require('../services/emailService');
const config = require('../config');

// Simple text formatter for Local Partner data
const formatLpText = (data) => {
  return `
LOCAL PARTNER APPLICATION

Personal Information:
Name: ${data.firstName || ''} ${data.lastName || ''}
Email: ${data.email || ''}
Phone: ${data.phoneNumber || ''}

Company Information:
Company Name: ${data.companyName || ''}
VAT: ${data.companyVAT || ''}
Address Line 1: ${data.addressLine1 || ''}
Address Line 2: ${data.addressLine2 || ''}
City: ${data.city || ''}
State: ${data.state || ''}
Zip Code: ${data.zipCode || ''}
Country: ${data.country || ''}

Beam Wallet
`;
};

exports.handleLpSubmission = async (req, res) => {
  const formData = req.body;

  // Basic validation
  const requiredFields = [
    'firstName', 'lastName', 'email', 'phoneNumber',
    'companyName', 'companyVAT', 'addressLine1', 'city', 'country'
  ];
  
  // Filter out empty or undefined fields
  const missingFields = requiredFields.filter(field => 
    !formData[field] || !formData[field].trim()
  );

  if (missingFields.length > 0) {
    return res.status(400).json({ 
      success: false,
      message: 'Missing required information. Please fill out all required fields.',
      fields: missingFields
    });
  }

  // Check for terms agreement
  if (!formData.termsAgreed) {
    return res.status(400).json({
      success: false,
      message: 'You must agree to the terms and conditions.'
    });
  }

  // Construct email body using the formatter
  // Send email to the recipient
  try {
    // We'll use the localPartnerEmailTo from config, or fall back to the local partner email
    const recipient = config.localPartnerEmailTo || 'localpartner@beamwallet.com';
    const subject = `New Local Partner Application: ${formData.firstName} ${formData.lastName}`;
    const emailContent = formatLpText(formData);

    await sendNotificationEmail(recipient, subject, emailContent);
    
    res.status(200).json({ 
      success: true,
      message: 'Local Partner application submitted successfully!' 
    });

  } catch (error) {
    console.error('Local Partner submission error:', error);
    res.status(500).json({ 
      success: false,
      message: 'There was a problem with your request. Please try again.' 
    });
  }
}; 