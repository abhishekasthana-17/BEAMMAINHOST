import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import styles from "./OsInstallationForm.module.css";
import mobilePreviewImage from "../assets/images/movel_forms_online.png";
import heroStyles from "../components/Hero/Hero.module.css";
import { countries } from "../utils/countries";

const API_URL = import.meta.env.VITE_API_URL;

const OsInstallationForm = () => {
  const [formData, setFormData] = useState({
    // Section 1: Identification
    responsiblePersonFirstName: "",
    responsiblePersonLastName: "",
    legalName: "",
    vatId: "",
    companyContactPhone: "",
    companyContactEmail: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    // Section 2: Create Store
    publicName: "",
    publicEmail: "",
    publicPhoneMobile: "",
    shortDescription: "",
    longDescription: "",
    facebook: "",
    instagram: "",
    otherSocial: "",
    // Section 3: Store Activation
    storeWebsite: "",
    onlineStorePlatform: "", // 'woocommerce', 'prestashop'
    cashbackPercentage: "",
    bankName: "",
    iban: "",
    swiftCode: "",
    termsAgreed: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Set page title when component mounts
  useEffect(() => {
    document.title = "Online Store Installation Form - Beam Wallet";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    // --- Required Fields Validation ---
    const requiredFields = {
      responsiblePersonFirstName: "Responsible Person First Name",
      responsiblePersonLastName: "Responsible Person Last Name",
      legalName: "Legal Name",
      vatId: "VAT ID / Identification number",
      companyContactPhone: "Company Contact Phone",
      companyContactEmail: "Company Contact Email",
      addressLine1: "Address Line 1",
      city: "City",
      zipCode: "Zip Code",
      country: "Country",
      publicName: "Public Name",
      publicEmail: "Public Email",
      publicPhoneMobile: "Public Phone/mobile",
      shortDescription: "Short Description",
      storeWebsite: "Store Website",
      onlineStorePlatform: "Online store platform",
      cashbackPercentage: "Fixed percentage of Cashback",
      bankName: "Bank Name",
      iban: "IBAN",
      swiftCode: "Swift Code",
      termsAgreed: "Terms and Conditions Agreement",
    };

    Object.entries(requiredFields).forEach(([field, label]) => {
      if (field === "termsAgreed") {
        if (!formData[field]) {
          newErrors[field] =
            "You must agree to the Terms and Conditions and Privacy Policy.";
        }
      } else if (
        !formData[field] ||
        (typeof formData[field] === "string" && !formData[field].trim())
      ) {
        newErrors[field] = `${label} is required.`;
      }
    });

    // --- Specific Format Validation ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      formData.companyContactEmail &&
      !emailRegex.test(formData.companyContactEmail)
    ) {
      newErrors.companyContactEmail = "Invalid Company Contact Email format.";
    }
    if (formData.publicEmail && !emailRegex.test(formData.publicEmail)) {
      newErrors.publicEmail = "Invalid Public Email format.";
    }

    // Add other specific validations here (Phone, VAT, IBAN etc.)

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/api/os-installation`, {
          // Example endpoint
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
        } else {
          setSubmitError(
            data.message || "Form submission failed. Please try again."
          );
        }
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitError("Network error. Could not submit form.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <Hero title="Installation Form" backgroundColor={heroStyles.bgTeal} />
      <div className={styles.formContainer}>
        {submitSuccess ? (
          <div className={styles.successMessage}>
            <h3>Installation Request Submitted!</h3>
            <p>
              Thank you! We have received your online store setup information
              and will be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.osForm}>
            {/* Section 1: Identification */}
            <section className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>1</span>
                <h2>Identification</h2>
                <p className={styles.sectionSubtitle}>
                  Information about the company and the person we can contact
                </p>
              </div>

              <h3 className={styles.subSectionTitle}>Responsible Person</h3>
              <div className={styles.gridFields}>
                <div className={styles.formGroup}>
                  <label htmlFor="responsiblePersonFirstName">
                    First Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="responsiblePersonFirstName"
                    name="responsiblePersonFirstName"
                    value={formData.responsiblePersonFirstName}
                    onChange={handleChange}
                    placeholder="Responsible Person First Name"
                    className={
                      errors.responsiblePersonFirstName ? styles.errorInput : ""
                    }
                  />
                  {errors.responsiblePersonFirstName && (
                    <span className={styles.errorText}>
                      {errors.responsiblePersonFirstName}
                    </span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="responsiblePersonLastName">
                    Last Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="responsiblePersonLastName"
                    name="responsiblePersonLastName"
                    value={formData.responsiblePersonLastName}
                    onChange={handleChange}
                    placeholder="Responsible Person Last Name"
                    className={
                      errors.responsiblePersonLastName ? styles.errorInput : ""
                    }
                  />
                  {errors.responsiblePersonLastName && (
                    <span className={styles.errorText}>
                      {errors.responsiblePersonLastName}
                    </span>
                  )}
                </div>
              </div>

              <h3 className={styles.subSectionTitle}>Company</h3>
              <div className={styles.gridFields}>
                {/* Left Column */}
                <div>
                  <div className={styles.formGroup}>
                    <label htmlFor="legalName">
                      Legal Name <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="text"
                      id="legalName"
                      name="legalName"
                      value={formData.legalName}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className={errors.legalName ? styles.errorInput : ""}
                    />
                    {errors.legalName && (
                      <span className={styles.errorText}>
                        {errors.legalName}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="vatId">
                      VAT ID / Identification number{" "}
                      <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="text"
                      id="vatId"
                      name="vatId"
                      value={formData.vatId}
                      onChange={handleChange}
                      placeholder="Company VAT"
                      className={errors.vatId ? styles.errorInput : ""}
                    />
                    {errors.vatId && (
                      <span className={styles.errorText}>{errors.vatId}</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="companyContactPhone">
                      Contact Phone{" "}
                      <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="companyContactPhone"
                      name="companyContactPhone"
                      value={formData.companyContactPhone}
                      onChange={handleChange}
                      placeholder="Company Contact Phone"
                      className={
                        errors.companyContactPhone ? styles.errorInput : ""
                      }
                    />
                    {errors.companyContactPhone && (
                      <span className={styles.errorText}>
                        {errors.companyContactPhone}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="companyContactEmail">
                      Contact Email{" "}
                      <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="email"
                      id="companyContactEmail"
                      name="companyContactEmail"
                      value={formData.companyContactEmail}
                      onChange={handleChange}
                      placeholder="Company Contact Email"
                      className={
                        errors.companyContactEmail ? styles.errorInput : ""
                      }
                    />
                    {errors.companyContactEmail && (
                      <span className={styles.errorText}>
                        {errors.companyContactEmail}
                      </span>
                    )}
                  </div>
                </div>
                {/* Right Column */}
                <div>
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
                  <div className={styles.gridFieldsInner}>
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
                  <div className={styles.gridFieldsInner}>
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
                        placeholder="Zip"
                        className={errors.zipCode ? styles.errorInput : ""}
                      />
                      {errors.zipCode && (
                        <span className={styles.errorText}>
                          {errors.zipCode}
                        </span>
                      )}
                    </div>
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
                        <span className={styles.errorText}>
                          {errors.country}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Create your store on Beam App */}
            <section className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>2</span>
                <h2>Create your store on Beam App!</h2>
                <p className={styles.sectionSubtitle}>
                  Public information, visible to all users of the aplication.
                </p>
              </div>

              <div className={styles.storeAppSectionContent}>
                <div className={styles.storeAppFields}>
                  <div className={styles.formGroup}>
                    <label htmlFor="publicName">
                      Public Name <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="text"
                      id="publicName"
                      name="publicName"
                      value={formData.publicName}
                      onChange={handleChange}
                      placeholder="Public Name"
                      className={errors.publicName ? styles.errorInput : ""}
                    />
                    {errors.publicName && (
                      <span className={styles.errorText}>
                        {errors.publicName}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="publicEmail">
                      Public Email{" "}
                      <span className={styles.requiredStar}>*</span>
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
                  <div className={styles.formGroup}>
                    <label htmlFor="publicPhoneMobile">
                      Public Phone/mobile{" "}
                      <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="publicPhoneMobile"
                      name="publicPhoneMobile"
                      value={formData.publicPhoneMobile}
                      onChange={handleChange}
                      placeholder="Public Phone/mobile"
                      className={
                        errors.publicPhoneMobile ? styles.errorInput : ""
                      }
                    />
                    {errors.publicPhoneMobile && (
                      <span className={styles.errorText}>
                        {errors.publicPhoneMobile}
                      </span>
                    )}
                  </div>
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
                      placeholder="Store Short Description"
                      className={
                        errors.shortDescription ? styles.errorInput : ""
                      }
                    />
                    {errors.shortDescription && (
                      <span className={styles.errorText}>
                        {errors.shortDescription}
                      </span>
                    )}
                  </div>
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
                      placeholder="Long Description"
                    ></textarea>
                  </div>
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
                  <div className={styles.formGroup}>
                    <label htmlFor="otherSocial">Other</label>
                    <input
                      type="url"
                      id="otherSocial"
                      name="otherSocial"
                      value={formData.otherSocial}
                      onChange={handleChange}
                      placeholder="Ex.: x.com/BeamWalletPT_ES"
                    />
                  </div>
                </div>
                <div className={styles.storeAppImagePreview}>
                  <img src={mobilePreviewImage} alt="Beam App Store Preview" />
                </div>
              </div>
            </section>

            {/* Section 3: Store Activation */}
            <section className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>3</span>
                <h2>Store Activation</h2>
                <p className={styles.sectionSubtitle}>
                  Here you must provide us with the necessary information for
                  the activation of your store!
                </p>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="storeWebsite">
                  Store Website <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="url"
                  id="storeWebsite"
                  name="storeWebsite"
                  value={formData.storeWebsite}
                  onChange={handleChange}
                  placeholder="URL"
                  className={errors.storeWebsite ? styles.errorInput : ""}
                />
                {errors.storeWebsite && (
                  <span className={styles.errorText}>
                    {errors.storeWebsite}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>
                  Online store platform{" "}
                  <span className={styles.requiredStar}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="onlineStorePlatform"
                      value="woocommerce"
                      checked={formData.onlineStorePlatform === "woocommerce"}
                      onChange={handleChange}
                    />
                    WooCommerce
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="onlineStorePlatform"
                      value="prestashop"
                      checked={formData.onlineStorePlatform === "prestashop"}
                      onChange={handleChange}
                    />
                    Prestashop
                  </label>
                </div>
                {errors.onlineStorePlatform && (
                  <span className={styles.errorText}>
                    {errors.onlineStorePlatform}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="cashbackPercentage">
                  Fixed percentage of Cashback to be offered to the customer on
                  each purchase <span className={styles.requiredStar}>*</span>
                </label>
                <select
                  id="cashbackPercentage"
                  name="cashbackPercentage"
                  value={formData.cashbackPercentage}
                  onChange={handleChange}
                  className={errors.cashbackPercentage ? styles.errorInput : ""}
                >
                  <option value="">-- select --</option>
                  <option value="15">15%</option>
                  <option value="20">20%</option>
                  <option value="25">25%</option>
                  <option value="30">30%</option>
                  <option value="35">35%</option>
                  <option value="40">40%</option>
                  <option value="45">45%</option>
                  <option value="50">50%</option>
                  {/* Add more options as needed */}
                </select>
                {errors.cashbackPercentage && (
                  <span className={styles.errorText}>
                    {errors.cashbackPercentage}
                  </span>
                )}
              </div>

              <h3 className={styles.subSectionTitle}>
                Information for Settlements
              </h3>
              <p className={styles.sectionSubtitle}>
                Here you can provide us with the bank account that will receive
                settlements of sales made with Beam on your online store.
              </p>

              <div className={styles.formGroup}>
                <label htmlFor="bankName">
                  Bank Name <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="Bank Name"
                  className={errors.bankName ? styles.errorInput : ""}
                />
                {errors.bankName && (
                  <span className={styles.errorText}>{errors.bankName}</span>
                )}
              </div>

              <div className={styles.gridFields}>
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
                    placeholder="IBAN"
                    className={errors.iban ? styles.errorInput : ""}
                  />
                  {errors.iban && (
                    <span className={styles.errorText}>{errors.iban}</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="swiftCode">
                    Swift Code <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="swiftCode"
                    name="swiftCode"
                    value={formData.swiftCode}
                    onChange={handleChange}
                    placeholder="Swift Code"
                    className={errors.swiftCode ? styles.errorInput : ""}
                  />
                  {errors.swiftCode && (
                    <span className={styles.errorText}>{errors.swiftCode}</span>
                  )}
                </div>
              </div>

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

              {/* Submit Error Message */}
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
            </section>
          </form>
        )}
      </div>
    </>
  );
};

export default OsInstallationForm;
