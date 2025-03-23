import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import First from "./components/first.jsx";
import Buildstrategy from "./components/buildStrategy.tsx";
import SavedStrategies from "./components/SavedStrategies.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeContext } from "./components/ThemeContext";
import Nav from "./components/nav.tsx";
function App() {
  // const { theme } = useContext(ThemeContext);

  return (
    <div>
    
    <Nav/>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Buildstrategy />} /> 
        <Route path="/savedStrategies" element={<SavedStrategies/>} />
        <Route path="/second" element={<Buildstrategy />} /> 
      </Routes>
      </div>
  );
}

export default App;
