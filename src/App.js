import logo from './logo.svg';
import './App.css';
import Colorbox1 from './component/Colorbox1/Colorbox1.component';
import Colorbox2 from './component/Colorbox2/Colorbox2.component';
import { useState } from 'react';


function App() {
  const [color, setbool] = useState(true);
  return (
    <div className="App">
      {
        (color === true)
        ?
        <Colorbox1 />
        :
        <Colorbox2 />
      }
      <button style={{position: "absolute"}} onClick={_ => setbool(!color)}>Toggle it</button>

    </div>
  );
}

export default App;
