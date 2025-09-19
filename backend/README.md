# BEAM Wallet Backend

This is the backend API for the BEAM Wallet website, which handles contact form submissions using the Postmark email API.

## Setup

1. Install dependencies:

```
npm install
```

2. Create a `.env` file in the root directory using the `.env.example` as a template:

```
# Server Configuration
PORT=3001

# Postmark API Configuration
POSTMARK_API_KEY=your_postmark_api_key_here

# CORS Configuration (Frontend URL)
FRONTEND_URL=https://www.beamwallet.com
```

3. Replace `your_postmark_api_key_here` with your actual Postmark API key.

## Running the Server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

## API Endpoints

### Contact Form Submission

`POST /api/contact`

Request Body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "subject": "Support",
  "message": "Hello, I need help with..."
}
```

Response:

```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

## Email Routing

The backend routes emails to different addresses based on the subject:

- General Information: info@beamwallet.com
- Investors: investors@beamwallet.com
- Local Partners: partners@beamwallet.com
- Recruiting: careers@beamwallet.com
- Support: support@beamwallet.com

Each submission sends two emails:

1. The form data to the appropriate department email
2. A confirmation email to the user who submitted the form
