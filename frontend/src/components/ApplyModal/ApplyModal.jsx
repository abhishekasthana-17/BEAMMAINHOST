import React, { useState } from "react";
import styles from "./ApplyModal.module.css";

const allowedMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ApplyModal = ({ isOpen, onClose, jobTitle = "" }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isOpen) return null;

  const validate = () => {
    setError("");
    if (!fullName.trim()) return setError("Full name is required"), false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Valid email is required"), false;
    if (!cvFile) return setError("Please attach your CV in PDF or DOC format"), false;
    if (cvFile && !allowedMimeTypes.includes(cvFile.type)) return setError("CV must be PDF or DOC/DOCX"), false;
    if (coverLetterFile && !allowedMimeTypes.includes(coverLetterFile.type)) return setError("Cover letter must be PDF or DOC/DOCX"), false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSuccess("");

    try {
      const form = new FormData();
      const [firstName, ...rest] = fullName.trim().split(" ");
      const lastName = rest.join(" ");
      form.append("firstName", firstName);
      form.append("lastName", lastName);
      form.append("email", email);
      form.append("positionArea", jobTitle);
      form.append("additionalInfo", message);
      if (cvFile) form.append("cv", cvFile);
      if (coverLetterFile) form.append("coverLetter", coverLetterFile);

      const res = await fetch(`/api/apply`, {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");

      setSuccess("Application submitted successfully.");
      setFullName("");
      setEmail("");
      setCvFile(null);
      setCoverLetterFile(null);
      setMessage("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 className={styles.title}>Apply Now</h2>
        {jobTitle ? <p className={styles.subtitle}>Position: {jobTitle}</p> : null}
        {error ? <div className={styles.error}>{error}</div> : null}
        {success ? <div className={styles.success}>{success}</div> : null}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Full Name
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.input}
              placeholder="Your full name"
              required
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className={styles.label}>
            Curriculum Vitae (PDF or DOC)
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(e) => setCvFile(e.target.files[0])}
              className={styles.file}
              required
            />
          </label>
          <label className={styles.label}>
            Cover Letter (optional)
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(e) => setCoverLetterFile(e.target.files[0])}
              className={styles.file}
            />
          </label>
          <label className={styles.label}>
            Message (optional)
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              placeholder="Write a short note for the recruiter"
            />
          </label>
          <button type="submit" className={styles.submitBtn} disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;


