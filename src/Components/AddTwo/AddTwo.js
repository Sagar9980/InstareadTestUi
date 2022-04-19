import React from "react";
import ContentLayout from "../../Layout/ContentLayout";
import Button from "../Button/Button";
import Unlock from "../../Assets/unlock.png";
import "./AddTwo.css";
import { ReactComponent as Gold } from "../../Assets/gold.svg";

function AddTwo() {
  return (
    <ContentLayout>
      <div className="add__two__wrapper">
        <h1 style={{ color: "#3a4649" }}>
          A small investment for unlimited knowledge
        </h1>
        <p style={{ colro: "#3a4649" }}>
          Thousands of titles. A broad range of categories to choose from.
        </p>
        <div className="flex__content">
          <div className="image__block">
            <img src={Unlock} alt="unlock" width={"138px"} height={"138px"} />
            <p>-----------------------</p>

            <Gold />
          </div>
          <div className="text__block">
            <div className="text__block__element">
              <h3>Day 1</h3>
              <p>Unlock access to all content</p>
            </div>
            <div className="text__block__element">
              <h3>Day 7</h3>
              <p>Charged today unless you cancel</p>
            </div>
          </div>
        </div>
        <Button />
      </div>
    </ContentLayout>
  );
}

export default AddTwo;
