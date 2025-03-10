import React, { useState } from "react";
import {
  VideoContainer,
  BackgroundImage,
  Overlay,
  LeftContent,
  Description,
  RightContent,
  Title,
  VideoButton,
  NavigationButtons,
  NavButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./index.sc";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <VideoContainer>
      <BackgroundImage />
      <Overlay />

      <LeftContent>
        <Description>
          Each dirt bike is a masterpiece, combining rugged design with cutting-edge engineering. Whether you're an off-road adventurer or a dirt biking enthusiast, it's built to conquer every trail.
        </Description>
        <VideoButton onClick={openModal}>SEE VIDEO →</VideoButton>
      </LeftContent>

      <RightContent>
        <Title>Unleashing the latest tech-driven beasts for ultimate off-road performance</Title>
      </RightContent>

      <NavigationButtons>
        <NavButton>&larr;</NavButton>
        <NavButton>&rarr;</NavButton>
      </NavigationButtons>

      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/_xyVIcOHfn4?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ModalContent>
        </ModalOverlay>
      )}
    </VideoContainer>
  );
};

export default Video;
