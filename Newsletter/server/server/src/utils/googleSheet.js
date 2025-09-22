import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "./src/utils/credentials.json", // your service account JSON
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

console.log("Google Sheets API initialized");

const sheets = google.sheets({ version: "v4", auth });

// Your Google Sheet ID (from URL)
const spreadsheetId = "1lDcf6yE1tdO226tO1HmoQWH8E-LDWcjwUHDMJMqLnUA";

console.log("Spreadsheet ID:", spreadsheetId);

export async function addRow(email, category) {

    const values = [
        [email, category, new Date().toISOString()]
    ];

    console.log("Adding row with values:", values);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A1",
    valueInputOption: "RAW",
    requestBody: {
      values: values,
    },
  });
  console.log("✅ Row added to Google Sheet");
}
