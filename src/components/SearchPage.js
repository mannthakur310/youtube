import React from "react";
import "./searchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="search_filter">
        <TuneIcon />
        <h5>FILTER</h5>
      </div>
      <hr />
      <ChannelRow
        image="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg"
        verified
        channelName="manTech"
        subscriber="606K"
        video="390"
        description="I make videos hope you all liking it thank you so much for your support guys"
      />
      <hr />
      <div className="video-row">
        <VideoRow
          image="https://designshack.net/wp-content/uploads/Free-Gaming-YouTube-Thumbnail-Template.jpg"
          channelAvatar="https://th.bing.com/th/id/OIP.NS9tjpxpg5T6zud95PcXlAHaHa?pid=ImgDet&rs=1"
          title="24*7 Live Stream"
          channel_name="TechnoLive"
          views="303K"
          timespan="2"
          subs="2.3M"
          description="I make videos hope you all liking it thank you so much for your support guys"
        />
        <VideoRow
          image="https://designshack.net/wp-content/uploads/Free-Gaming-YouTube-Thumbnail-Template.jpg"
          channelAvatar="https://th.bing.com/th/id/OIP.NS9tjpxpg5T6zud95PcXlAHaHa?pid=ImgDet&rs=1"
          title="24*7 Live Stream"
          channel_name="TechnoLive"
          views="303K"
          timespan="2"
          subs="2.3M"
          description="I make videos hope you all liking it thank you so much for your support guys"
        />
        <VideoRow
          image="https://designshack.net/wp-content/uploads/Free-Gaming-YouTube-Thumbnail-Template.jpg"
          channelAvatar="https://th.bing.com/th/id/OIP.NS9tjpxpg5T6zud95PcXlAHaHa?pid=ImgDet&rs=1"
          title="24*7 Live Stream"
          channel_name="TechnoLive"
          views="303K"
          timespan="2"
          subs="2.3M"
          description="I make videos hope you all liking it thank you so much for your support guys"
        />
        <VideoRow
          image="https://designshack.net/wp-content/uploads/Free-Gaming-YouTube-Thumbnail-Template.jpg"
          channelAvatar="https://th.bing.com/th/id/OIP.NS9tjpxpg5T6zud95PcXlAHaHa?pid=ImgDet&rs=1"
          title="24*7 Live Stream"
          channel_name="TechnoLive"
          views="303K"
          timespan="2"
          subs="2.3M"
          description="I make videos hope you all liking it thank you so much for your support guys"
        />
        <VideoRow
          image="https://designshack.net/wp-content/uploads/Free-Gaming-YouTube-Thumbnail-Template.jpg"
          channelAvatar="https://th.bing.com/th/id/OIP.NS9tjpxpg5T6zud95PcXlAHaHa?pid=ImgDet&rs=1"
          title="24*7 Live Stream"
          channel_name="TechnoLive"
          views="303K"
          timespan="2"
          subs="2.3M"
          description="I make videos hope you all liking it thank you so much for your support guys"
        />
        <VideoRow
          image="https://designshack.net/wp-content/uploads/Free-Gaming-YouTube-Thumbnail-Template.jpg"
          channelAvatar="https://th.bing.com/th/id/OIP.NS9tjpxpg5T6zud95PcXlAHaHa?pid=ImgDet&rs=1"
          title="24*7 Live Stream"
          channel_name="TechnoLive"
          views="303K"
          timespan="2"
          subs="2.3M"
          description="I make videos hope you all liking it thank you so much for your support guys"
        />
        <VideoRow
          image="https://designshack.net/wp-content/uploads/Free-Gaming-YouTube-Thumbnail-Template.jpg"
          channelAvatar="https://th.bing.com/th/id/OIP.NS9tjpxpg5T6zud95PcXlAHaHa?pid=ImgDet&rs=1"
          title="24*7 Live Stream"
          channel_name="TechnoLive"
          views="303K"
          timespan="2"
          subs="2.3M"
          description="I make videos hope you all liking it thank you so much for your support guys"
        />
      </div>
    </div>
  );
}

export default SearchPage;
