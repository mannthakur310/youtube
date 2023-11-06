import React from 'react'
import { Avatar } from '@mui/material'
import { Verified } from '@mui/icons-material'
import './channelRow.css'

function ChannelRow(props) {
  return (
    <>
        <div className="channel-card">
        <Avatar className="profile" src={props.image} alt={props.channelName}/>
        <div className='channel-over-view'>
            <h5>{props.channelName} {props.verified && <Verified/>}</h5>
            <p>{props.subscriber} Subscribers | {props.video} Videos</p>
            <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default ChannelRow