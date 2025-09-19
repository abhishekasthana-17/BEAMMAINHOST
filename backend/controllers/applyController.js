const { sendNotificationEmail } = require("../services/emailService");
const { pushCareerApplication } = require("../services/googleSheetsService");
const config = require("../config");

// Simple text formatter for application data
const formatApplyText = (data) => {
  return `
NEW CAREER APPLICATION SUBMISSION

==================================
APPLICANT INFORMATION
==================================

Name: ${data.firstName || ""} ${data.lastName || ""}
Email: ${data.email || ""}
Phone: ${data.phone || ""}
Location: ${data.location || ""}

POSITION DETAILS:
Position Applied For: ${data.positionArea || ""}

PROFESSIONAL LINKS:
LinkedIn Profile: ${data.linkedin || "Not provided"}
Portfolio: ${data.portfolio || "Not provided"}

ADDITIONAL INFORMATION:
${data.additionalInfo || "No additional information provided"}

==================================
FILES ATTACHED:
==================================
- CV: ${data.cvFile ? "✓ Attached" : "✗ Not provided"}
- Cover Letter: ${data.coverLetterFile ? "✓ Attached" : "✗ Not provided"}

==================================
Submitted via Beam Wallet Career Portal
Timestamp: ${new Date().toLocaleString()}
==================================
`;
};

exports.handleApplySubmission = async (req, res) => {
  try {
    // Get form data
    const formData = req.body;

    // Basic validation, need to add more validation
    // Check if required fields are present
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.location || !formData.positionArea) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields: first name, last name, email, phone, location, and position." });
    }

    // Handle file attachments
    const attachments = [];

    // Check if files were included
    if (req.files) {
      // CV file
      if (req.files.cv) {
        const cv = req.files.cv;
        if (cv.mimetype !== "application/pdf") {
          return res.status(400).json({ message: "CV must be a PDF file." });
        }
        attachments.push({
          filename: cv.name,
          content: cv.data,
          contentType: "application/pdf",
        });
      }

      // Cover letter file
      if (req.files.coverLetter) {
        attachments.push({
          filename: req.files.coverLetter.name,
          content: req.files.coverLetter.data,
          contentType: "application/pdf",
        });
      }
    }

    // Prepare email content
    const recipient = config.applicationEmailTo;
    const subject = `New Career Application: ${formData.firstName} ${formData.lastName}`;
    const emailContent = formatApplyText(formData);

    // Send the email with attachments
    await sendNotificationEmail(recipient, subject, emailContent, attachments);

    // Push to Google Sheets (fire-and-forget)
    try {
      await pushCareerApplication({
        timestamp: new Date().toISOString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || "",
        location: formData.location || "",
        positionArea: formData.positionArea || "",
        linkedin: formData.linkedin || "",
        portfolio: formData.portfolio || "",
        additionalInfo: formData.additionalInfo || "",
      });
    } catch (e) {
      // Already logged inside service
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "Your application has been submitted successfully!",
    });
  } catch (error) {
    console.error("Application submission error:", error);
    res.status(500).json({
      success: false,
      message:
        "There was a problem submitting your application. Please try again later.",
    });
  }
};
