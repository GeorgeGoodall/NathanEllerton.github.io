import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import './transitions.css'
import Landing from './Landing'
import Photos from './Photos';
import Videos from './Videos/Videos';
import PageShell from './PageShell';


function App() {
  return (
    
      <div>
        
          <Landing />
          <Photos />
          <Videos 
            
          />
        
      </div>
    
  );
}

export default App;
