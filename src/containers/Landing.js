import React from "react";
import AppBarInnovanex from "../components/Landing/AppBar";
import Abstract from "../components/Landing/Abstract";
import Cooperators from "../components/Landing/Cooperators";
import About from "../components/Landing/About";
import Objectives from "../components/Landing/Objectives";
import Footer from "../components/Landing/Footer";
import Contact from "../components/Landing/Contact";
import BackToTop from "../components/BackToTop";
import Cover from "../components/Landing/Cover";
import Layout from "../Layout";
import Sites from "../components/Landing/Sites";
import CircleNavigation from "../components/Landing/CircleNavigation";

export default function Landing(props) {
  return (
    <Layout>
      <BackToTop props={props} />
      <div>
        <AppBarInnovanex />
      </div>
      <div>
        <Cover />
      </div>

      <div>
        <Abstract />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="objectives">
        <Objectives />
      </div>
      <div id="allies">
        <Cooperators />
      </div>
      <div id="sites">
        <Sites />
      </div>
      <div>
        <CircleNavigation/>
      </div>
      {/* <div>
        <TimeLine />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </Layout>
  );
}
