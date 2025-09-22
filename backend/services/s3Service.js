const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const config = require('../config');

// Configure the AWS SDK v3 client
// When running on EC2 with an IAM role, the SDK automatically finds credentials.
const s3 = new S3Client({
  region: config.aws.s3Region,
});

const logConsentToS3 = async (consentData) => {
  const bucketName = config.aws.s3BucketName;
  const logFileName = 'consent-logs.json';

  let logs = [];

  try {
    // Attempt to get the existing log file from S3
    const data = await s3.send(new GetObjectCommand({
      Bucket: bucketName,
      Key: logFileName,
    }));
    const bodyString = await data.Body.transformToString();
    logs = JSON.parse(bodyString);
  } catch (error) {
    if (error.code === 'NoSuchKey') {
      // If the file doesn't exist, we'll start with an empty array
      console.log('Log file not found, creating a new one.');
    } else {
      // For any other error, we should stop and log it
      console.error('Error getting log file from S3:', error);
      throw error;
    }
  }

  // Add the new consent information
  logs.push(consentData);

  // Upload the updated log file back to S3
  try {
    await s3.send(new PutObjectCommand({
      Bucket: bucketName,
      Key: logFileName,
      Body: JSON.stringify(logs, null, 2),
      ContentType: 'application/json',
    }));
    console.log('Successfully logged consent to S3.');
  } catch (error) {
    console.error('Error uploading log file to S3:', error);
    throw error;
  }
};

module.exports = {
  logConsentToS3,
};