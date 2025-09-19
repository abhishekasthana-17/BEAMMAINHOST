import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import styles from "./InvestorsForm.module.css";
import heroStyles from "../components/Hero/Hero.module.css";
import { countries } from "../utils/countries";

const API_URL = import.meta.env.VITE_API_URL;

const pageData = {
  hero: {
    title: "Investors Form",
  },
};

const amountOptions = [
  { value: "", label: "- Select -" },
  { value: "100k+", label: "100.000€ or more" },
  { value: "1m+", label: "1.000.000€ or more" },
  { value: "10m+", label: "10.000.000€ or more" },
  { value: "50m+", label: "50.000.000€ or more" },
];

const currencyOptions = [
  { value: "", label: "- Select -" },
  { value: "USD", label: "Dollar" },
  { value: "EUR", label: "Euro" },
  { value: "GBP", label: "Pound" },
];

// Count message characters
/* const messageCharCount = formData.message.length;*/
const maxMessageLength = 1000;

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phoneNumber: "",
    companyName: "",
    companyRole: "",
    companyWebsite: "",
    postalCode: "",
    vatNifNumber: "",
    amountToInvest: "",
    currency: "",
    message: "",
    termsAgreed: false,
    consentGiven: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Set page title when component mounts
  useEffect(() => {
    document.title = "Investors Form - Beam Wallet";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};
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

    requiredFields.forEach((field) => {
      if (!formData[field] || !formData[field].trim()) {
        // Convert camelCase to readable label for error messages
        const label = field
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        newErrors[field] = `${label} is required.`;
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s]+$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    const formIsValid = validateForm();

    if (formIsValid) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/api/investor`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (!response.ok) {
          // Handle HTTP errors (e.g., 400, 500)
          throw new Error(
            result.message || `HTTP error! status: ${response.status}`
          );
        }

        setSubmitSuccess(true);
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitError(error.message || "Network error. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmitError("Please fix the errors in the form.");
    }
  };

  return (
    <>
      <Hero title={pageData.hero.title} backgroundColor={heroStyles.bgTeal} />
      <div className={styles.formContainer}>
        {submitSuccess ? (
          <div className={styles.successMessage}>
            <h3>Form Submitted Successfully!</h3>
            <p>
              Thank you for your submission. We will review your information.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.installationForm}>
            {/* --- Row 1: First Name, Last Name --- */}
            <div className={styles.gridFields}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">
                  First Name <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={errors.firstName ? styles.errorInput : ""}
                />
                {errors.firstName && (
                  <span className={styles.errorText}>{errors.firstName}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">
                  Last Name <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={errors.lastName ? styles.errorInput : ""}
                />
                {errors.lastName && (
                  <span className={styles.errorText}>{errors.lastName}</span>
                )}
              </div>
            </div>

            {/* --- Row 2: Email --- */}
            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={errors.email ? styles.errorInput : ""}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div>
            {/* --- Row 3: Country, Phone Number --- */}
            <div className={styles.gridFields}>
              <div className={styles.formGroup}>
                <label htmlFor="country">
                  Country <span className={styles.requiredStar}>*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={errors.country ? styles.errorInput : ""}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <span className={styles.errorText}>{errors.country}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">
                  Phone Number <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+999999999999"
                  className={errors.phoneNumber ? styles.errorInput : ""}
                />
                {errors.phoneNumber && (
                  <span className={styles.errorText}>{errors.phoneNumber}</span>
                )}
              </div>
            </div>
            {/* --- Row 4: Company Name, Company Role, Company Website --- */}
            <div className={styles.gridFieldsTriple}>
              <div className={styles.formGroup}>
                <label htmlFor="companyName">
                  Company Name <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className={errors.companyName ? styles.errorInput : ""}
                />
                {errors.companyName && (
                  <span className={styles.errorText}>{errors.companyName}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="companyRole">
                  Company Role <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  id="companyRole"
                  name="companyRole"
                  value={formData.companyRole}
                  onChange={handleChange}
                  placeholder="Company Role"
                  className={errors.companyRole ? styles.errorInput : ""}
                />
                {errors.companyRole && (
                  <span className={styles.errorText}>{errors.companyRole}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="companyWebsite">Company Website</label>
                <input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="Company Website"
                  // No error display for optional field unless I want
                />
              </div>
            </div>
            {/* --- Row 5: Postal Code, VAT/NIF Number --- */}
            <div className={styles.gridFields}>
              <div className={styles.formGroup}>
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="vatNifNumber">VAT/NIF Number</label>
                <input
                  type="text"
                  id="vatNifNumber"
                  name="vatNifNumber"
                  value={formData.vatNifNumber}
                  onChange={handleChange}
                  placeholder="VAT/NIF Number"
                />
              </div>
            </div>
            <div className={styles.gridFields}>
              <div className={styles.formGroup}>
                <label htmlFor="amountToInvest">
                  Amount to Invest{" "}
                  <span className={styles.requiredStar}>*</span>
                </label>
                <select
                  id="amountToInvest"
                  name="amountToInvest"
                  value={formData.amountToInvest}
                  onChange={handleChange}
                  className={errors.amountToInvest ? styles.errorInput : ""}
                >
                  {amountOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.amountToInvest && (
                  <span className={styles.errorText}>
                    {errors.amountToInvest}
                  </span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="currency">
                  Currency <span className={styles.requiredStar}>*</span>
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className={errors.currency ? styles.errorInput : ""}
                >
                  {currencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.currency && (
                  <span className={styles.errorText}>{errors.currency}</span>
                )}
              </div>
            </div>
            {/* --- Row 7: Your Message --- */}
            <div className={styles.formGroup}>
              <label htmlFor="message">
                Your Message <span className={styles.requiredStar}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className={errors.message ? styles.errorInput : ""}
                maxLength={maxMessageLength}
              ></textarea>
              {/*
              <div className={styles.messageCounter}>
                <span
                  className={messageCharCount > 900 ? styles.warningText : ""}
                >
                  {messageCharCount}/{maxMessageLength} characters
                </span>
              </div> */}
              {errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
            </div>
            {/* Terms and Consent Checkboxes */}
            <div className={styles.checkboxGroup}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="termsAgreed"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                />
                <label htmlFor="termsAgreed">
                  I have read and agree to the{" "}
                  <Link to="/terms" className={styles.link}>
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className={styles.link}>
                    Privacy Policy
                  </Link>
                </label>
                {errors.termsAgreed && (
                  <span className={styles.errorText}>{errors.termsAgreed}</span>
                )}
              </div>

              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="consentGiven"
                  name="consentGiven"
                  checked={formData.consentGiven}
                  onChange={handleChange}
                />
                <label htmlFor="consentGiven">
                  I consent to have this website store my submitted information
                  so they can respond to my inquiry
                </label>
                {errors.consentGiven && (
                  <span className={styles.errorText}>
                    {errors.consentGiven}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className={styles.formActions}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default InvestorForm;
