import React from 'react';
import VideoComponent from "./VideoComponent"
import videos from "./Videos.json"

const Videos = () => {
    console.log(videos)
    
    return (
        <div id="Videos" className="Videos">
            <h1 className="VideosTitle">Videos</h1>
            <div className="VideosContainer">
                {videos.map((video)=>{
                    console.log(video)
                    return <VideoComponent videoID={video.id} title={video.title} description={video.description}/>
                })}
            </div>
        </div>
    );
}

export default Videos;
