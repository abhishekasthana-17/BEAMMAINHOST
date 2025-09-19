import React, { useState, useEffect } from "react";
import "./ApplyPage.module.css";
import Hero from "../components/Hero";
import styles from "./ApplyPage.module.css";
import Section from "../components/Section/Section";
import { Link } from "react-router-dom";
import { jobListings } from "../utils/careers";

const API_URL = import.meta.env.VITE_API_URL;

const pageData = {
  section1: {
    title: "Interested in working at Beam?",
    subtitle: "BECOME ONE OF US",
    description:
      "We are always looking for the best talent in programming, design, marketing, business development, among others…",
  },
};

const ApplyPage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Careers Application - Beam Wallet";
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const positionFromQuery = urlParams.get("position") || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    positionArea: positionFromQuery,
    linkedin: "",
    portfolio: "",
    additionalInfo: "",
    termsAgreed: false,
    consentGiven: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [fileError, setFileError] = useState(null);

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
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Simple PDF validation on the frontend
    if (file && file.type !== "application/pdf") {
      setFileError("Only PDF files are allowed");
      e.target.value = ""; // Reset the input
      return;
    }

    setFileError(null);

    if (name === "cv") {
      setCvFile(file);
    } else if (name === "coverLetter") {
      setCoverLetterFile(file);
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

    if (!formData.termsAgreed)
      newErrors.termsAgreed = "You must agree to the terms";
    if (!formData.consentGiven)
      newErrors.consentGiven = "Consent is required to submit";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Use FormData to handle file uploads
        const formDataToSend = new FormData();

        // Add all form fields
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });

        // Add files if provided
        if (cvFile) formDataToSend.append("cv", cvFile);
        if (coverLetterFile)
          formDataToSend.append("coverLetter", coverLetterFile);

        const response = await fetch(`${API_URL}/api/apply`, {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            location: "",
            positionArea: "Design",
            additionalInfo: "",
            termsAgreed: false,
            consentGiven: false,
          });
          setCvFile(null);
          setCoverLetterFile(null);
        } else {
          setSubmitError(
            data.message || "Failed to submit the form. Please try again."
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError("Network error. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <Hero
        title="Careers Application"
        backgroundColor={styles.pinkBackground}
      />
      <Section
        title={pageData.section1.title}
        subtitle={pageData.section1.subtitle}
        description={pageData.section1.description}
      />

      <div className={styles.formContainer}>
        {submitSuccess ? (
          <div className={styles.successMessage}>
            <h3>Thank you for your application!</h3>
            <p>
              We've received your information and will review your application
              soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.applicationForm}>
            {submitError && (
              <div className={styles.errorMessage}>
                <p>{submitError}</p>
              </div>
            )}

            {fileError && (
              <div className={styles.errorMessage}>
                <p>{fileError}</p>
              </div>
            )}

            {/* First Name */}
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? styles.errorInput : ""}
              />
              {errors.firstName && (
                <span className={styles.errorText}>{errors.firstName}</span>
              )}
            </div>

            {/* Last Name */}
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? styles.errorInput : ""}
              />
              {errors.lastName && (
                <span className={styles.errorText}>{errors.lastName}</span>
              )}
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.errorInput : ""}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div>

            {/* Phone */}
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Location */}
            <div className={styles.formGroup}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Position Area */}
            <div className={styles.formGroup}>
              <label htmlFor="positionArea">Position Area</label>
              <select
                id="positionArea"
                name="positionArea"
                value={formData.positionArea}
                onChange={handleChange}
                className={styles.selectInput}
              >
                <option value="">Select a position</option>
                {jobListings.map((j) => (
                  <option key={j.id} value={j.title}>{j.title}</option>
                ))}
              </select>
            </div>

            {/* LinkedIn and Portfolio */}
            <div className={styles.formGroup}>
              <label htmlFor="linkedin">LinkedIn (optional)</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="portfolio">Portfolio (optional)</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            {/* CV Upload */}
            <div className={styles.formGroup}>
              <label htmlFor="cv">Curriculum Vitae (PDF only)</label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
            </div>

            {/* Cover Letter Upload */}
            <div className={styles.formGroup}>
              <label htmlFor="coverLetter">Cover Letter (PDF only)</label>
              <input
                type="file"
                id="coverLetter"
                name="coverLetter"
                accept=".pdf"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
            </div>

            {/* Additional Info */}
            <div className={styles.formGroup}>
              <label htmlFor="additionalInfo">
                Additional information for the recruiter
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="6"
              />
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
                  <Link to="/terms-and-conditions" className={styles.link}>
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
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default ApplyPage;
