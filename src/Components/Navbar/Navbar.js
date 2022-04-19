import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../Assets/instaread_logo_grey.svg";
import ContentLayout from "../../Layout/ContentLayout";

function Navbar() {
  return (
    <div className="navbar__container">
      <ContentLayout>
        <div className="navbar__content">
          <div className="logo__section">
            <Logo />
          </div>
          <div className="menu__section">
            <p className="menu">Discover</p>
            <p className="menu">Search</p>
            <p className="menu menu_selected">Try Instaread</p>
            <select>
              <option value="login">Log In</option>
              <option value="register">Register</option>
            </select>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}

export default Navbar;
