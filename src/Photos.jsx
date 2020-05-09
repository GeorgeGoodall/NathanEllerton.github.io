import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "react-image-gallery";
import {Link} from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import feed from "./feed.json"

import "./Photos.css";

const Photos = () => {
  const token =
    "IGQVJYNUV2ZAjdzRDJyQU5jYUY1anIycy1sdEdLMHV5X0o2YkVaUy1wWWpkUC1LRDZAYLXdGUjJoQWFFaXZAMd0pjMW1oOUZAuV2NGdHhzX1hpc201bFVTc1BKYlBHMnVaVVdwS1N4VXIzLWp5UklPWUJSRURwamdOS0gtOTdj";
  const imageID = 17910009187431986;

  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const loadImages = async () => {
    let imageData = {};
    try{
      imageData = await axios.get("/instergram/getimages");
    }
    catch (err){
      console.log(err);
      imageData.data = feed;
    }
    
    
    for (let i in imageData.data.data) {
        const image = imageData.data.data[i];
        getMeta(image.media_url, (width, height) => {
            image.width = width;
            image.height = height;

            let image_temp = {};
            image_temp.original = image.media_url;
            image_temp.thumbnail = image.media_url;
            image_temp.originalClass = "featured-slide";
            let images_temp = images;
            images_temp.push(image_temp);
            if(i == imageData.data.data.length-1){
                console.log("done")
                setImages(images_temp);
                setImagesLoaded(true);
            }
        });
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const getMeta = async (url, callback) => {
    var img = new Image();
    img.onload = function () {
      callback(this.width, this.height);
    };
    img.src = url;
  };


  console.log("render")
  return (
    <div id="Gallary" className="Gallary">
      
      <Gallery
        items={images}
        key={1}
      />
    </div>
  );
};

export default Photos;
