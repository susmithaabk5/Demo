import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';


function App(onIncrement,onDecreament) {
  const [count,setCount] =useState(0)
  onIncrement = () =>{setCount(count+1)}
  onDecreament = () =>{setCount(count-1)}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecreament}>Decrement</button>
      <p>{count}</p>
    
   
  
      

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
