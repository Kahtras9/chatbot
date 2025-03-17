import React, { useState } from "react";
import bikeImage from "../../images/Subject.png";
import {
  Container,
  Content,
  Heading,
  Description,
  SeeMoreButton,
  ImageWrapper,
  Specs,
  SpecItem,
  SpecValue,
  SpecLabel,
  Pagination,
  PaginationNumber,
} from "./index.sc";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <Container>
      <Content>
        <Heading>RIDING INTO THE FUTURE WITH YAMAHA BIKES</Heading>
        <Description>
          Our futuristic bike collection merges cutting-edge technology with
          sleek design, promising an unparalleled ride that transcends
          traditional boundaries.
        </Description>

        <SeeMoreButton>
          SEE MORE <span className="arrow">→</span>
        </SeeMoreButton>

        <ImageWrapper>
          <img src={bikeImage} alt="Futuristic Bike" />
        </ImageWrapper>

        <Specs>
          <SpecItem>
            <SpecValue>1200</SpecValue>
            <SpecLabel>CC ENGINE BIKE</SpecLabel>
          </SpecItem>
          <SpecItem>
            <SpecValue>450</SpecValue>
            <SpecLabel>KM/H TOP SPEED</SpecLabel>
          </SpecItem>
          <SpecItem>
            <SpecValue>380</SpecValue>
            <SpecLabel>HORSE POWER</SpecLabel>
          </SpecItem>
        </Specs>
      </Content>

      {/* Instead of Dot circles, we render numbered pagination. */}
      <Pagination>
        {[1, 2, 3, 4].map((num) => (
          <PaginationNumber
            key={num}
            active={num === activeSlide}
            onClick={() => setActiveSlide(num)}
          >
            {num}
          </PaginationNumber>
        ))}
      </Pagination>
    </Container>
  );
};

export default Home;
