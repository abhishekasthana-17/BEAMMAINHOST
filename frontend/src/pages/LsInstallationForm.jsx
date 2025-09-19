import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import styles from "./LsInstallationForm.module.css";

const API_URL = import.meta.env.VITE_API_URL;

const LsInstallationForm = () => {
  const [formData, setFormData] = useState({
    // Company Section
    companyName: "",
    vatNumber: "",
    address: "",
    zipCode: "",
    businessPhone: "",
    businessEmail: "",
    storeName: "",
    businessSector: "",
    storeWebsite: "",
    certificateCode: "",
    iban: "",
    bankName: "",
    swiftCode: "",
    // Contact Person Section
    contactName: "",
    contactLastName: "",
    contactEmail: "",
    contactPhone: "",
    contactRole: "",
    // Store on App Section
    publicEmail: "",
    publicPhone: "",
    openingTime: "",
    closingTime: "",
    shortDescription: "",
    longDescription: "",
    facebook: "",
    instagram: "",
    otherSocial: "",
    cashbackPercentage: "",
    installationAddress: "",
    // Terms
    termsAgreed: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Set page title when component mounts
  useEffect(() => {
    document.title = "Local Store Installation Form - Beam Wallet";
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
    // Basic required field validation (add more specific rules as needed)
    const requiredFields = [
      "companyName",
      "vatNumber",
      "address",
      "zipCode",
      "businessPhone",
      "businessEmail",
      "storeName",
      "businessSector",
      "iban",
      "contactName",
      "contactLastName",
      "contactEmail",
      "contactPhone",
      "publicEmail",
      "publicPhone",
      "shortDescription",
      "cashbackPercentage",
      "installationAddress",
      "termsAgreed",
    ];

    requiredFields.forEach((field) => {
      if (field === "termsAgreed") {
        if (!formData[field]) {
          newErrors[field] = "You must agree to the terms.";
        }
      } else if (!formData[field] || !formData[field].trim()) {
        const label = field
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        newErrors[field] = `${label} is required.`;
      }
    });

    // Add specific validations like email format, IBAN format, etc.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.businessEmail && !emailRegex.test(formData.businessEmail)) {
      newErrors.businessEmail = "Invalid business email format.";
    }
    if (formData.contactEmail && !emailRegex.test(formData.contactEmail)) {
      newErrors.contactEmail = "Invalid contact email format.";
    }
    if (formData.publicEmail && !emailRegex.test(formData.publicEmail)) {
      newErrors.publicEmail = "Invalid public email format.";
    }

    // Add more validations here (VAT, Phone, IBAN, etc.)

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/api/installation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitSuccess(true);
          // Optionally clear form
          // setFormData({...initialState});
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
      <Hero title="Installation Form" backgroundColor={styles.bgTeal} />
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
            <h1>
              Beam payments and marketing service setup form for merchants.
            </h1>

            {/* Company Section */}
            <section className={styles.formSection}>
              <h2>Company</h2>
              <p className={styles.sectionDescription}>Company information</p>

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

                {/* VAT Number */}
                <div className={styles.formGroup}>
                  <label htmlFor="vatNumber">
                    VAT Number <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="vatNumber"
                    name="vatNumber"
                    value={formData.vatNumber}
                    onChange={handleChange}
                    placeholder="VAT Number"
                    className={errors.vatNumber ? styles.errorInput : ""}
                  />
                  {errors.vatNumber && (
                    <span className={styles.errorText}>{errors.vatNumber}</span>
                  )}
                </div>
              </div>

              <div className={styles.gridFields}>
                {/* Address */}
                <div className={styles.formGroup}>
                  <label htmlFor="address">
                    Address <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Ex: 75 Park Place, New York"
                    className={errors.address ? styles.errorInput : ""}
                  />
                  {errors.address && (
                    <span className={styles.errorText}>{errors.address}</span>
                  )}
                </div>

                {/* Zip Code */}
                <div className={styles.formGroup}>
                  <label htmlFor="zipCode">
                    Zip Code <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="1000-100"
                    className={errors.zipCode ? styles.errorInput : ""}
                  />
                  {errors.zipCode && (
                    <span className={styles.errorText}>{errors.zipCode}</span>
                  )}
                </div>
              </div>

              <div className={styles.gridFields}>
                {/* Business Phone */}
                <div className={styles.formGroup}>
                  <label htmlFor="businessPhone">
                    Business Phone{" "}
                    <span className={styles.requiredStar}>*</span>
                  </label>
                  <div className={styles.phoneInputGroup}>
                    <span className={styles.countryCode}>+351</span>
                    <input
                      type="tel"
                      id="businessPhone"
                      name="businessPhone"
                      value={formData.businessPhone}
                      onChange={handleChange}
                      placeholder="999 99 99 99"
                      className={errors.businessPhone ? styles.errorInput : ""}
                    />
                  </div>
                  {errors.businessPhone && (
                    <span className={styles.errorText}>
                      {errors.businessPhone}
                    </span>
                  )}
                </div>

                {/* Business Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="businessEmail">
                    Business email{" "}
                    <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    placeholder="business email"
                    className={errors.businessEmail ? styles.errorInput : ""}
                  />
                  {errors.businessEmail && (
                    <span className={styles.errorText}>
                      {errors.businessEmail}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.gridFields}>
                {/* Store Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="storeName">
                    Store Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleChange}
                    placeholder="Store Name"
                    className={errors.storeName ? styles.errorInput : ""}
                  />
                  {errors.storeName && (
                    <span className={styles.errorText}>{errors.storeName}</span>
                  )}
                </div>

                {/* Business Sector */}
                <div className={styles.formGroup}>
                  <label htmlFor="businessSector">
                    Business Sector{" "}
                    <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="businessSector"
                    name="businessSector"
                    value={formData.businessSector}
                    onChange={handleChange}
                    placeholder="Fashion Store, Restaurant, Accomodation"
                    className={errors.businessSector ? styles.errorInput : ""}
                  />
                  {errors.businessSector && (
                    <span className={styles.errorText}>
                      {errors.businessSector}
                    </span>
                  )}
                </div>
              </div>

              {/* Store Website */}
              <div className={styles.formGroup}>
                <label htmlFor="storeWebsite">Store Website</label>
                <input
                  type="url"
                  id="storeWebsite"
                  name="storeWebsite"
                  value={formData.storeWebsite}
                  onChange={handleChange}
                  placeholder="Ex.: https://store.com"
                />
              </div>

              {/* Certificate Code */}
              <div className={styles.formGroup}>
                <label htmlFor="certificateCode">
                  Permanent certificate access code
                </label>
                <input
                  type="text"
                  id="certificateCode"
                  name="certificateCode"
                  value={formData.certificateCode}
                  onChange={handleChange}
                  placeholder="2222-2222-2222-2222"
                />
              </div>

              <div className={styles.gridFieldsTriple}>
                {/* IBAN */}
                <div className={styles.formGroup}>
                  <label htmlFor="iban">
                    IBAN <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="iban"
                    name="iban"
                    value={formData.iban}
                    onChange={handleChange}
                    placeholder="Ex.: PT00 1234 56789321456789"
                    className={errors.iban ? styles.errorInput : ""}
                  />
                  {errors.iban && (
                    <span className={styles.errorText}>{errors.iban}</span>
                  )}
                </div>
                {/* Bank Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    placeholder="Bank Name"
                  />
                </div>
                {/* Swift Code */}
                <div className={styles.formGroup}>
                  <label htmlFor="swiftCode">Swift Code</label>
                  <input
                    type="text"
                    id="swiftCode"
                    name="swiftCode"
                    value={formData.swiftCode}
                    onChange={handleChange}
                    placeholder="Swift Code"
                  />
                </div>
              </div>
            </section>

            {/* Contact Person Section */}
            <section className={styles.formSection}>
              <h2>Contact person</h2>
              <p className={styles.sectionDescription}>
                Information about the person we can contact
              </p>

              <div className={styles.gridFields}>
                {/* Contact Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="contactName">
                    Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Name"
                    className={errors.contactName ? styles.errorInput : ""}
                  />
                  {errors.contactName && (
                    <span className={styles.errorText}>
                      {errors.contactName}
                    </span>
                  )}
                </div>
                {/* Contact Last Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="contactLastName">
                    Last Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="contactLastName"
                    name="contactLastName"
                    value={formData.contactLastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={errors.contactLastName ? styles.errorInput : ""}
                  />
                  {errors.contactLastName && (
                    <span className={styles.errorText}>
                      {errors.contactLastName}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.gridFieldsTriple}>
                {/* Contact Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="contactEmail">
                    Email <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="Email"
                    className={errors.contactEmail ? styles.errorInput : ""}
                  />
                  {errors.contactEmail && (
                    <span className={styles.errorText}>
                      {errors.contactEmail}
                    </span>
                  )}
                </div>
                {/* Contact Phone */}
                <div className={styles.formGroup}>
                  <label htmlFor="contactPhone">
                    Phone <span className={styles.requiredStar}>*</span>
                  </label>
                  <div className={styles.phoneInputGroup}>
                    <span className={styles.countryCode}>+351</span>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      placeholder="+999 99 99 99"
                      className={errors.contactPhone ? styles.errorInput : ""}
                    />
                  </div>
                  {errors.contactPhone && (
                    <span className={styles.errorText}>
                      {errors.contactPhone}
                    </span>
                  )}
                </div>
                {/* Company Role */}
                <div className={styles.formGroup}>
                  <label htmlFor="contactRole">Company Role</label>
                  <input
                    type="text"
                    id="contactRole"
                    name="contactRole"
                    value={formData.contactRole}
                    onChange={handleChange}
                    placeholder="Ex: Executive (CEO) - Operations Director (COO)"
                  />
                </div>
              </div>
            </section>

            {/* Create your store on the Beam APP Section */}
            <section className={styles.formSection}>
              <h2>Create your store on the Beam APP</h2>
              <p className={styles.sectionDescription}>
                Public information, visible in users' mobile application
              </p>

              <div className={styles.gridFields}>
                {/* Public Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="publicEmail">
                    Public Email <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="email"
                    id="publicEmail"
                    name="publicEmail"
                    value={formData.publicEmail}
                    onChange={handleChange}
                    placeholder="Public Email"
                    className={errors.publicEmail ? styles.errorInput : ""}
                  />
                  {errors.publicEmail && (
                    <span className={styles.errorText}>
                      {errors.publicEmail}
                    </span>
                  )}
                </div>
                {/* Public Phone */}
                <div className={styles.formGroup}>
                  <label htmlFor="publicPhone">
                    Public Phone <span className={styles.requiredStar}>*</span>
                  </label>
                  <div className={styles.phoneInputGroup}>
                    <span className={styles.countryCode}>+351</span>
                    <input
                      type="tel"
                      id="publicPhone"
                      name="publicPhone"
                      value={formData.publicPhone}
                      onChange={handleChange}
                      placeholder="999 99 99 99"
                      className={errors.publicPhone ? styles.errorInput : ""}
                    />
                  </div>
                  {errors.publicPhone && (
                    <span className={styles.errorText}>
                      {errors.publicPhone}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.gridFields}>
                {/* Opening Time */}
                <div className={styles.formGroup}>
                  <label htmlFor="openingTime">Opening Time</label>
                  <input
                    type="text"
                    id="openingTime"
                    name="openingTime"
                    value={formData.openingTime}
                    onChange={handleChange}
                    placeholder="Opening Time"
                  />
                </div>
                {/* Closing Time */}
                <div className={styles.formGroup}>
                  <label htmlFor="closingTime">Closing Time</label>
                  <input
                    type="text"
                    id="closingTime"
                    name="closingTime"
                    value={formData.closingTime}
                    onChange={handleChange}
                    placeholder="Closing Time"
                  />
                </div>
              </div>

              {/* Short Description */}
              <div className={styles.formGroup}>
                <label htmlFor="shortDescription">
                  Short Description (30 characters){" "}
                  <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  maxLength="30"
                  placeholder='Ex: "Traditional Portuguese cuisine" or "Beard Hairdresser gel nails"'
                  className={errors.shortDescription ? styles.errorInput : ""}
                />
                {errors.shortDescription && (
                  <span className={styles.errorText}>
                    {errors.shortDescription}
                  </span>
                )}
              </div>

              {/* Long Description */}
              <div className={styles.formGroup}>
                <label htmlFor="longDescription">
                  Long Description (150 characters)
                </label>
                <textarea
                  id="longDescription"
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChange}
                  maxLength="150"
                  rows="4"
                  placeholder='Ex: "Best Portuguese food restaurant you can find in the business world"'
                ></textarea>
              </div>

              <div className={styles.gridFieldsTriple}>
                {/* Facebook */}
                <div className={styles.formGroup}>
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    type="url"
                    id="facebook"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    placeholder="Ex.: facebook.com/beamwalletportugal"
                  />
                </div>
                {/* Instagram */}
                <div className={styles.formGroup}>
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    type="url"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="Ex.: instagram.com/beamwalletportugal"
                  />
                </div>
                {/* Other Social */}
                <div className={styles.formGroup}>
                  <label htmlFor="otherSocial">Outro</label>
                  <input
                    type="url"
                    id="otherSocial"
                    name="otherSocial"
                    value={formData.otherSocial}
                    onChange={handleChange}
                    placeholder="Ex.: twitter.com/BeamWalletPT_ES"
                  />
                </div>
              </div>

              <div className={styles.gridFields}>
                {/* Cashback Percentage */}
                <div className={styles.formGroup}>
                  <label htmlFor="cashbackPercentage">
                    Cashback percentage for the customer{" "}
                    <span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="cashbackPercentage"
                    name="cashbackPercentage"
                    value={formData.cashbackPercentage}
                    onChange={handleChange}
                    className={
                      errors.cashbackPercentage ? styles.errorInput : ""
                    }
                  >
                    <option value="">-- selecionar --</option>
                    <option value="10">10%</option>
                    <option value="15">15%</option>
                    <option value="20">20%</option>
                    <option value="25">25%</option>
                    <option value="30">30%</option>
                    <option value="35">35%</option>
                    <option value="40">40%</option>
                    <option value="45">45%</option>
                    <option value="50">50%</option>
                    {/* Add more options if needed */}
                  </select>
                  {errors.cashbackPercentage && (
                    <span className={styles.errorText}>
                      {errors.cashbackPercentage}
                    </span>
                  )}
                </div>
                {/* Installation Address */}
                <div className={styles.formGroup}>
                  <label htmlFor="installationAddress">
                    Installation address{" "}
                    <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="installationAddress"
                    name="installationAddress"
                    value={formData.installationAddress}
                    onChange={handleChange}
                    placeholder="Ex: 75 Park Place, New York"
                    className={
                      errors.installationAddress ? styles.errorInput : ""
                    }
                  />
                  {errors.installationAddress && (
                    <span className={styles.errorText}>
                      {errors.installationAddress}
                    </span>
                  )}
                </div>
              </div>
            </section>

            {/* Terms Checkbox */}
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
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default LsInstallationForm;
