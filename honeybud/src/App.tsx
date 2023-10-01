import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../assets/font/ReemKufi-Regular.ttf';
import '../assets/font/ReemKufi-Medium.ttf';
import '../assets/font/ReemKufi-Bold.ttf';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </>
  );
}


export default App;