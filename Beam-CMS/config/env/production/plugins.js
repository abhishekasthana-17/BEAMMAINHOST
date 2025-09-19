module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('AWS_CLOUDFRONT_URL') || `https://${env('AWS_BUCKET_NAME')}.s3.${env('AWS_REGION')}.amazonaws.com`,
        rootPath: env('AWS_S3_ROOT_PATH') || '',
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          region: env('AWS_REGION'),
        },
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
          ACL: null,
        },
      },
    },
  },
}); 