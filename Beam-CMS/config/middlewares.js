module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:'].concat(process.env.NODE_ENV === 'development' ? ['ws:'] : []),
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'strapicmsbeam.s3.eu-central-1.amazonaws.com',
            'd32nqh9rf284q5.cloudfront.net',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'strapicmsbeam.s3.eu-central-1.amazonaws.com',
            'd32nqh9rf284q5.cloudfront.net',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:3000', 
        'http://localhost:1337', 
        'https://beamwallet.com',
        'https://www.beamwallet.com',
        'https://strapi.beamwallet.com',
        'http://strapicmsbeam.s3-website.eu-central-1.amazonaws.com',
        'https://sitebackend.beamwallet.com',
        'http://ec2-3-66-164-98.eu-central-1.compute.amazonaws.com:1337',
        // Vercel deployed frontend
        'https://beammainhost.vercel.app',
        // Common deployment platforms
        /\.netlify\.app$/,
        /\.vercel\.app$/,
        /\.onrender\.com$/,
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
