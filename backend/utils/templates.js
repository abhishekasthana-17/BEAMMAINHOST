const fs = require('fs');
const path = require('path');

// Email templates
const templates = {
  contactFormConfirmation: `
    Thank you for contacting us!
    
    We have received your message and will get back to you within 24 hours.
    
    Your message:
    Subject: {{subject}}
    Message: {{message}}
    
    Best regards,
    The Team
  `,
  
  contactFormNotification: `
    New Contact Form Submission
    
    From: {{name}} ({{email}})
    Subject: {{subject}}
    
    Message:
    {{message}}
    
    Submitted at: {{timestamp}}
  `
};

// Process template with data
const processTemplate = (templateName, data) => {
  let template = templates[templateName];
  if (!template) {
    throw new Error(`Template ${templateName} not found`);
  }
  
  // Replace placeholders with actual data
  Object.keys(data).forEach(key => {
    const placeholder = `{{${key}}}`;
    template = template.replace(new RegExp(placeholder, 'g'), data[key] || '');
  });
  
  return template;
};

/*
 * Replaces placeholders in HTML file or content with provided data
 * @param {string} templatePath - Path to HTML file or direct HTML content
 * @param {Object} data - Data to replace placeholders with
 * @returns {string} - Processed HTML content
 */
const replaceInHtmlFile = async (templatePath, data = {}) => {
  try {
    let htmlContent;
    
    // Check if templatePath is a file path or direct HTML content
    if (templatePath.includes('<html') || templatePath.includes('<!DOCTYPE')) {
      // Direct HTML content
      htmlContent = templatePath;
    } else {
      // File path - read from file system
      const fullPath = path.isAbsolute(templatePath) 
        ? templatePath 
        : path.join(__dirname, '..', 'templates', templatePath);
      
      htmlContent = fs.readFileSync(fullPath, 'utf8');
    }
    
    // Replace placeholders with actual data
    Object.keys(data).forEach(key => {
      const placeholder = new RegExp(`{{${key}}}`, 'g');
      htmlContent = htmlContent.replace(placeholder, data[key] || '');
    });
    
    return htmlContent;
  } catch (error) {
    console.error('Error processing HTML template:', error.message);
    throw new Error(`Failed to process HTML template: ${error.message}`);
  }
};

module.exports = {
  processTemplate,
  replaceInHtmlFile
};