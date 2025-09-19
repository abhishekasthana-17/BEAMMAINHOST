const { sendNotificationEmail } = require('../services/emailService');
const config = require('../config');

// Simple text formatter for Career Application data
const formatCareerApplicationText = (data) => {
  return `
CAREER APPLICATION

New Career Application:

Full Name: ${data.firstName || ''} ${data.lastName || ''}
Country: ${data.country || ''}
Email: ${data.email || ''}

Beam Wallet
`;
};

exports.handleCareerApplication = async (req, res) => {
  const formData = req.body;

  // Basic validation
  const requiredFields = ['firstName', 'lastName', 'country', 'email'];
  
  // Filter out empty or undefined fields, verify if all required fields are filled
  const missingFields = requiredFields.filter(field => 
    !formData[field] || !formData[field].trim()
  );

  if (missingFields.length > 0) {
    return res.status(400).json({ 
      success: false,
      message: 'Missing required information. Please fill out all required fields.' 
    });
  }

  // Send email to the recipient
  try {
    const recipient = config.careerApplicationEmailTo;
    const subject = `New Career Application: ${formData.firstName} ${formData.lastName}`;
    const emailContent = formatCareerApplicationText(formData);

    await sendNotificationEmail(recipient, subject, emailContent);
    
    res.status(200).json({ 
      success: true,
      message: 'Application submitted successfully!' 
    });

  } catch (error) {
    console.error('Career application submission error:', error);
    res.status(500).json({ 
      success: false,
      message: 'There was a problem with your request. Please try again.' 
    });
  }
}; 