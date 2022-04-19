import React from "react";
import ContentLayout from "../../Layout/ContentLayout";
import "./AddOne.css";
import Photo from "../../Assets/iphone.png";
import Button from "../Button/Button";

function AddOne() {
  return (
    <ContentLayout>
      <div className="add__one__wrapper">
        <div className="background"></div>
        <div className="add__one__content">
          <div className="image__section">
            <img src={Photo} alt="img" />
          </div>
          <div className="detail__section">
            <p
              style={{ fontSize: "16px", fontWeight: "bold", color: "#8f95a3" }}
            >
              Read on the go!
            </p>
            <h2>Eyes on the Road?</h2>
            <h2>Hands on barbello?</h2>
            <p style={{ color: "#3a4649", fontSize: 16 }}>
              No problem: all Instareads are converted to audio for your
              listening pleasure!
            </p>
            <Button />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default AddOne;
