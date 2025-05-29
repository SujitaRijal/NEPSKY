import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/LandingPage/landingpage";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Trainings from "./components/Trainings/Training";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/Button/ScrollToTopButton";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonial";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Training" element={<Trainings />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>

      <ScrollToTopButton />
    </div>
  );
};

export default App;
