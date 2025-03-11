import React, { useState } from "react";
import {
  FeedbackContainer,
  Title,
  FeedbackContent,
  FeedbackImage,
  FeedbackText,
  FeedbackName,
  FeedbackTour,
  NavButton,
  NavWrapper
} from "./index.sc";
import { feedbackData } from "./FeedbackData";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const currentFeedback = feedbackData[currentIndex];

  return (
    <FeedbackContainer>
      <Title>See Our Client's Feedback</Title>

      <FeedbackContent>
        <FeedbackImage src={currentFeedback.image} alt={currentFeedback.name} />
        
        <div>
          <FeedbackText>"{currentFeedback.feedback}"</FeedbackText>
          <FeedbackName>{currentFeedback.name}</FeedbackName>
          <FeedbackTour>{currentFeedback.tour}</FeedbackTour>
        </div>
      </FeedbackContent>

      <NavWrapper>
        <NavButton onClick={prevFeedback}>&larr;</NavButton>
        <NavButton onClick={nextFeedback}>&rarr;</NavButton>
      </NavWrapper>
    </FeedbackContainer>
  );
};

export default Feedback;
