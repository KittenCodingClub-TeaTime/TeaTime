import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [ajouter, setajouter] = useState(0);
  const [enplus, setEnplus] = useState('patate');
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
        <p>Vite + React + soupe + Airbnb + Husky = 🔥</p>
        <p>
          <button
            className="rainbow-button"
            type="button"
            onClick={
              () =>
                setajouter((preajouter) => {
                  return preajouter + 1;
                })

              // setCount(42)
              // setCount((prevCount) => {
              //   console.log(prevCount);
              //   return prevCount + 10;
              // })
            }
          >
            count is: {ajouter}cookies
          </button>
          <br />
          <br />
          <button
            className="rainbow-button"
            type="button"
            onClick={() =>
              setCount((prevCount) => {
                let obj = { jeSuisUneClé: 1, itou: '2' };
                let array = [1, 2, 3];
                console.log(prevCount, obj, array);
                console.log(prevCount);
                obj.itou = '123soleil';
                console.log(obj);
                return prevCount + 1;
              })
            }
          >
            count is: {count}poney
          </button>
        </p>
        {/* un deux troi */}
        <button
          className="water-button"
          type="button"
          onClick={() =>
            setEnplus((nya) => {
              return nya + ' nya';
            })
          }
        >
          Compteur de : {enplus} etoile de mer
        </button>
        {/* un deux troi */}
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
          <Welcome Name="mochis" Modificateur={1} Depart={0} Couleur="water-button" />
          <Welcome Name="cookies" Modificateur={1} Depart="pao" Couleur="rainbow-button" />
          <Welcome Name="poney" Modificateur="love" Depart="love" Couleur="rainbow-button" />
          <Welcome Name="etoile de mer" Modificateur={1} Depart={0} Couleur="water-button" />
        </p>
      </header>
    </div>
  );
}

function Welcome(props: { Name: string; Modificateur: string | Number; Depart: string | Number; Couleur: string }) {
  const [ajouter, setajouter] = useState(props.Depart);
  return (
    <button
      className={props.Couleur}
      type="button"
      onClick={() =>
        setajouter((preajouter: any) => {
          return preajouter + props.Modificateur;
        })
      }
    >
      count is:{ajouter}
      {props.Name}
    </button>
  );
}
export default App;
