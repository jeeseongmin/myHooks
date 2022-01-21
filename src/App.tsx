import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { InputPage } from "@pages/InputPage";
import { TabPage } from "@pages/TabPage";
import Home from "@pages/Home";
import { ClickPage } from "@pages/ClickPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/tabs" element={<TabPage />} />
        <Route path={"/click"} element={<ClickPage />} />
      </Routes>
    </>
  );
}

export default App;
