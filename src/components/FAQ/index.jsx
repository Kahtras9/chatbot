import React, { useState } from "react";
import {
  FAQContainer,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  Title,
  Description,
  ArrowIcon
} from "./index.sc";
import { faqData } from "./FAQData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Most Asked Questions</Title>
      <Description>
        We are here to help you if you have any confusions. We have listed all the questions you might have.
      </Description>

      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleFAQ(index)}>
            {item.question}
            <ArrowIcon isActive={activeIndex === index} />
          </FAQQuestion>

          {activeIndex === index && (
            <FAQAnswer>
              {item.answer.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
            </FAQAnswer>
          )}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
