import React from 'react';
import capa from './assets/logo.svg';
import './App.css';
import TooBar from './ToolBar';

function App() {
  return (
    <div className="App">
      <TooBar />
      <header className="App-header">
        <img src={capa} className="App-logo" alt="capa" />
        <p>
          Em breve
        </p>
      </header>
    </div>
  );
}

export default App;
