import React, { useEffect } from 'react';
import './App.css';
import './assets/font/ReemKufi-Regular.ttf';
import './assets/font/ReemKufi-Medium.ttf';
import './assets/font/ReemKufi-Bold.ttf';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage";
import { LoginPage } from "./pages/login/LoginPage";
import { Home} from "./pages/home/Home";
import { OAuthRedirectHandler } from "./services/OAuthRedirectHandler"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/callback" element={<OAuthRedirectHandler />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
