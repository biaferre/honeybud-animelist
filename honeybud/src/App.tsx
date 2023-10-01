import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/font/ReemKufi-Regular.ttf';
import './assets/font/ReemKufi-Medium.ttf';
import './assets/font/ReemKufi-Bold.ttf';
import {Header} from './components/header/Header'
import {Banner} from './components/banner/Banner'
import {Strip} from './components/strip/Strip'
import {Catalog} from './components/catalog/Catalog'
import {Credits} from './components/credits/Credits'


function App() {
  return (
    <div className="FrontPage">
      <div className= "FixedHeader">
        <Header />
      </div>
        <Banner />
        <div className= "LargeStrips">
          <Strip />
          <Strip />
        </div>
        <div className= "EndofPage">
          <Catalog />
          <Credits />
        </div>
      </div>
  );
}

export default App;
