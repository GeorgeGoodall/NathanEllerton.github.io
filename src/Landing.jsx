import React from 'react';
import backgroundImage from './Assets/Images/1.jpg';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Landing = () => {
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
                <FaLinkedin className="icon"/>
                <FaEnvelope className="icon"/>
                </div>
            </div>
            <div className="navbar">
                <div className="navItem">Photos</div>
                <div className="navItem">Videos</div>
            </div>
            </div>
        </div>
    );
}

export default Landing;
