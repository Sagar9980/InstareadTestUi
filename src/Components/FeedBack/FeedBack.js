import React from "react";
import ContentLayout from "../../Layout/ContentLayout";
import Img from "../../Assets/feedback.png";
import People from "../../Assets/people.png";
import "./FeedBack.css";
import Button from "../Button/Button";
import PlayStore from "../../Assets/playstore.png";
import AppStore from "../../Assets/appstore.png";

function FeedBack() {
  return (
    <ContentLayout>
      <ContentLayout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="feedback__wrapper">
            <div className="image__section">
              <div className="overlay">
                <div className="overlay__text">
                  <h1>Millions of</h1>
                  <h1>Happy Users</h1>
                  <p>growing with instaread</p>
                </div>
                <div className="overlay__images">
                  <img src={PlayStore} alt="" width={"150px"} />
                  <img src={AppStore} alt="" width={"150px"} />
                </div>
              </div>
              <img src={Img} alt="img" width={"400px"} />
            </div>
            <div className="text__section">
              <div className="feedback">
                <img src={People} alt="people" />
                <div>
                  <span className="people-name">Arty White</span>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className="feedback-text">
                    Never seen better quotes! Interface is sleek. This is 5 / 5.
                    The idea of getting only the most relevant quotes is
                    amazing. Love it 💜
                  </p>
                </div>
              </div>
              <div className="feedback">
                <img src={People} alt="people" />
                <div>
                  <span className="people-name">Arty White</span>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className="feedback-text">
                    Never seen better quotes! Interface is sleek. This is 5 / 5.
                    The idea of getting only the most relevant quotes is
                    amazing. Love it 💜
                  </p>
                </div>
              </div>
              <div className="feedback">
                <img src={People} alt="people" />
                <div>
                  <span className="people-name">Arty White</span>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className="feedback-text">
                    Never seen better quotes! Interface is sleek. This is 5 / 5.
                    The idea of getting only the most relevant quotes is
                    amazing. Love it 💜
                  </p>
                </div>
              </div>
              <div className="feedback">
                <img src={People} alt="people" />
                <div>
                  <span className="people-name">Arty White</span>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className="feedback-text">
                    Never seen better quotes! Interface is sleek. This is 5 / 5.
                    The idea of getting only the most relevant quotes is
                    amazing. Love it 💜
                  </p>
                </div>
              </div>
              <div className="feedback">
                <img src={People} alt="people" />
                <div>
                  <span className="people-name">Arty White</span>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className="feedback-text">
                    Never seen better quotes! Interface is sleek. This is 5 / 5.
                    The idea of getting only the most relevant quotes is
                    amazing. Love it 💜
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button />
        </div>
      </ContentLayout>
    </ContentLayout>
  );
}

export default FeedBack;
