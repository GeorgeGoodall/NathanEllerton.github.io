import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Landing from './Landing'
import Photos from './Photos';
import Videos from './Videos/Videos.jsx';
import Contact from './Contact/Contact';


function App() {
  return (
    
      <div>
          <Landing />
          <Photos />
          <Videos />
          <Contact />
      </div>
    
  );
}

export default App;
