// Generic email service
const axios = require('axios');
const config = require('../config');
const { processTemplate, replaceInHtmlFile } = require('../utils/templates');

/*
 * Sends an email using Postmark API.
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} content - Email content (text)
 * @param {Array} attachments - Optional attachments
 * @param {string} customFrom - Optional custom from address to prevent duplicate emails
 */
const sendNotificationEmail = async (to, subject, content, attachments = [], customFrom = null) => {
  try {
   
    // Convert attachments to Postmark format if any exist
    const postmarkAttachments = attachments.map(attachment => ({
      Name: attachment.filename,
      Content: attachment.content.toString('base64'),
      ContentType: attachment.contentType,
      ContentID: `cid:${attachment.filename}`
    }));

    // Use custom from email if provided, otherwise use default
    const fromEmail = customFrom || config.postmark.fromEmail;

    const response = await axios.post(config.postmark.apiUrl, {
      From: fromEmail,
      To: to,
      Subject: subject,
      TextBody: content,
      Attachments: postmarkAttachments.length > 0 ? postmarkAttachments : undefined
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': config.postmark.apiKey,
      }
    });
    
   
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error.message);
    if (error.response) {
      console.error('Postmark API response:', error.response.data);
      console.error('Status code:', error.response.status);
    }
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

/*
 * Sends an HTML email using Postmark API with template processing.
 * @param {Object} data - Email data object
 * @param {string} data.destination.email - Recipient email address
 * @param {string} data.subject - Email subject
 * @param {string} data.template - HTML template name or content
 * @param {Object} templateData - Data to replace in template placeholders
 * @param {string} customFrom - Optional custom from address
 */
const sendHtmlEmail = async (data, templateData = {}, customFrom = null) => {
  try {
    // Use custom from email if provided, otherwise use default
    const fromEmail = customFrom || config.postmark.fromEmail;

    // Process HTML template with replacements
    const htmlBody = await replaceInHtmlFile(data.template, templateData);

    const emailData = {
      From: fromEmail,
      To: data.destination.email,
      Subject: data.subject,
      HtmlBody: htmlBody,
      TextBody: '', // Optional, plain text version
    };

    const response = await axios.post(config.postmark.apiUrl, emailData, {
      headers: {
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': config.postmark.apiKey
      }
    });

    console.log('HTML Email sent:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error sending HTML email:', error.response.data);
      console.error('Status code:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error sending HTML email:', error.message);
    }
    throw new Error(`Failed to send HTML email: ${error.message}`);
  }
};

module.exports = {
  sendNotificationEmail,
  sendHtmlEmail
};