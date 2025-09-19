const axios = require('axios');
const config = require('../config');

/*
  This service forwards application data to a Google Apps Script Web App
  (deployed as "Anyone with the link"). The script writes to Google Sheets.

  Configure env var GOOGLE_APPS_SCRIPT_WEBAPP_URL with the deployment URL.
*/

const pushCareerApplication = async (payload) => {
  const url = process.env.GOOGLE_APPS_SCRIPT_WEBAPP_URL || config.google?.appsScriptWebAppUrl;
  if (!url) return; // silently skip if not configured

  try {
    await axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Google Sheets push failed:', err.response?.data || err.message);
  }
};

module.exports = { pushCareerApplication };


