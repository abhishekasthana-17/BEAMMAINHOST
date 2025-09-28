import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { StrapiFooter } from "../Footer";
import ConsentBanner from "../ConsentBanner/ConsentBanner";
import PageShare from "../PageShare/PageShare";

const MainLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <PageShare />
      <main className="main-content">
        <Outlet />
      </main>
      <StrapiFooter />
      <ConsentBanner />
    </>
  );
};

export default MainLayout;
