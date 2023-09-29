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

function App() {
  return (
    <div className="FrontPage">
      <Header />
      <Banner />
      <div className= "Strips">
        <Strip />
        <Strip />
      </div>
      <Catalog />
    </div>
  );
}

export default App;
