import { Avatar } from "@mui/material";
import React from "react";
import "./videorow.css";

function VideoRow(props) {
  return (
    <div className="box">
      <img className="thumnail" src={props.image} alt={props.channel_name} />
      <div className="video-row-text">
        <h5>{props.title}</h5>
        <p>
          <span className="text">
            <span className="subs">{props.subs}</span> Subscribers
          </span>
          | {props.views} Views | {props.timespan} second ago
        </p>

        <div className="video-row-logo">
          <Avatar src={props.channelAvatar} />
          <p>{props.channel_name}</p>
        </div>
        <div className="video-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
