import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function MainLayout(props) {
  return (
    <div className="main-layout">
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
