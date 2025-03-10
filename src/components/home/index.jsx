import React, { useState } from "react";
import bikeImage from "../../images/Subject.png";
import {
  Container,
  Content,
  Heading,
  Description,
  Button,
  ImageWrapper,
  Specs,
  SpecItem,
  SpecValue,
  SpecLabel,
  Pagination,
  Dot,
} from "./index.sc";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <Container>
      <Content>
        <Heading>
          RIDING INTO THE FUTURE <br /> WITH DIRT BIKES
        </Heading>
        <Description>
          Our bike collection merges cutting-edge technology with sleek design, delivering an unbeatable ride for conquering off-road trails and pushing the limits of adventure.
        </Description>
        <Button>SEE BIKES →</Button>
      </Content>

      <ImageWrapper>
        <img src={bikeImage} alt="Futuristic Bike" />
        <Specs>
          <SpecItem>
            <SpecValue>250</SpecValue>
            <SpecLabel>CC ENGINE BIKE</SpecLabel>
          </SpecItem>
          <SpecItem>
            <SpecValue>130</SpecValue>
            <SpecLabel>KM/H TOP SPEED</SpecLabel>
          </SpecItem>
          <SpecItem>
            <SpecValue>38</SpecValue>
            <SpecLabel>HORSE POWER</SpecLabel>
          </SpecItem>
        </Specs>
      </ImageWrapper>

      <Pagination>
        {[1, 2, 3, 4].map((num) => (
          <Dot
            key={num}
            active={num === activeSlide}
            onClick={() => setActiveSlide(num)}
          />
        ))}
      </Pagination>
    </Container>
  );
};

export default Home;
