// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/login";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
};

export default App;
