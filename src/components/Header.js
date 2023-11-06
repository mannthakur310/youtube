import React ,{useState} from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import ViewCompactRoundedIcon from "@mui/icons-material/ViewCompactRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Avatar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";





function Header() {
  const [search,setSearch] = useState("")
  return (
    <>
      <div className="header">
        <div className="header-left">
          <MenuIcon />
          <Link to={`/`}>
          <img
            className="youtube-logo"
            src="https://th.bing.com/th/id/R.32626c106b64ed68c8b1d47136d5fcb1?rik=jtSb1WOEtXbAyQ&riu=http%3a%2f%2fwww.cinema5d.com%2fwp-content%2fuploads%2f2013%2f09%2fScreen-Shot-2013-09-27-at-15.35.29.png&ehk=Ogiv865LB7B9tDi%2fICLL%2bxfvo2cBSLiZN14%2bnACQjgM%3d&risl=&pid=ImgRaw&r=0"
            alt="youtube logo"
          />
          </Link>
          
        </div>
        <div className="header-center">
          <input onChange={e =>{setSearch(e.target.value)}} value={search} placeholder="Search"type="text" />
          <CloseIcon className="clear-icon"/>
          <Link to={`/search/${search}`}>
          <SearchIcon  className="search-icon"/>
          </Link>
        </div>
        <div className="header-right">
          <VideoCallSharpIcon />
          <ViewCompactRoundedIcon />
          <NotificationsRoundedIcon />
          <Avatar
            alt="dhoni"
            src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
    
  
