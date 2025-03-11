import Navbar from "./components/navbar";
import Home from "./components/home";
import Video from "./components/video";
import Spec from "./components/specs";
import Tour from "./components/tour";
import Booking from "./components/booking";
import Feedback from "./components/feedback";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><Video /></div>
      <div id="bikes"><Spec /></div>
      <div id="tour"><Tour /></div>
      <div id="booking"><Booking /></div>
      <div id="feedbacks"><Feedback /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </>
  );
};

export default App;
