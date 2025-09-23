# Deploying Beam CMS (Strapi) to Render

This guide will help you deploy your Strapi CMS to Render's free tier.

## Prerequisites

1. A Render account (sign up at [render.com](https://render.com))
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect Your Repository

1. Go to your [Render Dashboard](https://dashboard.render.com)
2. Click "New +" and select "Web Service"
3. Connect your Git repository containing the Beam-CMS folder
4. Select the repository and branch

### 2. Configure the Web Service

**Basic Settings:**
- **Name**: `beam-cms-strapi` (or your preferred name)
- **Root Directory**: `Beam-CMS`
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)

**Build & Deploy Settings:**
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### 3. Set Up PostgreSQL Database

1. In your Render dashboard, click "New +" and select "PostgreSQL"
2. **Database Name**: `beam-cms-postgres`
3. **Database**: `beam_cms`
4. **User**: `beam_cms_user`
5. **Region**: Same as your web service
6. **Plan**: Free
7. Click "Create Database"

### 4. Configure Environment Variables

In your web service settings, add these environment variables:

**Required Variables:**
```
NODE_ENV=production
HOST=0.0.0.0
PORT=10000
DATABASE_CLIENT=postgres
DATABASE_URL=[Your PostgreSQL Internal Database URL from step 3]
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

**Security Keys (Generate new random strings):**
```
APP_KEYS=your_random_key1,your_random_key2
API_TOKEN_SALT=your_random_salt
ADMIN_JWT_SECRET=your_random_jwt_secret
TRANSFER_TOKEN_SALT=your_random_transfer_salt
JWT_SECRET=your_random_jwt_secret
ENCRYPTION_KEY=your_random_encryption_key
```

**Optional (for enhanced features):**
```
EMAIL_PROVIDER=sendgrid
EMAIL_PROVIDER_API_KEY=your_sendgrid_key
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-1
AWS_BUCKET=your_s3_bucket
```

### 5. Deploy

1. Click "Create Web Service"
2. Render will automatically build and deploy your Strapi application
3. Wait for the deployment to complete (usually 5-10 minutes)

### 6. Access Your Strapi Admin

1. Once deployed, visit your Render URL (e.g., `https://beam-cms-strapi.onrender.com`)
2. Go to `/admin` to access the Strapi admin panel
3. Create your first admin user

### 7. Update Frontend Configuration

Update your frontend's `.env` file to use the new Strapi URL:

```
VITE_STRAPI_URL=https://your-strapi-app.onrender.com
```

## Important Notes

- **Free Tier Limitations**: Apps sleep after 15 minutes of inactivity
- **Cold Starts**: First request after sleep may take 30+ seconds
- **Database**: PostgreSQL free tier has 1GB storage limit
- **SSL**: Render provides free SSL certificates automatically

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check that all dependencies are in `package.json`
2. **Database Connection**: Verify `DATABASE_URL` is correct
3. **Port Issues**: Ensure `PORT=10000` in environment variables
4. **SSL Errors**: Make sure `DATABASE_SSL=true` and `DATABASE_SSL_REJECT_UNAUTHORIZED=false`

### Logs:
- Check deployment logs in Render dashboard
- Use `console.log()` for debugging (visible in logs)

## Security Recommendations

1. **Generate Strong Keys**: Use a key generator for all secret values
2. **Environment Variables**: Never commit real secrets to Git
3. **Admin Access**: Use strong passwords for Strapi admin
4. **CORS**: Configure proper CORS settings in Strapi

## Next Steps

After successful deployment:
1. Configure your content types in Strapi admin
2. Set up API permissions
3. Update your frontend to use the new Strapi URL
4. Test all API endpoints

Your Strapi CMS should now be live and accessible!