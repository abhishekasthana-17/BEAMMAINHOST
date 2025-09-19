// Controller for contact form functionality
const { sendNotificationEmail } = require('../services/emailService');
const { processTemplate } = require('../utils/templates');
const config = require('../config');

// Simple text formatter for contact form data
const formatContactText = (data) => {
  return `
CONTACT

Contact Form Submission:
Subject: ${data.subject || ''}
First Name: ${data.firstName || ''}
Last Name: ${data.lastName || ''}
Email: ${data.email || ''}

Message:
${data.message || ''}

Agreed to Terms: ${data.termsAgreed ? 'Yes' : 'No'}
Consent Given: ${data.consentGiven ? 'Yes' : 'No'}

Beam Wallet
`;
};

// Handle contact form submissions
const submitContactForm = async (req, res) => {
  try {
    // Form data already validated by middleware
    const formData = req.body;
    
   
    
    // Get the destination email based on the selected subject
    const destinationEmail = config.subjectToEmail[formData.subject] || 'support@beamwallet.com';
    
    // Use direct text formatting instead of template for debugging
    const emailContent = formatContactText(formData);
    
    // Send email notification - use the specific subject as the from address to avoid duplicate emails
    // This prevents participate@beamwallet.com from receiving copies of every email
    await sendNotificationEmail(
      destinationEmail,
      `New ${formData.subject} Form Submission`,
      emailContent,
      [], // No attachments
      destinationEmail // Use the destination email as the FROM email to prevent duplicates
    );
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'There was an error sending your message. Please try again.' 
    });
  }
};

module.exports = {
  submitContactForm
}; 