# BEAM Wallet Project - Complete Setup Guide

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Running the Project](#running-the-project)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Development Notes](#development-notes)

## 🚀 Project Overview

BEAM Wallet is a full-stack web application consisting of three main components:
- **Frontend**: React.js application built with Vite
- **Backend**: Node.js/Express API server
- **CMS**: Strapi headless CMS for content management

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed:

### Required Software
- **Node.js**: Version 18.0.0 or higher (≤22.x.x)
- **npm**: Version 6.0.0 or higher
- **Git**: For version control

### Required Services
- **Google Sheets API**: For newsletter subscriptions
- **Postmark Account**: For email services
- **PostgreSQL Database**: For CMS data storage (optional, SQLite included)
- **AWS S3**: For file uploads (optional)

## 📁 Project Structure

```
BeamSourceCode/
├── backend/                 # Node.js API Server
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── routes/             # API routes
│   ├── services/           # Business logic services
│   ├── utils/              # Utility functions
│   ├── .env                # Environment variables
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
├── frontend/               # React.js Application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Static assets
│   │   └── utils/          # Utility functions
│   ├── .env                # Frontend environment variables
│   ├── .env.local          # Local environment overrides
│   └── package.json        # Frontend dependencies
├── Beam-CMS/               # Strapi CMS
│   ├── config/             # Strapi configuration
│   ├── src/                # CMS customizations
│   └── package.json        # CMS dependencies
└── READMEFILE.md           # This file
```

## 🛠 Installation & Setup

### 1. Get the Project Files

#### Option A: Clone from Git Repository
```bash
git clone <repository-url>
cd BeamSourceCode
```

#### Option B: Setup from Local Files
If you have the project files on your local computer:

```bash
# If you have a ZIP file, extract it first
unzip BeamSourceCode.zip

# Navigate to the project directory
cd BeamSourceCode

# Initialize git repository (optional, for version control)
git init

# Add all files to git (optional)
git add .
git commit -m "Initial commit"
```

**Note**: If you're working with local files, ensure you have all the necessary folders:
- `backend/` - Node.js API server
- `frontend/` - React.js application  
- `Beam-CMS/` - Strapi CMS (optional)
- Environment files (`.env`, `.env.local`)

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file (copy from template below)
cp .env.example .env  # If available, or create manually

# Install nodemon globally for development (optional)
npm install -g nodemon
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create environment files
touch .env
touch .env.local
```

### 4. CMS Setup (Optional)
```bash
# Navigate to CMS directory
cd ../Beam-CMS

# Install dependencies
npm install

# Build the admin panel
npm run build
```

## ⚙️ Environment Configuration

### Backend Environment Variables (.env)
Create `/backend/.env` with the following variables:

```env
# Server Configuration
PORT=3001

# Email Configuration
POSTMARK_API_KEY=your_postmark_api_key_here
APPLICATION_EMAIL_TO=hr@beamwallet.com
CAREER_APPLICATION_EMAIL_TO=hr@beamwallet.com

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Google Sheets Integration
GOOGLE_APPS_SCRIPT_WEBAPP_URL=your_google_apps_script_url_here

# Database (if using PostgreSQL)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=beam_wallet
DB_USER=your_db_user
DB_PASSWORD=your_db_password

# AWS S3 (if using file uploads)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET=your_s3_bucket_name
```

### Frontend Environment Variables (.env)
Create `/frontend/.env` with:

```env
# API Configuration
VITE_API_URL=http://localhost:5173
VITE_NEWSLETTER_API_URL=http://localhost:3001
```

### Frontend Local Environment (.env.local)
Create `/frontend/.env.local` with:

```env
# Strapi CMS URL
VITE_STRAPI_URL=https://strapi.beamwallet.com
```

### Google Sheets Setup
1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create a Service Account
4. Download the credentials JSON file
5. Place it at `/backend/utils/newsletter-credentials.json`
6. Share your Google Sheet with the service account email

## 🚀 Running the Project

### Development Mode

#### 1. Start Backend Server
```bash
cd backend

# Using npm start
npm start

# OR using nodemon for auto-restart
npm run dev
```
Backend will run on: `http://localhost:3001`

#### 2. Start Frontend Development Server
```bash
cd frontend

# Start Vite dev server
npm run dev
```
Frontend will run on: `http://localhost:5173` (or next available port)

#### 3. Start CMS (Optional)
```bash
cd Beam-CMS

# Development mode
npm run develop

# OR production mode
npm run start
```
CMS will run on: `http://localhost:1337`

### Production Mode

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Start Production Servers
```bash
# Backend
cd backend
npm start

# CMS
cd Beam-CMS
npm run build
npm start
```

## ✨ Features

### Frontend Features
- **Newsletter Subscription**: Email collection with category selection
- **Contact Forms**: Various contact and application forms
- **Responsive Design**: Mobile-friendly interface
- **SEO Optimized**: Meta tags and sitemap generation
- **Content Management**: Integration with Strapi CMS

### Backend Features
- **RESTful API**: Express.js based API
- **Email Services**: Postmark integration for notifications
- **Google Sheets Integration**: Automatic data logging
- **File Uploads**: AWS S3 integration
- **CORS Support**: Cross-origin resource sharing
- **Input Validation**: Request validation middleware

### CMS Features
- **Content Management**: Strapi headless CMS
- **User Management**: Built-in authentication
- **Media Library**: File and image management
- **API Generation**: Automatic REST API creation

## 🔌 API Endpoints

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
  ```json
  {
    "email": "user@example.com",
    "category": "Technology"
  }
  ```

### Contact
- `POST /api/contact` - Submit contact form
- `POST /api/apply` - Submit job application
- `POST /api/investor` - Submit investor inquiry

### Installations
- `POST /api/ls-installation` - LS installation request
- `POST /api/os-installation` - OS installation request

### Other
- `POST /api/consent` - Privacy consent
- `POST /api/career` - Career application

## 🔧 Troubleshooting

### Common Issues

#### 1. Newsletter Subscription Fails
**Problem**: "Subscription failed" error
**Solutions**:
- Check if backend server is running on port 3001
- Verify `VITE_NEWSLETTER_API_URL` in frontend `.env`
- Ensure Google Sheets credentials are properly configured
- Check browser network tab for actual error details

#### 2. Port Already in Use
**Problem**: `EADDRINUSE` error
**Solutions**:
```bash
# Find process using port
lsof -i :3001  # or :5173 for frontend

# Kill process
kill -9 <PID>

# Or use different port in .env file
```

#### 3. Environment Variables Not Loading
**Problem**: Configuration not working
**Solutions**:
- Restart development servers after changing `.env` files
- Check file names (`.env` not `.env.txt`)
- Verify environment variables are prefixed with `VITE_` for frontend

#### 4. Google Sheets Integration Issues
**Problem**: Data not saving to sheets
**Solutions**:
- Verify service account credentials file exists
- Check Google Sheet is shared with service account email
- Ensure Google Sheets API is enabled in Google Cloud Console

#### 5. CMS Connection Issues
**Problem**: Frontend can't connect to Strapi
**Solutions**:
- Check `VITE_STRAPI_URL` in `.env.local`
- Verify Strapi server is running
- Check CORS configuration in Strapi

### Development Tips

#### Hot Reload Issues
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Restart development servers
- Check for JavaScript errors in browser console

#### Database Issues
- For SQLite: Delete `Beam-CMS/.tmp` folder and restart
- For PostgreSQL: Check connection credentials and database exists

#### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
npm run build -- --force
```

## 📝 Development Notes

### Key Dependencies
- **Backend**: Express.js, Google APIs, Postmark, AWS SDK
- **Frontend**: React 19, Vite, React Router, Axios
- **CMS**: Strapi 5.x, PostgreSQL/SQLite

### File Structure Notes
- Newsletter credentials: `/backend/utils/newsletter-credentials.json`
- SSL certificates: `/backend/ssl/` (for HTTPS)
- Static assets: `/frontend/public/`
- Build output: `/frontend/dist/`

### Security Considerations
- Never commit `.env` files to version control
- Use environment variables for all sensitive data
- Regularly update dependencies for security patches
- Implement proper input validation and sanitization

### Performance Tips
- Use `npm run build` for production builds
- Optimize images and assets
- Implement proper caching strategies
- Monitor bundle sizes with build tools

---

## 📞 Support

For issues or questions:
1. Check this README first
2. Review the troubleshooting section
3. Check browser console for errors
4. Verify all environment variables are set correctly
5. Ensure all services (Google Sheets, Postmark) are properly configured

---

**Last Updated**: January 2025
**Version**: 1.0.0