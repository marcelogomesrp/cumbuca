import React from 'react';
import capa from './assets/logo.svg';
import './App.css';
import TooBar from './ToolBar';
import Jumbotron from './Jumbotron';
import Cardapio from './Cardapio';
import Pedido from './Pedido';
import Contato from './Contato';


function App() {
  return (
    <div className="App">
      <TooBar />
      <Jumbotron />
      <Cardapio />
      <Pedido />
      <Contato />
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
