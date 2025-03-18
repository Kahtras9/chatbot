import styled from "styled-components";

export const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
`;

export const ChatbotButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ChatbotPopup = styled.div`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 360px;
  max-height: 500px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const ChatHeader = styled.div`
  background-color: #000;
  color: #fff;
  padding: 12px;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff4d4d;
  }
`;

export const ChatBody = styled.div`
  padding: 15px;
  height: 340px;
  overflow-y: auto;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ChatMessage = styled.div`
  background: ${({ isUser }) => (isUser ? "#007bff" : "#e1e1e1")};
  color: ${({ isUser }) => (isUser ? "#fff" : "#333")};
  padding: 12px;
  border-radius: 12px;
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  max-width: 80%;
  word-wrap: break-word;
  font-size: 0.9rem;
`;

export const ChatInputContainer = styled.form`
  display: flex;
  border-top: 1px solid #ccc;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  font-size: 0.9rem;
`;

export const SendButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0 0 12px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
