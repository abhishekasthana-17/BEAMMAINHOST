const { sendNotificationEmail } = require('../services/emailService');
const config = require('../config');

// Simple text formatter for OS Installation data
const formatOsText = (data) => {
  return `
OS INSTALLATION

New Online Store (OS) Installation Request:

1. Identification
Contact Person:
First Name: ${data.responsiblePersonFirstName || ''}
Last Name: ${data.responsiblePersonLastName || ''}

Company:
Legal Name: ${data.legalName || ''}
VAT ID: ${data.vatId || ''}
Contact Phone: ${data.companyContactPhone || ''}
Contact Email: ${data.companyContactEmail || ''}
Address: ${data.addressLine1 || ''} ${data.addressLine2 ? data.addressLine2 : ''}
City: ${data.city || ''}
State: ${data.state || ''}
Zip Code: ${data.zipCode || ''}
Country: ${data.country || ''}


Public Name: ${data.publicName || ''}
Public Email: ${data.publicEmail || ''}
Public Phone/Mobile: ${data.publicPhoneMobile || ''}
Short Description: ${data.shortDescription || ''}
Long Description: ${data.longDescription || ''}
Facebook: ${data.facebook || ''}
Instagram: ${data.instagram || ''}
Other Social: ${data.otherSocial || ''}

Store Website: ${data.storeWebsite || ''}
Online Store Platform: ${data.onlineStorePlatform || ''}
Cashback Percentage: ${data.cashbackPercentage || ''}%

Information for Settlements:
Bank Name: ${data.bankName || ''}
IBAN: ${data.iban || ''}
Swift Code: ${data.swiftCode || ''}

Agreed to Terms: ${data.termsAgreed === 'true' || data.termsAgreed === true ? 'Yes' : 'No'}

Beam Wallet
`;
};

// need to add terms and conditions to other forms

// Function to handle OS Installation form submission
exports.handleOsSubmission = async (req, res) => {
  const formData = req.body;

  // Basic validation
  const requiredFields = [
    'responsiblePersonFirstName', 'responsiblePersonLastName', 'legalName', 'vatId', 
    'companyContactPhone', 'companyContactEmail', 'addressLine1', 'city', 'zipCode', 'country',
    'publicName', 'publicEmail', 'publicPhoneMobile', 'shortDescription', 
    'storeWebsite', 'onlineStorePlatform', 'cashbackPercentage', 'bankName', 'iban', 'swiftCode', 'termsAgreed'
  ];
   const missingFields = requiredFields.filter(field => 
    field === 'termsAgreed' ? !formData[field] : !formData[field] || !formData[field].trim()
  );

  if (missingFields.length > 0) {
    return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
  }

  // Send email to the recipient
  try {
    const recipient = config.osInstallationEmailTo;
    const subject = `New OS Installation Request: ${formData.publicName || formData.legalName}`;
    const emailContent = formatOsText(formData);

    await sendNotificationEmail(recipient, subject, emailContent);
    
    // Return success response
    res.status(200).json({ message: 'OS Installation request submitted successfully!' });

  } catch (error) {
    console.error('Error handling OS Installation submission:', error);
    res.status(500).json({ message: 'Failed to submit OS Installation request.' });
  }
}; 