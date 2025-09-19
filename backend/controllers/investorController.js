const { sendNotificationEmail } = require("../services/emailService");
const config = require("../config");

const formatInvestorText = (data) => {
  return `
  New Investor Form Submission
  
  Personal Information:
    First Name: ${data.firstName || ""}
    Last Name: ${data.lastName || ""}
    Email: ${data.email || ""}
    Country: ${data.country || ""}
    Phone Number: ${data.phoneNumber || ""}
  
  Company Information:
    Company Name: ${data.companyName || ""}
    Company Role: ${data.companyRole || ""}
    Company Website: ${data.companyWebsite || "N/A"}
    Postal Code: ${data.postalCode || "N/A"}
    VAT/NIF Number: ${data.vatNifNumber || "N/A"}
  
  Investment Details:
    Amount to Invest: ${data.amountToInvest || ""}
    Currency: ${data.currency || ""}
  
  Message:
    ${data.message || ""}
  `;
};

exports.handleInvestorForm = async (req, res) => {
  const formData = req.body;
  // Basic validation
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "country",
    "phoneNumber",
    "companyName",
    "companyRole",
    "amountToInvest",
    "currency",
    "message",
  ];

  const missingFields = requiredFields.filter(
    (field) =>
      !formData[field] ||
      (typeof formData[field] === "string" && !formData[field].trim())
  );
  if (missingFields.length > 0) {
    // Match response structure of other controllers
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missingFields.join(", ")}`,
    });
  }

  // Construct email body using the formatter
  const emailContent = formatInvestorText(formData);
   // Determine recipient from config
   const recipient = config.subjectToEmail['Investors']; // Using the existing map
   const subject = `New Investor Inquiry: ${formData.companyName || formData.email}`;
   if (!recipient) {
    console.error('Investor email recipient not found in config.subjectToEmail["Investors"]');
    return res.status(500).json({ 
        success: false,
        message: 'Server configuration error: Recipient email not set.'
    });
}

try {
    // Use the centralized email service
    await sendNotificationEmail(recipient, subject, emailContent);
    
   
    // Match response structure of other controllers
    res.status(200).json({ 
        success: true,
        message: 'Form submitted successfully.' 
    });

} catch (error) {
    console.error('Failed to send investor form email via emailService:', error);
    // Match response structure of other controllers
    res.status(500).json({ 
        success: false,
        message: 'Failed to submit form due to a server error.' 
    });
}
}; 
