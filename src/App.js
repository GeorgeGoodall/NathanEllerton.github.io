import React from 'react';
import backgroundImage from './Assets/Images/1.jpg';
import './App.css';

import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'


function App() {
  return (
    <div className="backgroundContainer">
        <div className="image">
          <div className="aboutSection">
            <h1>Nathan Ellerton</h1>
            <p>is a bossman when it comes to photos and videos i guess</p>
            <div className="icons">
              <FaFacebook className="icon"/>
              <FaInstagram className="icon"/>
              <FaYoutube className="icon"/>
              <FaEnvelope className="icon"/>
            </div>
          </div>
          <div className="navbar">
          
          </div>
        </div>
    </div>
  );
}

export default App;
