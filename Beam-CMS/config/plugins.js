module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          region: env('AWS_REGION'),
          // Include baseUrl and rootPath here to avoid deprecation warning
          baseUrl:
            env('AWS_CLOUDFRONT_URL') ||
            `https://${env('AWS_BUCKET_NAME')}.s3.${env('AWS_REGION')}.amazonaws.com`,
          rootPath: env('AWS_S3_ROOT_PATH') || '',
        },
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env(
          'SENDGRID_DEFAULT_FROM',
          'mirassol.pedro7@gmail.com'
        ),
        defaultReplyTo: env(
          'SENDGRID_DEFAULT_REPLY_TO',
          'mirassol.pedro7@gmail.com'
        ),
      },
    },
  },
});
