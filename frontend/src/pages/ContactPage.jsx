import React, { useState, useEffect } from "react";
import styles from "./ContactPage.module.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import PageHelmet from "../components/PageHelmet";

const API_URL = import.meta.env.VITE_API_URL;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    subject: "Support",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    termsAgreed: false,
    consentGiven: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [backendErrors, setBackendErrors] = useState([]);

  // Set page title when component mounts
  useEffect(() => {
    document.title = "Contact Us - Beam Wallet";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }

    // Also clear backend errors when form is modified
    if (backendErrors.length > 0) {
      setBackendErrors([]);
    }

    // Clear general submit error as well
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.termsAgreed)
      newErrors.termsAgreed = "You must agree to the terms";
    if (!formData.consentGiven)
      newErrors.consentGiven = "Consent is required to submit";

    // Check message length
    if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous errors
    setBackendErrors([]);
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch(`${API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            subject: "Support",
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            termsAgreed: false,
            consentGiven: false,
          });
        } else {
          // Handle validation errors from backend
          if (data.errors && Array.isArray(data.errors)) {
            setBackendErrors(data.errors);
          } else {
            setSubmitError(
              data.message || "Failed to submit the form. Please try again."
            );
          }
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError("Network error. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Count message characters
  const messageCharCount = formData.message.length;
  const maxMessageLength = 1000;

  return (
    <>
      <PageHelmet title="Contact Us - Beam Wallet" pageName="contacts" />

      <Hero title="Contact Us" backgroundColor="bgPink" />
      <div className={styles.contactPageContainer}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1>CONTACT DETAILS</h1>
        </div>

        {/* Form Container */}
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2 className={styles.contactHeading}>Can we help?</h2>
          </div>

          {submitSuccess ? (
            <div className={styles.successMessage}>
              <h3>Thank you for contacting us!</h3>
              <p>
                We've received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {submitError && (
                <div className={styles.errorMessage}>
                  <p>{submitError}</p>
                </div>
              )}

              {/* Backend validation errors */}
              {backendErrors.length > 0 && (
                <div className={styles.errorMessage}>
                  <ul className={styles.errorList}>
                    {backendErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Subject Section */}
              <div className={styles.formGroup}>
                <label className={styles.required}>Subject</label>
                <div className={styles.radioGroup}>
                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="general"
                      name="subject"
                      value="General Information"
                      checked={formData.subject === "General Information"}
                      onChange={handleChange}
                    />
                    <label htmlFor="general">General Information</label>
                  </div>

                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="investors"
                      name="subject"
                      value="Investors"
                      checked={formData.subject === "Investors"}
                      onChange={handleChange}
                    />
                    <label htmlFor="investors">Investors</label>
                  </div>

                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="partners"
                      name="subject"
                      value="Local Partners"
                      checked={formData.subject === "Local Partners"}
                      onChange={handleChange}
                    />
                    <label htmlFor="partners">Local Partners</label>
                  </div>

                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="recruiting"
                      name="subject"
                      value="Recruiting"
                      checked={formData.subject === "Recruiting"}
                      onChange={handleChange}
                    />
                    <label htmlFor="recruiting">Recruiting</label>
                  </div>

                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="support"
                      name="subject"
                      value="Support"
                      checked={formData.subject === "Support"}
                      onChange={handleChange}
                    />
                    <label htmlFor="support">Support</label>
                  </div>
                </div>
              </div>

              {/* Name Fields */}
              <div className={styles.nameFields}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.required}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={errors.firstName ? styles.errorInput : ""}
                    maxLength={50}
                  />
                  {errors.firstName && (
                    <span className={styles.errorText}>{errors.firstName}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.required}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={errors.lastName ? styles.errorInput : ""}
                    maxLength={50}
                  />
                  {errors.lastName && (
                    <span className={styles.errorText}>{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.required}>
                  Email
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

              {/* Message Field */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.required}>
                  Your Message
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
                />
                <div className={styles.messageCounter}>
                  <span
                    className={messageCharCount > 900 ? styles.warningText : ""}
                  >
                    {messageCharCount}/{maxMessageLength} characters
                  </span>
                </div>
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
                    <span className={styles.errorText}>
                      {errors.termsAgreed}
                    </span>
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
                    I consent to have this website store my submitted
                    information so they can respond to my inquiry
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
      </div>
    </>
  );
};

export default ContactPage;
