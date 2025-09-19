import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import styles from "./LpForm.module.css";
import { countries } from "../utils/countries";

const API_URL = import.meta.env.VITE_API_URL;

const LpForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",

    // Company Information
    companyName: "",
    companyVAT: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Terms
    termsAgreed: false,
    consentGiven: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Set page title when component mounts
  useEffect(() => {
    document.title = "Local Partners Form - Beam Wallet";
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
    // Basic required field validation
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "companyName",
      "companyVAT",
      "addressLine1",
      "city",
      "country",
      "termsAgreed",
      "consentGiven",
    ];

    requiredFields.forEach((field) => {
      if (field === "termsAgreed" || field === "consentGiven") {
        if (!formData[field]) {
          newErrors[field] =
            field === "termsAgreed"
              ? "You must agree to the terms and conditions."
              : "You must provide consent to store your information.";
        }
      } else if (!formData[field] || !formData[field].trim()) {
        const label = field
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        newErrors[field] = `${label} is required.`;
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/api/local-partner`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitSuccess(true);
        } else {
          setSubmitError(data.message || "Form submission failed.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitError("Network error. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <Hero title="Local Partners Form" backgroundColor="teal" />
      <div className={styles.formContainer}>
        {submitSuccess ? (
          <div className={styles.successMessage}>
            <h3>Form Submitted Successfully!</h3>
            <p>
              Thank you for your interest in becoming a Beam Wallet Local
              Partner. We will review your information and contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.partnersForm}>
            {/* Personal Information Section */}
            <section className={styles.formSection}>
              <h2>Personal Information</h2>
              <p className={styles.sectionDescription}>Personal information</p>

              <div className={styles.gridFields}>
                {/* First Name */}
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

                {/* Last Name */}
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

              <div className={styles.gridFields}>
                {/* Email */}
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

                {/* Phone Number */}
                <div className={styles.formGroup}>
                  <label htmlFor="phoneNumber">
                    Phone Number <span className={styles.requiredStar}>*</span>
                  </label>
                  <div className={styles.phoneInputGroup}>
                    <span className={styles.countryCode}>+</span>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={errors.phoneNumber ? styles.errorInput : ""}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <span className={styles.errorText}>
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>
            </section>

            {/* Company Section */}
            <section className={styles.formSection}>
              <h2>Company</h2>
              <p className={styles.sectionDescription}>
                Information about the company
              </p>

              <div className={styles.gridFields}>
                {/* Company Name */}
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
                    <span className={styles.errorText}>
                      {errors.companyName}
                    </span>
                  )}
                </div>

                {/* Company VAT */}
                <div className={styles.formGroup}>
                  <label htmlFor="companyVAT">
                    Company VAT <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="companyVAT"
                    name="companyVAT"
                    value={formData.companyVAT}
                    onChange={handleChange}
                    placeholder="Company VAT"
                    className={errors.companyVAT ? styles.errorInput : ""}
                  />
                  {errors.companyVAT && (
                    <span className={styles.errorText}>
                      {errors.companyVAT}
                    </span>
                  )}
                </div>
              </div>

              <h3 className={styles.subheading}>Company Address</h3>

              <div className={styles.gridFields}>
                {/* Address Line 1 */}
                <div className={styles.formGroup}>
                  <label htmlFor="addressLine1">
                    Address Line 1{" "}
                    <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    placeholder="Address Line 1"
                    className={errors.addressLine1 ? styles.errorInput : ""}
                  />
                  {errors.addressLine1 && (
                    <span className={styles.errorText}>
                      {errors.addressLine1}
                    </span>
                  )}
                </div>

                {/* Address Line 2 */}
                <div className={styles.formGroup}>
                  <label htmlFor="addressLine2">Address Line 2</label>
                  <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    placeholder="Address Line 2"
                  />
                </div>
              </div>

              <div className={styles.gridFields}>
                {/* City */}
                <div className={styles.formGroup}>
                  <label htmlFor="city">
                    City <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={errors.city ? styles.errorInput : ""}
                  />
                  {errors.city && (
                    <span className={styles.errorText}>{errors.city}</span>
                  )}
                </div>

                {/* State */}
                <div className={styles.formGroup}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                </div>
              </div>

              <div className={styles.gridFields}>
                {/* Zip Code */}
                <div className={styles.formGroup}>
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip"
                  />
                </div>

                {/* Country */}
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
              </div>
            </section>

            {/* Terms Checkboxes */}
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
              </div>
              {errors.termsAgreed && (
                <span className={styles.errorTextCheckbox}>
                  {errors.termsAgreed}
                </span>
              )}
            </div>

            <div className={styles.checkboxGroup}>
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
              </div>
              {errors.consentGiven && (
                <span className={styles.errorTextCheckbox}>
                  {errors.consentGiven}
                </span>
              )}
            </div>

            {submitError && (
              <div className={styles.errorMessage}>
                <p>{submitError}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className={styles.formActions}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default LpForm;
