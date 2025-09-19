import React, { useState } from "react";
import styles from "./CareerApplicationForm.module.css";
import { jobListings } from "../../utils/careers";

const API_URL = import.meta.env.VITE_API_URL;

const CareerApplicationForm = ({ selectedPosition = "" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    positionArea: selectedPosition,
    linkedin: "",
    portfolio: "",
    additionalInfo: "",
    termsAgreed: false,
    consentGiven: false,
  });

  const [cvFile, setCvFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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

    // PDF validation
    if (file && file.type !== "application/pdf") {
      setErrors({
        ...errors,
        [name]: "Only PDF files are allowed"
      });
      e.target.value = "";
      return;
    }

    setErrors({
      ...errors,
      [name]: null
    });

    if (name === "cv") {
      setCvFile(file);
    } else if (name === "coverLetter") {
      setCoverLetterFile(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.positionArea) {
      newErrors.positionArea = "Please select a position";
    }

    if (!cvFile) {
      newErrors.cv = "CV upload is required";
    }

    if (!formData.termsAgreed) {
      newErrors.termsAgreed = "You must agree to the terms and conditions";
    }

    if (!formData.consentGiven) {
      newErrors.consentGiven = "Consent is required to submit";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formDataToSend = new FormData();

      // Add all form fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Add files
      if (cvFile) {
        formDataToSend.append("cv", cvFile);
      }
      if (coverLetterFile) {
        formDataToSend.append("coverLetter", coverLetterFile);
      }

      const response = await fetch(`${API_URL}/api/apply`, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          positionArea: "",
          linkedin: "",
          portfolio: "",
          additionalInfo: "",
          termsAgreed: false,
          consentGiven: false,
        });
        setCvFile(null);
        setCoverLetterFile(null);
      } else {
        setSubmitError(data.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successMessage}>
          <h2>Application Submitted Successfully!</h2>
          <p>Thank you for your interest in joining Beam Wallet. We have received your application and will review it soon.</p>
          <p>You will receive a confirmation email with the link to your meeting with the Project Manager.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1>Confirm your data</h1>
        <p>Please confirm your personal and professional details below.</p>
        <p>This step is required for data protection purposes and to proceed with the scheduling of your interview with Beam Wallet.</p>
        <p>After submitting the form, you will receive the link to your meeting with the Project Manager.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.applicationForm}>
        {submitError && (
          <div className={styles.errorMessage}>
            <p>{submitError}</p>
          </div>
        )}

        <div className={styles.formRow}>
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
        </div>

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

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? styles.errorInput : ""}
          />
          {errors.phone && (
            <span className={styles.errorText}>{errors.phone}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={errors.location ? styles.errorInput : ""}
          />
          {errors.location && (
            <span className={styles.errorText}>{errors.location}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="positionArea">Position Area</label>
          <select
            id="positionArea"
            name="positionArea"
            value={formData.positionArea}
            onChange={handleChange}
            className={errors.positionArea ? styles.errorInput : ""}
          >
            <option value="">Select a position</option>
            {jobListings.map((job) => (
              <option key={job.id} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>
          {errors.positionArea && (
            <span className={styles.errorText}>{errors.positionArea}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cv">Curriculum Vitae (PDF only)</label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf"
            onChange={handleFileChange}
            className={`${styles.fileInput} ${errors.cv ? styles.errorInput : ""}`}
          />
          {errors.cv && (
            <span className={styles.errorText}>{errors.cv}</span>
          )}
        </div>

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

        <div className={styles.formGroup}>
          <label htmlFor="linkedin">LinkedIn (optional)</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/your-profile"
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
            placeholder="https://your-portfolio.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="additionalInfo">Additional information for the recruiter</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows="4"
            placeholder="Write a short note for the recruiter"
          />
        </div>

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
              I have read and agree to the Terms and Conditions and Privacy Policy
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
              I consent to have this website store my submitted information so they can respond to my inquiry
            </label>
            {errors.consentGiven && (
              <span className={styles.errorText}>{errors.consentGiven}</span>
            )}
          </div>
        </div>

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
    </div>
  );
};

export default CareerApplicationForm;