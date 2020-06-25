import React from 'react';
import './App.css';
import Header from './components/Header';
import Porject from './components/Project';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
