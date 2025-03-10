import React from "react";
import {
  SpecContainer,
  ContentWrapper,
  SpecsWrapper,
  SpecColumn,
  SpecItem,
  SpecLabel,
  SpecValue,
  ImageWrapper,
  SpecImage,
  Title,
  Description,
  NavigationButtons,
  NavButton,
} from "./index.sc";
import bikeImage from "../../images/CX.jpg";

const Spec = () => {
  return (
    <SpecContainer>
      <Title>Engine & Transmission</Title>
      <Description>
        Detailed specifications of our high-performance dirt bike, designed for ultimate off-road experiences.
      </Description>

      <ContentWrapper>
        <SpecsWrapper>
          <SpecColumn>
            <SpecItem>
              <SpecLabel>Displacement:</SpecLabel>
              <SpecValue>249.0ccm</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Engine Type:</SpecLabel>
              <SpecValue>Single Cylinder, 4 Stroke</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Compression:</SpecLabel>
              <SpecValue>11.6:1</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Bore X Stroke:</SpecLabel>
              <SpecValue>77.0×53.6mm</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Ignition:</SpecLabel>
              <SpecValue>ECU</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Fuel System:</SpecLabel>
              <SpecValue>Electronic Fuel Injection (EFI)</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Gearbox:</SpecLabel>
              <SpecValue>6-Speed</SpecValue>
            </SpecItem>
          </SpecColumn>

          <SpecColumn>
            <SpecItem>
              <SpecLabel>Front Suspension:</SpecLabel>
              <SpecValue>48mm Inverted Single Chamber</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Rear Suspension:</SpecLabel>
              <SpecValue>Single Shock with Spring pre-load</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Front Tyre:</SpecLabel>
              <SpecValue>110/100-18</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Front Brake:</SpecLabel>
              <SpecValue>Nissin Single Disc (240mm / 9.4")</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Rear Brake:</SpecLabel>
              <SpecValue>Nissin Single Disc (240mm / 9.4")</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Seat Height:</SpecLabel>
              <SpecValue>920 mm (38 inches)</SpecValue>
            </SpecItem>
            <SpecItem>
              <SpecLabel>Fuel Capacity:</SpecLabel>
              <SpecValue>6.5 Liters</SpecValue>
            </SpecItem>
          </SpecColumn>
        </SpecsWrapper>

        <ImageWrapper>
          <SpecImage src={bikeImage} alt="Bike Specification" />
        </ImageWrapper>
      </ContentWrapper> 
        <NavigationButtons>
              <NavButton>&larr;</NavButton>
              <NavButton>&rarr;</NavButton>
        </NavigationButtons>
    </SpecContainer>

  );
};

export default Spec;
