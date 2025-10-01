const axios = require('axios');
const config = require('../config');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

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

// Helper: Load service account credentials from env (JSON string, base64, or file path), or fallback file
const loadServiceAccountCredentials = () => {
  const envVar = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const fallbackPath = path.join(__dirname, '../utils/newsletter-credentials.json');

  // Try environment variable first
  if (envVar && envVar.trim().length > 0) {
    let raw = envVar.trim();
    try {
      // Remove backticks, strip surrounding quotes, and convert escaped newlines
      raw = raw.replace(/`/g, '').replace(/\\n/g, '\n');
      if ((raw.startsWith("'") && raw.endsWith("'")) || (raw.startsWith('"') && raw.endsWith('"'))) {
        raw = raw.slice(1, -1);
      }
      // Heuristic: file path
      if (raw.endsWith('.json') || raw.startsWith('/') || raw.startsWith('./')) {
        const resolved = path.isAbsolute(raw) ? raw : path.join(process.cwd(), raw);
        if (!fs.existsSync(resolved)) {
          throw new Error(`Credentials file path provided in GOOGLE_SERVICE_ACCOUNT_JSON does not exist: ${resolved}`);
        }
        const fileContent = fs.readFileSync(resolved, 'utf8');
        const parsed = JSON.parse(fileContent);
        if (parsed.private_key && typeof parsed.private_key === 'string') {
          parsed.private_key = parsed.private_key.replace(/\\n/g, '\n');
        }
        console.log(`Using credentials from file path provided in env: ${resolved}`);
        return parsed;
      }

      // Try direct JSON parse
      const parsedJson = JSON.parse(raw);
      if (parsedJson.private_key && typeof parsedJson.private_key === 'string') {
        parsedJson.private_key = parsedJson.private_key.replace(/\\n/g, '\n');
      }
      console.log('Using GOOGLE_SERVICE_ACCOUNT_JSON (JSON string) from environment for Sheets auth');
      return parsedJson;
    } catch (jsonErr) {
      // Try base64 decode
      try {
        const decoded = Buffer.from(raw, 'base64').toString('utf8');
        const parsedB64 = JSON.parse(decoded);
        if (parsedB64.private_key && typeof parsedB64.private_key === 'string') {
          parsedB64.private_key = parsedB64.private_key.replace(/\\n/g, '\n');
        }
        console.log('Detected base64-encoded GOOGLE_SERVICE_ACCOUNT_JSON; decoded successfully');
        return parsedB64;
      } catch (b64Err) {
        console.error('Invalid GOOGLE_SERVICE_ACCOUNT_JSON provided in environment:', jsonErr.message);
      }
    }
  }

  // Fallback to bundled file
  if (!fs.existsSync(fallbackPath)) {
    throw new Error(`Credentials file not found at ${fallbackPath}. Provide GOOGLE_SERVICE_ACCOUNT_JSON or create the file.`);
  }
  const fileContent = fs.readFileSync(fallbackPath, 'utf8');
  const parsed = JSON.parse(fileContent);
  if (parsed.private_key && typeof parsed.private_key === 'string') {
    parsed.private_key = parsed.private_key.replace(/\\n/g, '\n');
  }
  console.log(`Using credentials file at ${fallbackPath} for Sheets auth`);
  return parsed;
};

// Optional Apps Script fallback for newsletter
const pushNewsletterFallback = async (values) => {
  const url = process.env.GOOGLE_APPS_SCRIPT_WEBAPP_URL || config.google?.appsScriptWebAppUrl;
  if (!url) return false;
  try {
    await axios.post(url, { type: 'newsletter', values }, { headers: { 'Content-Type': 'application/json' } });
    console.log('✅ Newsletter row forwarded to Apps Script fallback');
    return true;
  } catch (err) {
    console.error('Apps Script fallback failed:', err.response?.data || err.message);
    return false;
  }
};

// Newsletter Google Sheets integration
const addRowToGoogleSheet = async (values) => {
  try {
    // Load credentials from env (JSON/base64/path) or fallback file
    const credentials = loadServiceAccountCredentials();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Sanitize and log spreadsheet ID
    const rawSpreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const spreadsheetId = rawSpreadsheetId
      ? rawSpreadsheetId.trim().replace(/^['"`]+|['"`]+$/g, '')
      : '1JNNj9gv3CSIlCkkthdbffmginbrd_cVQpcKCAzrQrc8';

    // Sanitize and log range from env
    const rawRange = process.env.GOOGLE_SHEETS_RANGE;
    console.log('[Sheets] Raw env GOOGLE_SHEETS_RANGE:', rawRange);
    const sanitizedRange = rawRange ? rawRange.trim().replace(/^['"`]+|['"`]+$/g, '') : '';
    console.log(`[Sheets] Sanitized env range: ${sanitizedRange || '(empty)'}`);

    // Resolve range: use env if provided; otherwise, detect first sheet title and default to A:B
    let range = sanitizedRange;
    if (!range || !range.trim()) {
      try {
        const meta = await sheets.spreadsheets.get({
          spreadsheetId,
          fields: 'sheets.properties',
        });
        const firstTitle = meta.data?.sheets?.[0]?.properties?.title;
        if (firstTitle && typeof firstTitle === 'string') {
          range = `${firstTitle}!A:B`;
          console.log(`Detected first sheet title: ${firstTitle}. Using range: ${range}`);
        } else {
          range = 'A:B';
          console.warn('Could not detect sheet title; defaulting range to A:B');
        }
      } catch (e) {
        range = 'A:B';
        console.warn(`Failed to fetch spreadsheet metadata (${e.message}). Defaulting range to A:B`);
      }
    } else {
      console.log(`Using env-provided range: ${range}`);
    }

    console.log(`[Sheets] Final request target => Spreadsheet: ${spreadsheetId}, Range: ${range}`);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values: [values] },
    });

    console.log('✅ Row added to Google Sheet');
  } catch (error) {
    console.error('❌ Error adding row to Google Sheet:', error.message || error);
    // Try Apps Script fallback if configured
    const sent = await pushNewsletterFallback(values);
    if (sent) return; // treat fallback success as success
    throw error;
  }
};

module.exports = { pushCareerApplication, addRowToGoogleSheet };


