import React from "react";
import { PopupContainer, PopupContent, CloseButton, Title, Description, Details, BookNowButton } from "./index.sc";

const Popup = ({ packageData, onClose }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{packageData.title}</Title>
        <Description>{packageData.description}</Description>
        <Details dangerouslySetInnerHTML={{ __html: packageData.details.replace(/\n/g, "<br>") }} />
        <BookNowButton>BOOK NOW</BookNowButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
