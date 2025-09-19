// frontend/src/components/FAQ/FAQ.jsx
import React, { useState } from "react";
import "./FAQ.css";
import image360 from "../../assets/images/360.jpg";

const FAQ = () => {
  // Sample FAQ data
  const faqData = [
    {
      id: 1,
      question: "Who can join BEAM?",
      answer:
        "Anyone can create their own Beam account! Just download the app for free.",
    },
    {
      id: 2,
      question: "How many Cards can I associate?",
      answer:
        "You can associate up to 10 cards, debit, credit, national or international cards!",
    },
    {
      id: 3,
      question: "My rewards have an expiration date?",
      answer:
        "No! You can spend in any participating store, without expiration date or conditions! Partner campaigns, however, are of a temporary nature and deadlines apply. These are stated in the Terms and Conditions.",
    },
    {
      id: 4,
      question: "Where can I use my discounts?",
      answer:
        "You can spend your rewards at any participating store or service!",
    },
    {
      id: 5,
      question: "How do I validate my card?",
      answer:
        "1. Enter your card data in the Beam Wallet App.\n2. A verification amount will be debited from your account and then deposited automatically to confirm that the associated card is real and trusted.",
    },
    {
      id: 6,
      question: "How to use beam wallet?",
      answer:
        "It's easy! Just install the app and start saving every time you make a payment.",
    },
  ];

  // State to track which question is expanded (default to first one)
  const [activeQuestion, setActiveQuestion] = useState(1);

  // Toggle question expansion
  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-container">
      {/* New Header for Titles */}
      <div className="faq-header">
        <h3 className="faq-subtitle">FAQ</h3>
        <h2 className="faq-title">Have any questions?</h2>
      </div>

      {/* Content: Questions and Illustration */}
      <div className="faq-content">
        {/* Questions Section */}
        <div className="faq-text">
          <div className="faq-questions">
            {faqData.map((item) => (
              <div key={item.id} className="faq-item">
                <div
                  className={`faq-question ${
                    activeQuestion === item.id ? "active" : ""
                  }`}
                  onClick={() => toggleQuestion(item.id)}
                >
                  <h4>{item.question}</h4>
                  <span className="faq-arrow">
                    {activeQuestion === item.id ? "↑" : "↓"}
                  </span>
                </div>
                {activeQuestion === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Illustration Section */}
        <div className="faq-illustration">
          <img src={image360} alt="FAQ Illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
