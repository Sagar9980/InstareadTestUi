import React from "react";
import ContentLayout from "../../Layout/ContentLayout";
import Image from "../../Assets/cover.jpg";
import "./MoreBooks.css";

function MoreBooks() {
  return (
    <div className="morebooks__wrapper">
      <ContentLayout>
        <h3 style={{ fontSize: "20px" }}>Similar Instareads</h3>
        <div className="more__books__section">
          <div className="more__books__card">
            <img src={Image} alt="book" width={"200px"} />
            <p className="book__title">You Can Win</p>
            <p className="book__author">Tony Robbins</p>
          </div>
          <div className="more__books__card">
            <img src={Image} alt="book" width={"200px"} />
            <p className="book__title">You Can Win</p>
            <p className="book__author">Tony Robbins</p>
          </div>
          <div className="more__books__card">
            <img src={Image} alt="book" width={"200px"} />
            <p className="book__title">You Can Win</p>
            <p className="book__author">Tony Robbins</p>
          </div>
          <div className="more__books__card">
            <img src={Image} alt="book" width={"200px"} />
            <p className="book__title">You Can Win</p>
            <p className="book__author">Tony Robbins</p>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}

export default MoreBooks;
