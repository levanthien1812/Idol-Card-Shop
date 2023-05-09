import React from "react";
import "./About.css";
import ProductCategories from "../../components/About/ProductCategories/ProductCategories";
import Services from "../../components/About/Services/Services";
import GetStarted from "../../components/About/GetStarted/GetStarted";

function About() {
  return (
    <div>
      <GetStarted />
      <ProductCategories />
      <Services />
    </div>
  );
}

export default About;
