import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './compenant/Parametyseredbutton';
import ChatB from './compenant/ChatB';
import Parameters from './compenant/Cookiesbutton';
import Changes from './compenant/Rainbowbutton';
import Exerc from './compenant/Etoiledemerbutton';

function App() {
  let fun1 = () => 42;
  let fun2 = () => {
    return 'NYA';
  };
  let fun3 = () => {
    console.log(88);
    return 96;
  };

  let result = fun1();
  console.log(result);

  console.log(fun2());

  let fun4 = (pwet: any) => {
    return pwet + 2;
  };
  let i = 0;
  while (i < 10) {
    i = fun4(i);
    console.log(i);
  }

  let fun5 = (pwet: any, other: any) => {
    return pwet + 2;
  };
  let fun6 = function () {};
  function fun7() {
    return 42;
  }
  // setCount(()=>42);
  // setCount(fun1);
  console.log(33, fun4);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ChatB></ChatB>
        <p>Vite + React + soupe + Airbnb + Husky = 🔥</p>
        <p>
          <br />
          {<Parameters Start={0} Color= "water-button" Add={1} Name="Cookies"></Parameters>
          <Changes Deb= "Nya" Couleurs= "rainbow-button"Ajt= {7} North="Poney" ></Changes>
          <Exerc Quiere= {2} Colores= "rainbow-button" Nombre= {pwett} Appelido= "Magie" ></Exerc>}
          <br />
        </p>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a className="App-link" href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">
            Husky Docs
          </a>
          {' | '}
          <a className="App-link" href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">
            Airbnb JS Style Guide
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/airbnb/javascript/tree/master/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb React Style Guide
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/alessandropisu/vite-react-ts-minimal-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            Template repository
          </a>
          {/* <Welcome Name="mochis" Modificateur={1} Depart={0} Couleur="water-button" />
          <Welcome Name="cookies" Modificateur={1} Depart="pao" Couleur="rainbow-button" />
          <Welcome Name="poney" Modificateur="love" Depart="love" Couleur="rainbow-button" />
          <Welcome Name="etoile de mer" Modificateur={1} Depart={0} Couleur="water-button" /> */}
        </p>
      </header>
    </div>
  );
}
export default App;
