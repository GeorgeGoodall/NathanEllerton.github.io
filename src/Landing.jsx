import React, {useState, useEffect} from 'react';
import backgroundImage from './Assets/Images/1.jpg';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import {Link} from "react-router-dom";
import "./iconStyles.css";
import nathanImage from "./Assets/Images/1.jpg"

const Landing = () => {

    const [backgroundLoaded, setbackgroundLoaded] = useState(false);


    return (
        <React.Fragment>
        <img className="backgroundContainer" src={nathanImage} style={{display: backgroundLoaded ? "block" : "none"}} onLoad={()=>{setbackgroundLoaded(true)}}></img>
        <div className="landingPage">
            
                <div className="aboutSection">
                    <h1>Nathan Ellerton</h1>
                    <p>Photographer, videographer, multi-skilled content creator.</p>

                    <div className="icons">
                        <a href="https://www.facebook.com/NathanJEllerton"><FaFacebook className={"facebook icon"}/></a>
                        <a href="https://www.instagram.com/nathanjellerton"><FaInstagram className={"instergram icon"}/></a>
                        <a href="https://www.youtube.com/c/nathanjellerton"><FaYoutube className={"youtube icon"}/></a>
                        <a href="https://www.linkedin.com/in/nathanjellerton"><FaLinkedin className={"linkedIn icon"}/></a>
                        <a href="mailto:nathanjellerton@gmail.com"><FaEnvelope className={"email icon"}/></a>
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
                        <a href="#gallery">PHOTOS</a>
                    </div>
                    <div className="navItem">
                        <a href="#videos">VIDEOS</a>
                    </div>
                </div>
            
        </div>
        </React.Fragment>
    );
}

export default Landing;
