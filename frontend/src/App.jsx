import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  AboutPage,
  NewsPage,
  CareersPage,
  ApplyPage,
  InvestorsPage,
  TechnologyPartnersPage,
  LocalPartnersPage,
  PartnershipsPage,
  Banks,
  SoftwarePartners,
  VisionaryDev,
  BeamForBusiness,
  TermsPage,
  PrivacyPage,
  ContactPage,
  NotFoundPage,
  PayInStorePage,
  PayOnlinePage,
  HelpCenter,
  LsInstallationForm,
  OsInstallationForm,
  InvestorsForm,
  MobileDeveloper,
  JavaScalaDeveloper,
  PluginDeveloper,
  DiscoverFuture,
  GraphicDesigner,
  SeoSpecialist,
  FullStackWeb3Developer,
  Designer,
  SecurityDeveloper,
  SocialMediaSpecialist,
  InternationalProjectManager,
  Tester,
  CybersecurityDeveloper,
  SalesAgent,
  LpForm,
  CareerApplicationPage,
} from "./pages";
import MainLayout from "./components/Layout/MainLayout";
import ChatBot from "./components/ChatBot/ChatBot";
import ScrollToTop from "./components/ScrollToTop";
// import StrapiPage from "./components/StrapiPage";
// import StrapiAboutPage from "./components/StrapiAboutPage";
import NewsletterPopup from "./components/NewsletterPopup/NewsletterPopup";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route
              path="careers/spontaneous-application"
              element={<ApplyPage />}
            />
            <Route path="careers/apply" element={<ApplyPage />} />
            <Route
              path="careers/apply"
              element={<CareerApplicationPage />}
            />
            <Route path="investors" element={<InvestorsPage />} />
            <Route
              path="technology-partnerships"
              element={<TechnologyPartnersPage />}
            />
            <Route path="banks" element={<Banks />} />
            <Route path="software-partners" element={<SoftwarePartners />} />
            <Route path="visionary-developers" element={<VisionaryDev />} />
            <Route path="local-partners" element={<LocalPartnersPage />} />
            <Route path="lp-form" element={<LpForm />} />
            <Route path="partnerships" element={<PartnershipsPage />} />
            <Route path="pay-in-store" element={<PayInStorePage />} />
            <Route path="pay-online" element={<PayOnlinePage />} />
            <Route path="local-store" element={<BeamForBusiness />} />
            <Route path="terms-and-conditions" element={<TermsPage />} />
            <Route path="privacy-policy" element={<PrivacyPage />} />
            <Route path="contacts" element={<ContactPage />} />
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="ls-inst-form" element={<LsInstallationForm />} />
            <Route path="os-inst-form" element={<OsInstallationForm />} />
            <Route path="investors-form" element={<InvestorsForm />} />
            <Route
              path="careers/mobile-developer"
              element={<MobileDeveloper />}
            />
            <Route
              path="careers/java-scala-developer"
              element={<JavaScalaDeveloper />}
            />
            <Route
              path="careers/plugin-developer-for-e-commerce-platforms"
              element={<PluginDeveloper />}
            />
            <Route
              path="careers/discover-your-future-with-beam-wallet"
              element={<DiscoverFuture />}
            />
            <Route
              path="careers/graphic-designer"
              element={<GraphicDesigner />}
            />
            <Route path="careers/seo-specialist" element={<SeoSpecialist />} />
            <Route
              path="careers/fullstack-web3-developer"
              element={<FullStackWeb3Developer />}
            />
            <Route
              path="careers/designer"
              element={<Designer />}
            />
            <Route
              path="careers/security-developer"
              element={<SecurityDeveloper />}
            />
            <Route
              path="careers/social-media-specialist"
              element={<SocialMediaSpecialist />}
            />
            <Route
              path="careers/international-project-manager"
              element={<InternationalProjectManager />}
            />
            <Route
              path="careers/tester"
              element={<Tester />}
            />
            <Route
              path="careers/cybersecurity-developer"
              element={<CybersecurityDeveloper />}
            />
            <Route
              path="careers/sales-agent"
              element={<SalesAgent />}
            />
            {/* Dynamic CMS pages - Commented out for static conversion */}
            {/* <Route path="cms/:contentType/:slug" element={<StrapiPage />} /> */}
            {/* Test route for debugging */}
            {/* <Route
              path="what-we-offer"
              element={<StrapiPage contentType="pages" slug="what-we-offer" />}
            /> */}
            {/* Explicit 404 route */}
            <Route path="404" element={<NotFoundPage />} />
            {/* Catch-all route for dynamic pages - Commented out for static conversion */}
            {/* <Route path=":slug" element={<StrapiPage contentType="pages" />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <ChatBot />
        <NewsletterPopup />
      </Router>
    </>
  );
}

export default App;
