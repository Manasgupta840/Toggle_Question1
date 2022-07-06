import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from './component/Button/Button.component';

function App() {
  const [string , setstring] =useState("");
  const [value,setvalue] =useState("");


  const handle_text=(event)=>{
    setstring(event.target.value);
  }
  return (
    <div className="App">
      
      <h1>{value}</h1>
      <input type="text" value={string} onChange={handle_text}/>
      <Button setvalue={setvalue} setstring={setstring} string={string} />
    </div>
  );
}

export default App;
