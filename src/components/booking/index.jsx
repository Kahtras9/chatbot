import React, { useState } from "react";
import {
  BookingContainer,
  LeftSection,
  RightSection,
  Title,
  SubTitle,
  Form,
  Input,
  Select,
  TextArea,
  Button,
  FlexRow,
  LeftText,
} from "./index.sc";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    bookingDate: "",
    package: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
  };

  return (
    <BookingContainer>
      <LeftSection>
        <LeftText>Embark on a journey into the unknown</LeftText>
      </LeftSection>

      <RightSection>
        <Title>BOOK YOUR ADVENTURE</Title>
        <SubTitle>Choose Your Dirtbike or Tour Package</SubTitle>

        <Form onSubmit={handleSubmit}>
          <FlexRow>
            <Input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <Input type="number" name="age" placeholder="Age" onChange={handleChange} required />
          </FlexRow>

          <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />

          <Input type="date" name="bookingDate" onChange={handleChange} required />

          <Select name="package" onChange={handleChange} required>
            <option value="">Select Package</option>
            <option value="rental1">Dirtbike Rent 1 Day</option>
            <option value="rental3">Dirtbike Rent 3 Days</option>
            <option value="rental7">Dirtbike Rent 7 Days</option>
            <option value="mustang">Mustang Tour</option>
            <option value="manang">Manang Tour</option>
            <option value="markhu">Markhu Ride</option>
          </Select>

          <TextArea
            name="specialRequests"
            placeholder="Any special requests?"
            onChange={handleChange}
          />

          <Button type="submit">Book Now</Button>
        </Form>
      </RightSection>
    </BookingContainer>
  );
};

export default Booking;
