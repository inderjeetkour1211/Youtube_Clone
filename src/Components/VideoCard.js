import React from "react";

const VideoCard = (props) => {
  console.log("test......", props);

  const { snippet, statistics } = props.info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="Thumbnail" />
      <ul>
        <li className="font-bold text-base py-2">{title}</li>
        <li>{channelTitle}</li>
        <li> {statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
