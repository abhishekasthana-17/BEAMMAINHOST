// This file checks if data from the contact form is valid before processing it
// It acts like a security guard for your form submissions
const config = require('../config');

// This function checks if the form data is valid and collects any errors
// Returns an array of error messages (empty array = no errors)
const validateContactForm = (data) => {
  // Store all error messages in this array
  const errors = [];
  
  // Check that all required fields have values
  const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message', 'termsAgreed', 'consentGiven'];
  requiredFields.forEach(field => {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      errors.push(`${field} is required`);
    }
  });
  
  // Make sure email looks like a real email address (has @ symbol and domain)
  if (data.email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  // Check that user agreed to terms and conditions (checkbox must be checked)
  if (data.termsAgreed !== true) {
    errors.push('You must agree to the terms and conditions');
  }
  
  // Check that user provided consent to store their information
  if (data.consentGiven !== true) {
    errors.push('You must provide consent to store your information');
  }
  
  // Make sure message isn't too long (prevents abuse)
  if (data.message && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }
  
  // Check if the selected subject is one of our valid options
  if (data.subject && !Object.keys(config.subjectToEmail).includes(data.subject) && data.subject !== 'Support') {
    errors.push('Invalid subject selection');
  }
  
  // Check if name is too long or contains invalid characters
  if (data.firstName && (data.firstName.length > 30 || /[<>]/.test(data.firstName))) {
    errors.push('First name is invalid or too long');
  }
  
  if (data.lastName && (data.lastName.length > 30 || /[<>]/.test(data.lastName))) {
    errors.push('Last name is invalid or too long');
  }
  
  // Return all error messages (empty array if everything is valid)
  return errors;
};

// Express middleware function that runs validation and stops the request
// if there are any errors, otherwise lets it continue to the next step
// This is for the CONTACT form
const contactFormValidator = (req, res, next) => {
  // Check the form data for any errors
  const validationErrors = validateContactForm(req.body);
  
  // If we found errors, stop processing and return the errors to the user
  if (validationErrors.length > 0) {
    return res.status(400).json({ 
      success: false, 
      message: 'Validation failed', 
      errors: validationErrors 
    });
  }
  
  // If everything is valid, continue to the next middleware or controller
  next();
};

// Export these functions so other files can use them
module.exports = {
  contactFormValidator,
  validateContactForm
}; 