import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 3rem;
  background-color: #0000FF;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLink = styled.span`
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffdf00;
    transform: translateX(5px);
  }

  &::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #ffdf00;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    transform: translate(-5px, -50%);
  }
`;

export const FooterContact = styled.div`
  max-width: 400px;
  line-height: 1.7;

  p:first-child {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  border-top: 1px solid #444;
  padding-top: 1rem;
`;

export const SocialIcons = styled.div`
  margin-top: 1.2rem;
  display: flex;
  gap: 1.5rem;
`;

export const SocialIcon = styled.a`
  color: #fff;
  background: linear-gradient(135deg, #1da1f2, #007bff);
  padding: 0.7rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0d8af0, #0056b3);
    transform: scale(1.15);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }
`;

export const MapEmbed = styled.iframe`
  margin-top: 1rem;
  border: none;
  border-radius: 12px;
  width: 100%;
  height: 200px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
`;
