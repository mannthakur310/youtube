import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SidebarRow from './SidebarRow';


function Sidebar() {
  return (
    <>
    <div className='panel'>
    
    <SidebarRow selected title="Home" Icons={HomeIcon}/>
    <SidebarRow title="Trending" Icons={WhatshotIcon}/>
    <SidebarRow title="Subcription" Icons={SubscriptionsIcon}/>
    <hr></hr>
    <SidebarRow title="Library" Icons={VideoLibraryIcon}/>
    <SidebarRow title="History" Icons={HistoryIcon}/>
    <SidebarRow title="Your Videos" Icons={OndemandVideoIcon}/>
    <SidebarRow title="Watch Later" Icons={WatchLaterIcon}/>
    <SidebarRow title="Liked Videos" Icons={ThumbUpIcon}/>
    <hr></hr>
    <SidebarRow title="Show More" Icons={KeyboardArrowDownIcon}/>
    </div>
    </>
  )
}

export default Sidebar
    