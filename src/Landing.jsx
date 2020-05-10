import React from 'react';
import backgroundImage from './Assets/Images/1.jpg';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import {Link} from "react-router-dom";
import "./iconStyles.css";

const Landing = () => {
    return (
        <div className="backgroundContainer">
            
                <div className="aboutSection">
                    <h1>Nathan Ellerton</h1>
                    <p>Photographer, Videographer, Multiskilled Content Creator.</p>

                    <div className="icons">
                        <FaFacebook className={"facebook icon"}/>
                        <FaInstagram className={"instergram icon"}/>
                        <FaYoutube className={"youtube icon"}/>
                        <FaLinkedin className={"linkedIn icon"}/>
                        <FaEnvelope className={"email icon"}/>
                        <svg width='0' height='0'>
                            <radialGradient id='instagram-gradient' r='150%' cx='30%' cy='107%'>
                            <stop stopColor='#fdf497' offset='0' />
                            <stop stopColor='#fdf497' offset='0.05' />
                            <stop stopColor='#fd5949' offset='0.45' />
                            <stop stopColor='#d6249f' offset='0.6' />
                            <stop stopColor='#285AEB' offset='0.9' />
                            </radialGradient>
                        </svg>
                    </div>
                </div>
                <div className="navbar">
                    <div className="navItem">
                        <a href="#Gallary">Photos</a>
                    </div>
                    <div className="navItem">
                        <a href="#Videos">Videos</a>
                    </div>
                </div>
            
        </div>
    );
}

export default Landing;
