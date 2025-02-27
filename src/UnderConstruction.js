// src/UnderConstruction.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  const handleBackToHome = () => {
    window.location.href = "https://github.com/isacpxc"; // Redireciona para o link
  };

  return (
    <div className="under-construction">
      <div className="content">
        <FontAwesomeIcon icon={faHardHat} className="construction-icon" />
        <h1>Under Construction</h1>
        <p>We're working hard to bring you something amazing. Stay tuned!</p>
        <button className="home-button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
