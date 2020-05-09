import React from 'react';
import Youtube from 'react-youtube';
import "./Video.css";

const VideoComponent = () => {
    return (
        <div className="VideoComponent">
            <Youtube 
                videoId={"eIR4FtSb-0Y"}
                containerClassName={"playerContainer"}
                className={"player"}
            />
            <div className="videoAbout">
                <h1>25ish Cartoon Impressions</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis praesentium fuga vitae dolore dolorem ratione debitis obcaecati laudantium minima facilis quidem dicta, officia placeat doloremque. Delectus praesentium asperiores quae?
                </p>
            </div>
        </div>
    );
}

export default VideoComponent;
