import React, { useState } from "react";
import "./_header.scss";
import youtubeImage from "../../images/youtube.png";

import { FaBars } from "react-icons/fa"; //fa=font awesome
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md"; //md=material design

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handleToggleSidebar }) => { 
  const currentMode = useSelector(state=>state.toggleMode.mode);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const  photoURL  = useSelector(state=>state.auth?.user?.photoURL);

  return (
    <div className={`header ${currentMode}`}>
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <div className="d-flex align-items-center">
        <img src={youtubeImage} alt="" className="header__logo" />
        <span className="header__logoTitle">VideoVerse</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src={photoURL}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
