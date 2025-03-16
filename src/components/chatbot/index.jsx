import React, { useState, useRef, useEffect } from "react";
import {
  ChatbotContainer,
  ChatbotButton,
  ChatbotPopup,
  ChatHeader,
  ChatBody,
  ChatInputContainer,
  ChatInput,
  SendButton,
  ChatMessage,
  CloseButton,
} from "./index.sc";
import { getBotResponse } from "./chatbotUtils";
import sentSound from "../../assets/message-sent.wav";
import receivedSound from "../../assets/message-received.wav";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const sentAudio = useRef(new Audio(sentSound));
  const receivedAudio = useRef(new Audio(receivedSound));
  const chatBodyRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const playSentSound = () => sentAudio.current.play();
  const playReceivedSound = () => receivedAudio.current.play();

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    playSentSound();

    if (isFirstMessage) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Hi! How can I assist you with dirtbike rentals or tours today?", isUser: false },
        ]);
        playReceivedSound();
        setIsFirstMessage(false);
      }, 500);
    } else {
      const botResponse = getBotResponse(input);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
        playReceivedSound();
      }, 1000);
    }

    setInput("");
  };

  return (
    <ChatbotContainer>
      {isOpen && (
        <ChatbotPopup>
          <ChatHeader>
            Dirtbike Assistant
            <CloseButton onClick={toggleChatbot}>×</CloseButton>
          </ChatHeader>

          <ChatBody ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <ChatMessage key={index} isUser={msg.isUser}>
                {msg.text}
              </ChatMessage>
            ))}
          </ChatBody>

          <ChatInputContainer onSubmit={handleSend}>
            <ChatInput
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <SendButton type="submit">Send</SendButton>
          </ChatInputContainer>
        </ChatbotPopup>
      )}

      <ChatbotButton onClick={toggleChatbot}>
        {isOpen ? "×" : "💬"}
      </ChatbotButton>
    </ChatbotContainer>
  );
};

export default Chatbot;
