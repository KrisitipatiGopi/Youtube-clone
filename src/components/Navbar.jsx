import React, { useContext, useEffect, useState } from "react";
import menu_icon from "../assets/menu.png";
import logo_icon from "../assets/logo.png";
import user_icon from "../assets/user_profile.jpg";
import search_icon from "../assets/search.png";
import { AppContext } from "../utils/AppContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleShowSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };

  const getSuggestions = async (query) => {
    const suggestionsD = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
    );
    const json = await suggestionsD.json();
    setSuggestions(json[1]); // json[1] contains the suggestions array
  };

  useEffect(() => {
    if (input) {
      const debounceTimeout = setTimeout(() => {
        getSuggestions(input);
      }, 200); // Debounce delay
      return () => clearTimeout(debounceTimeout);
    } else {
      setSuggestions([]); // Clear suggestions when input is empty
    }
  }, [input]);

  return (
    <div className="flex p-2 ml-7 justify-between items-center shadow-md">
      <div className="flex justify-center items-center gap-5">
        <img
          src={menu_icon}
          alt="menu"
          className="w-10 cursor-pointer"
          onClick={handleShowSidebar}
        />
        <img
          src={logo_icon}
          alt="logo"
          className="w-36"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="relative">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search Video Here"
            className="w-96 p-2 border rounded-l-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="p-2 bg-slate-500 rounded-r-full">
            <img src={search_icon} alt="search" />
          </button>
        </div>
        {showSuggestions && (
          <ul className="absolute w-96 bg-white border rounded-b-md mt-1 shadow-md overflow-y-auto z-10">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="p-2 cursor-pointer hover:bg-gray-200">
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <img src={user_icon} alt="user" className="rounded-full w-12" />
      </div>
    </div>
  );
};

export default Navbar;
