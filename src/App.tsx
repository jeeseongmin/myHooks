import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { InputPage } from "@pages/InputPage";
import { TapPage } from "@pages/TapPage";
import Home from "@pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useInput" element={<InputPage />} />
        <Route path="/useTaps" element={<TapPage />} />
      </Routes>
    </>
  );
}

export default App;
