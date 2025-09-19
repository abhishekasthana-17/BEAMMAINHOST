const { logConsentToS3 } = require('../services/s3Service');

const handleConsentLog = async (req, res) => {
  const { consent, timestamp } = req.body;

  // Basic validation
  if (!consent || !timestamp) {
    return res.status(400).json({
      success: false,
      message: 'Missing required consent information.',
    });
  }

  try {
    const consentData = {
      consent,
      timestamp,
      ip: req.ip, // Log the user's IP address for audit purposes
    };

    await logConsentToS3(consentData);

    res.status(200).json({
      success: true,
      message: 'Consent logged successfully.',
    });
  } catch (error) {
    console.error('Failed to handle consent log:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while logging consent.',
    });
  }
};

module.exports = {
  handleConsentLog,
}; 