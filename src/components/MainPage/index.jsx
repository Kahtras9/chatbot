// components/MainPage.jsx
import React from "react";
import Navbar from "../navbar";
import Home from "../home";
import Video from "../video";
import Spec from "../specs";
import Tour from "../tour";
import Booking from "../booking";
import Feedback from "../feedback";
import FAQ from "../FAQ";
import Footer from "../footer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <Video />
      </div>
      <div id="bikes">
        <Spec />
      </div>
      <div id="tour">
        <Tour />
      </div>
      <div id="booking">
        <Booking />
      </div>
      <div id="feedbacks">
        <Feedback />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
