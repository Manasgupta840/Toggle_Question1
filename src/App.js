import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.component';
import Instagram from './Pages/InstaAccount/InstaAccount.component';
import Linkedin from './Pages/Linkedin/Linkedin.component';
import Youtube from './Pages/YoutubeAccount/YoutubeAccount.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Instagram' element={<Instagram/>} />
          <Route path='/Linkedin' element={<Linkedin/>} />
          <Route path='/Youtube' element={<Youtube/>} />

        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
