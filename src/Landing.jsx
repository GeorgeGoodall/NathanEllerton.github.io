import React from 'react';
import backgroundImage from './Assets/Images/1.jpg';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import "./iconStyles.css";

const Landing = () => {
    return (
        <div className="backgroundContainer">
            <div className="image">
            <div className="aboutSection">
                <h1>Nathan Ellerton</h1>
                <p>is a bossman when it comes to photos and videos i guess</p>
                <div className="icons">
                    <FaFacebook className={"facebook icon"}/>
                    <FaInstagram className={"instergram icon"}/>
                    <FaYoutube className={"youtube icon"}/>
                    <FaLinkedin className={"linkedIn icon"}/>
                    <FaEnvelope className={"email icon"}/>
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
