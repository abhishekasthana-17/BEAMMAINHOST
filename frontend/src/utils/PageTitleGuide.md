# Page Title Implementation Guide

This document describes how to add page titles to React components.

## Standard Implementation for All Pages

1. Import useEffect from React:

```jsx
import React, { useEffect } from "react";
```

2. Add the useEffect hook inside your component to set the page title:

```jsx
const YourComponent = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Your Page Title - Beam Wallet";
  }, []);

  // Rest of your component
};
```

## Titles to Implement

Use these exact titles for the following pages:

- HomePage: "Beam Wallet | Pay Faster and Earn more - Beam Wallet"
- AboutPage: "About Beam Wallet"
- NewsPage: "News - Beam Wallet"
- CareersPage: "Careers - Beam Wallet"
- ApplyPage: "Spontaneous Application - Beam Wallet"
- HelpCenter: "Help Center - Beam Wallet"
- InvestorsPage: "Investors - Beam Wallet"
- Banks: "Beam Wallet - Unlocking New Opportunities: Beam Wallet Partners with Banks"
- SoftwarePartners: "Software Partners - Beam Wallet"
- VisionaryDev: "Visionary Developers - Beam Wallet"
- PayInStorePage: "Pay in Store - Beam Wallet"
- PayOnlinePage: "Pay Online - Beam Wallet"
- BeamForBusiness: "Local Store - Beam Wallet"
- GraphicDesigner: "Unlock Your Potential as a Graphic Designer at Beam Wallet"
- SeoSpecialist: "SEO Specialist - Beam Wallet"
- JavaScalaDeveloper: "Java/Scala Developer - Beam Wallet"
- MobileDeveloper: "Mobile Developer - Beam Wallet"
- PluginDeveloper: "Plugin Developer for E-Commerce Platforms - Beam Wallet"
- DiscoverFuture: "Discover Your Future With Beam Wallet - Beam Wallet"
- InvestorsForm: "Investors Form - Beam Wallet"
- LpForm: "Local Partners Form - Beam Wallet"
- TechnologyPartnersPage: "Technology Partners - Beam Wallet"
- LocalPartnersPage: "Local Partners - Beam Wallet"
- PartnershipsPage: "Partnerships - Beam Wallet"
- TermsPage: "Terms and Conditions - Beam Wallet"
- PrivacyPage: "Privacy Policy - Beam Wallet"
- ContactPage: "Contact Us - Beam Wallet"
- NotFoundPage: "Page Not Found - Beam Wallet"
- LsInstallationForm: "Local Store Installation Form - Beam Wallet"
- OsInstallationForm: "Online Store Installation Form - Beam Wallet"
