// Email template utilities

/**
 * Email templates with placeholders
 * Placeholders are in the format \\\PLACEHOLDER_NAME\\\
 * These will be replaced with actual values when sending emails
 * STILL NEED TO IMPROVE THIS
 * - Add more templates for other forms
 * - Add HTML templates
 */
const templates = {
  // Contact form confirmation to user
  contactConfirmation: `
Thank You for Contacting Us

Dear \\\FIRST_NAME\\\,

We have received your message and will get back to you as soon as possible.

Best regards,
The BEAM Wallet Team
  `,
  
  // Contact form notification to team
  contactNotification: `
CONTACT

New Contact Form Submission:
Name: \\\FULL_NAME\\\
Email: \\\EMAIL\\\
Subject: \\\SUBJECT\\\

Message:
\\\MESSAGE\\\

Beam Wallet
  `,
};

/**
 * Replaces placeholders in a template with actual values
 * @param {string} templateName - Name of the template to use
 * @param {object} replacements - Object with keys matching placeholder names and values to replace them with
 * @returns {string} - Processed template with replacements
 */
const processTemplate = (templateName, replacements) => {
  if (!templates[templateName]) {
    throw new Error(`Template "${templateName}" not found`);
  }
  
  let content = templates[templateName];
  
  // Replace each placeholder with its value
  for (const [key, value] of Object.entries(replacements)) {
    const placeholder = `\\\\\\${key}\\\\\\`;
    content = content.replace(new RegExp(placeholder, 'g'), value || '');
  }
  
  return content;
};

module.exports = {
  processTemplate,
  templates
}; 