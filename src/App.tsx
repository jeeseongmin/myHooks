import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { InputPage } from "@pages/InputPage";
import { TabPage } from "@pages/TabPage";
import Home from "@pages/Home";
import { OutsideClickPage } from "@pages/OutsideClickPage";
import TitlePage from "@pages/TitlePage";
import FullScreenPage from "@pages/FullScreenPage";
import NotificationPage from "@pages/NotificationPage";
import AxiosPage from "@pages/AxiosPage";
import ConfirmPage from "@pages/ConfirmPage";
import PreventLeavePage from "@pages/PreventLeavePage";
import NetworkPage from "@pages/NetworkPage";
import FadeInPage from "@pages/FadeInPage";
import BeforeLeavePage from "@pages/BeforeLeavePage";
import ScrollPage from "@pages/ScrollPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/tabs" element={<TabPage />} />
        <Route path="/title" element={<TitlePage />} />
        <Route path="/outsideClick" element={<OutsideClickPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/preventLeave" element={<PreventLeavePage />} />
        <Route path={"/beforeLeave"} element={<BeforeLeavePage />} />
        <Route path={"/fadeIn"} element={<FadeInPage />} />
        <Route path={"/network"} element={<NetworkPage />} />
        <Route path={"/scroll"} element={<ScrollPage />} />
        <Route path={"/fullscreen"} element={<FullScreenPage />} />
        <Route path={"/notification"} element={<NotificationPage />} />
        <Route path={"/axios"} element={<AxiosPage />} />
      </Routes>
    </>
  );
}

export default App;
