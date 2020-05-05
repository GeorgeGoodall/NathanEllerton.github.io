import React from 'react';
import backgroundImage from './Assets/Images/1.jpg';
import './App.css';


function App() {
  return (
    <div className="backgroundContainer">
        <img src={backgroundImage} className="image"></img>
    </div>
  );
}

export default App;
