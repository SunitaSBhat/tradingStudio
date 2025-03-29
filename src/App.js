import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import First from "./components/first.jsx";
import Home from "./components/home.jsx";
import Buildstrategy from "./components/buildStrategy.tsx";
import BuiltInStrategies from "./components/BuiltInStrategies.tsx";
import SavedStrategies from "./components/SavedStrategies.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/navbar.jsx";
function App() {


  return (
    <div className='bg'>
    <div id="gh">
      </div>
      <div className='actualvalue'>
    <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/begin" element={<First />} />
        <Route path="/second" element={<Buildstrategy />} /> 
        <Route path="/savedStrategies" element={<SavedStrategies/>} />
        <Route path="/builtInStrategies" element={<BuiltInStrategies/>} />
      </Routes>
      </div>
      </div>
  );
}

export default App;
