import React from "react";
import "./BookDetail.css";
import Image from "../../Assets/cover.jpg";
import { BiBook } from "react-icons/bi";
import { MdOutlineHeadphones } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ContentLayout from "../../Layout/ContentLayout";

function BookDetail() {
  return (
    <div className="book__detail__container">
      <ContentLayout>
        <div className="book__detail__content">
          <div className="book__image__section">
            <img
              src={Image}
              alt="book"
              width={"100%"}
              style={{ borderRadius: "4px" }}
            />
          </div>
          <div className="book__detail__section">
            <h1 className="book__title">
              Astrophysics for People in a Hurry Summary
            </h1>
            <p style={{ fontSize: "1.25rem", margin: "10px 0px" }}>
              Key Insights & Analysis
            </p>
            <p
              style={{
                color: "#8f95a3",
                fontSize: "1.188rem",
                margin: "10px 0px",
              }}
            >
              Neil deGrasse Tyson
            </p>
            <div className="book__options">
              <p className="book__option-menu">
                <BiBook /> 18 min read
              </p>
              <p className="book__option-menu">
                <MdOutlineHeadphones /> 14 min listen
              </p>
              <p className="book__option-menu">
                <BsBookmark /> Add to Library
              </p>
              <p className="book__option-menu">
                <AiOutlineShoppingCart /> Buy Books
              </p>
            </div>
            <div className="book__tag__section">
              <p className="tag">Business and Finance</p>
              <p className="tag">Business and Finance</p>
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}

export default BookDetail;
