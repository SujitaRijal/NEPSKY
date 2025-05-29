import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Landingpage from "../LandingPage/landingpage";
import Services from "../Services/Services";
import Training from "../Trainings/Training";
import Testimonial from "../Testimonials/Testimonial";
import Explore from "../Explore/Explore";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Work from "../Work/Work";

const Home = () => {
  return (
    <>
      <Landingpage />
      <About />
      <Services />
      <Training />
      <Testimonial />
      <Work />
      <Explore />
      <Contact />
    </>
  );
};

export default Home;
