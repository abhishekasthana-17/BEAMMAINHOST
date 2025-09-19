import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import SocialSidebar from "../SocialSidebar/SocialSidebar";
import ConsentBanner from "../ConsentBanner/ConsentBanner";
import PageShare from "../PageShare/PageShare";

const MainLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <SocialSidebar />
      <PageShare />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  );
};

export default MainLayout;
