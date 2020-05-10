import React from 'react';
import Youtube from 'react-youtube';
import "./Video.css";

const VideoComponent = (props) => {

    const {videoID, title, description} = props;

    return (
        <div className="VideoComponent">
            <Youtube 
                videoId={videoID}
                containerClassName={"playerContainer"}
                className={"player"}
            />
            <div className="videoAbout">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default VideoComponent;
