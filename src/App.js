import React from 'react';
import './App.css';
import Header from './components/Header';
import Porject from './components/Project';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="portrait">
        <div className="imgNote">
          내용을 입력하세요.
        </div>
      </div>
      <div className="contents">
        <Porject></Porject>
        <Skills></Skills>
        <Interest></Interest>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
