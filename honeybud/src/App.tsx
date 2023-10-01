import React, { useEffect } from 'react';
import './App.css';
import './assets/font/ReemKufi-Regular.ttf';
import './assets/font/ReemKufi-Medium.ttf';
import './assets/font/ReemKufi-Bold.ttf';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth-callback" element={<OAuthCallbackComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

function OAuthCallbackComponent() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code= urlParams.get('code');
        if (code) {
            localStorage.setItem('authorization_code', code);
        }
    }, []);
    return <div>Authenticating...</div>
}