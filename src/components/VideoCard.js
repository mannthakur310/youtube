import React from "react";
import Avatar from "@mui/material/Avatar";
import './videoCard.css';

function VideoCard(props) {
  return (
    <>
      <div className="video-card">
        <img  className="thumnail-image"src={props.thumnail} alt="thumbnail" />
        <div className="channel-info">
          <Avatar src={props.channelProfile} alt={props.channelName} />
          <div className="video-text">
            <h4>{props.title}</h4>
            <p>{props.channelName}</p>
            <p>
              {props.views} . {props.timespan}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
