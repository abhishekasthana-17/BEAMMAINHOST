// Controller for contact form functionality
const { sendNotificationEmail, sendHtmlEmail } = require('../services/emailService');
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
    
    // Send HTML email notification using the new service
    const emailData = {
      destination: {
        email: destinationEmail
      },
      subject: `New ${formData.subject} Form Submission`,
      template: 'contact-notification.html'
    };

    const templateData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toLocaleString()
    };

    // Send HTML email notification
    await sendHtmlEmail(emailData, templateData, destinationEmail);
    
    // Send confirmation email to the user
    const confirmationData = {
      destination: {
        email: formData.email
      },
      subject: 'Thank you for contacting us',
      template: 'contact-confirmation.html'
    };

    const confirmationTemplateData = {
      name: formData.firstName,
      subject: formData.subject,
      message: formData.message
    };

    await sendHtmlEmail(confirmationData, confirmationTemplateData);
    
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