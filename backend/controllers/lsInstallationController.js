const { sendNotificationEmail } = require('../services/emailService');
const config = require('../config');

// Simple text formatter for LS Installation data
const formatLsText = (data) => {
  return `
LS INSTALLATION

Installation submission:
Company Name: ${data.companyName || ''}
VAT Number: ${data.vatNumber || ''}
Address: ${data.address || ''}
Zip Code: ${data.zipCode || ''}
Business Phone: ${data.businessPhone || ''}
Business Email: ${data.businessEmail || ''}
Store Name: ${data.storeName || ''}
Business Sector: ${data.businessSector || ''}

Contact Person:
Name: ${data.contactName || ''} ${data.contactLastName || ''}
Email: ${data.contactEmail || ''}
Phone: ${data.contactPhone || ''}
Role: ${data.contactRole || ''}

Store App Info:
Public Email: ${data.publicEmail || ''}
Public Phone: ${data.publicPhone || ''}
Short Description: ${data.shortDescription || ''}
Cashback: ${data.cashbackPercentage || ''}%

Beam Wallet
`;
};

exports.handleLsSubmission = async (req, res) => {
  const formData = req.body;

  // Basic validation, need to add more validation
  const requiredFields = [
    'companyName', 'vatNumber', 'businessEmail', 
    'contactName', 'contactLastName', 'contactEmail'
  ];
  
  // Filter out empty or undefined fields
  const missingFields = requiredFields.filter(field => 
    !formData[field] || !formData[field].trim()
  );

  if (missingFields.length > 0) {
    return res.status(400).json({ 
      success: false,
      message: 'Missing required information. Please fill out all required fields.' 
    });
  }

  // Construct email body using the formatter
  // Send email to the recipient
  try {
    const recipient = config.lsInstallationEmailTo;
    const subject = `New Installation Request: ${formData.storeName || formData.companyName}`;
    const emailContent = formatLsText(formData);

    await sendNotificationEmail(recipient, subject, emailContent);
    
    res.status(200).json({ 
      success: true,
      message: 'Installation request submitted successfully!' 
    });

  } catch (error) {
    console.error('Installation submission error:', error);
    res.status(500).json({ 
      success: false,
      message: 'There was a problem with your request. Please try again.' 
    });
  }
}; 