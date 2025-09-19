import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./DiscoverFuture.module.css";
import { countries } from "../utils/countries";

const API_URL = import.meta.env.VITE_API_URL;

const DiscoverFuture = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Set page title when component mounts
  useEffect(() => {
    document.title = "Discover Your Future With Beam Wallet - Beam Wallet";
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
    const requiredFields = ["firstName", "lastName", "country", "email"];

    requiredFields.forEach((field) => {
      if (!formData[field] || !formData[field].trim()) {
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/api/career-apply`, {
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
            firstName: "",
            lastName: "",
            country: "",
            email: "",
          });
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
      <Hero
        category="Careers"
        title="Discover Your Best Future With Beam Wallet"
      />

      <div className={styles.container}>
        <div className={styles.section}>
          <h1>Discover Your Best Future With Beam Wallet</h1>
          <p>
            Beam Wallet is opening doors to a world of possibilities and invites
            people from all over the globe to join our global team. Regardless
            of your age, color, gender, or background – what truly matters is
            that you are human and ready to make a difference. Here, we value
            who you are and your unique abilities.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Why Work with Beam Wallet?</h2>
          <p>
            Our philosophy is simple: we believe work should adapt to your life,
            not the other way around. With Beam Wallet, you have the freedom to
            work at your own pace, whenever it suits you, without unnecessary
            pressures. Whether you want to dedicate a few hours a week or dive
            headfirst into new challenges, the choice is yours. And the best
            part? You earn based on your effort, with guaranteed money always in
            your wallet.
          </p>
        </div>

        <div className={styles.section}>
          <h2>What Are We Looking For?</h2>
          <p>
            We're searching for individuals with diverse characteristics and
            skills. Beam Wallet values diversity and understands that each
            person brings a unique and valuable perspective. Whether you're
            highly communicative, analytical, or creative, there's a place for
            you here. Your life experiences, skills, and passions can find
            meaningful purpose with us.
          </p>
        </div>

        <div className={styles.section}>
          <h2>What Do You Get in Return?</h2>
          <p className={styles.skillList}>
            <strong>Total Flexibility:</strong> Work from anywhere, anytime.
            <br />
            <strong>Attractive Earnings:</strong> Earn in proportion to your
            effort and dedication, with fast and guaranteed payments.
            <br />
            <strong>Personal and Professional Growth:</strong> Be part of a
            company at the forefront of innovation and seize real development
            opportunities.
            <br />
            <strong>Global Community:</strong> Join an international network of
            passionate and inspiring colleagues.
            <br />
            <strong>Financial Independence:</strong> Beam Wallet isn't just a
            job opportunity; it's a path to achieving your financial freedom.
          </p>
        </div>

        <div className={styles.section}>
          <h2>What Do You Need to Bring?</h2>
          <p className={styles.skillList}>
            <strong>Proactivity and a Will to Grow:</strong> We're looking for
            individuals who see the future as an open field of opportunities.
            <br />
            <strong>Commitment to Excellence:</strong> Beam Wallet's success
            depends on the dedication of our team.
            <br />
            <strong>Humanity and Empathy:</strong> The world needs people who
            understand that at the core of every innovation are human
            connections.
          </p>
        </div>

        <div className={styles.section}>
          <h2>A Job That Makes a Difference</h2>
          <p>
            At Beam Wallet, you won't just be working; you'll be part of a
            global transformation. Every effort you make contributes to making
            the business world more efficient, fair, and innovative. Your impact
            will be felt by merchants, consumers, and entire communities.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Be the Protagonist of Your Future</h2>
          <p>
            If you're interested in living an independent life, with money
            always at your fingertips and the freedom to shape your own path,
            sign up now to schedule your online appointment for a brighter
            future. Don't miss the chance to transform your life with Beam
            Wallet!
          </p>
        </div>

        <div className={styles.formSection}>
          <h3>Fill the form to start your success journey!</h3>

          {submitSuccess ? (
            <div className={styles.successMessage}>
              <h3>Form Submitted Successfully!</h3>
              <p>
                Thank you for your submission. We will review your information.
              </p>
            </div>
          ) : (
            <form className={styles.applicationForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">
                    First Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    placeholder="Enter Your Last Name"
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
                <label htmlFor="email">
                  Email <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.errorInput : ""}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              {submitError && (
                <div className={styles.errorMessage}>
                  <p>{submitError}</p>
                </div>
              )}

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
      </div>
    </>
  );
};

export default DiscoverFuture;
