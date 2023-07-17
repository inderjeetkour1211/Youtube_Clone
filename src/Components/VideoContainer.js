import React, { useEffect, useState } from "react";
import { Youtube_API } from "../Utiles/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // console.log("useeffect.......");
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
    // console.log(json);
    // console.log("getVide is checking....");
    setVideos(json.items);
  };
  console.log(videos);
  const VideoCards = () => {
    return videos.map((video) => 
    <Link to ={"/watch?v="+video.id} key={video.id}> <VideoCard  info={video} /></Link>
    
    );
  };
  return <div className="flex flex-wrap">{VideoCards()}</div>;
};

export default VideoContainer;
