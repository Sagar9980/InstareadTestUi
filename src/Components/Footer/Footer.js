import React from "react";
import ContentLayout from "../../Layout/ContentLayout";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import PlayStore from "../../Assets/playstore.png";
import AppStore from "../../Assets/appstore.png";

import "./Footer.css";

function Footer() {
  return (
    <ContentLayout>
      <div className="footer__wrapper">
        <div className="column column__apart">
          <div>
            <h2>Get Smarter in Minutes </h2>
            <p>Through audio & text formats.</p>
          </div>
          <div>
            <p>Terms Of Service | Privacy Policy</p>
            <p>© Instaread 2022. All rights reserved</p>
          </div>
        </div>
        <div className="column">
          <h4>Categories</h4>
          <p>New</p>
          <p>Popular</p>
          <p>Business & Economics</p>
          <p>Self-Help</p>
          <p>Politics</p>
          <p>Instaread Originals</p>
          <p>Health & Fitness</p>
          <p>Fiction</p>
          <p>Science</p>
          <p>Religion</p>
          <p>Sports & Recreation</p>
        </div>
        <div className="column">
          <h4>Company</h4>
          <p>Help & Contact</p>
          <p>Teams</p>
          <p>Articlea</p>
          <p>The Nugget</p>
          <p>Subscription FAQs</p>
        </div>
        <div className="column">
          <div className="social__icons">
            <FiTwitter />
            <AiOutlineFacebook />
            <FiInstagram />
            <TiSocialYoutubeCircular />
          </div>
          <img src={PlayStore} alt="" width={"200px"} />
          <img src={AppStore} alt="" width={"200px"} />
        </div>
      </div>
    </ContentLayout>
  );
}

export default Footer;
