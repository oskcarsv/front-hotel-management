import React from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";


import "./mainPage.css";

export const MainPage = () => {
  const text = "¡Bienvenido a la página principal!";
  const isFetching = false;

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
      </div>
    </div>
  );
};
