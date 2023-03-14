import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [ajouter, setajouter] = useState(0);
  let fun1 =()=>42;
  let fun2 = ()=> {
    return 42;
  };
  let fun3 = ()=> {console.log(88)
  return 96;
  }
  let fun4 = (pwet:any)=>{
    return pwet +2;
  }
  let fun5 = (pwet:any,other:any)=>{
    return pwet +2;
  }
  let fun6 = function(){}
  function fun7 (){return 42}
// setCount(()=>42);
// setCount(fun1);
console.log(33,fun6)
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
        </p>
      </header>
    </div>
  );
}

export default App;
