import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SubscriptionForm = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});

  const categoryOptions = [
    { value: 'investors', label: 'For Investors' },
    { value: 'businesses', label: 'For Businesses' },
    { value: 'beamers', label: 'For Beamers' },
    { value: 'tech-partners', label: 'For Technology Partners' },
    { value: 'banks', label: 'For Banks and Financial Institutions' },
    { value: 'careers', label: 'Careers' },
    { value: 'commercial-agents', label: 'For Commercial Agents' },
    { value: 'beam-token', label: 'Beam Token' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex?.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Category validation
    if (!category) {
      newErrors.category = 'Please select a category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    if (validateForm()) {
      onSubmit({ email, category });
      // Reset form after successful submission
      setEmail('');
      setCategory('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      {/* Email Input */}
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e?.target?.value)}
        error={errors?.email}
        required
        className="w-full"
      />
      {/* Category Selection */}
      <Select
        label="Select Category"
        placeholder="Choose your interest"
        options={categoryOptions}
        value={category}
        onChange={setCategory}
        error={errors?.category}
        required
        className="w-full"
      />
      {/* Subscribe Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        fullWidth
        loading={isLoading}
        className="bg-primary hover:bg-accent text-white font-body"
      >
        Subscribe Now
      </Button>
    </form>
  );
};

export default SubscriptionForm;