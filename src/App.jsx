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

const App = () => {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <About />
      <Services />
      <Trainings />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
