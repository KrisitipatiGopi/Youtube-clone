import React, { useContext } from "react";
import home_img from "../assets/home.png";
import gaming_img from "../assets/game_icon.png";
import automobils_img from "../assets/automobiles.png";
import sports_img from "../assets/sports.png";
import entertainment_img from "../assets/entertainment.png";
import technology_img from "../assets/tech.png";
import music_img from "../assets/music.png";
import news_img from "../assets/news.png";
import { AppContext } from "../utils/AppContext";

const Sidebar = () => {

  const {isShowSidebar, setIsShowSidebar} = useContext(AppContext);

  return (
    <div className="flex flex-col gap-3 p-2 m-2 w-[7%]">
      <div className="flex gap-2">
        <img src={home_img} alt="" className="w-7" />
        {isShowSidebar ? <p>Home</p> : ""}
      </div>
      <div className="flex gap-2">
        <img src={gaming_img} alt="" className="w-7" />
        {isShowSidebar ? <p>Gaming</p> : ""}
      </div>
      <div className="flex gap-2">
        <img src={automobils_img} alt="" className="w-7" />
        {isShowSidebar ? <p>Automobiles</p>:""}
      </div>
      <div className="flex gap-2">
        <img src={sports_img} alt="" className="w-7" />
        {isShowSidebar ?<p>Sports</p> :""}
      </div>
      <div className="flex gap-2">
        <img src={entertainment_img} alt="" className="w-7" />
        {isShowSidebar ?<p>Entertainment</p> : "" }
      </div>
      <div className="flex gap-2">
        <img src={technology_img} alt="" className="w-7" />
        {isShowSidebar ? <p>Technology</p>:""}
      </div>
      <div className="flex gap-2">
        <img src={music_img} alt="" className="w-7" />
        {isShowSidebar ? <p>Music</p>:""}
      </div>
      <div className="flex gap-2">
        <img src={news_img} alt="" className="w-7" />
        {isShowSidebar ? <p>News</p>: ""}
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
