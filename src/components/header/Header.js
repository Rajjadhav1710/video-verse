import React from 'react';
import "./_header.scss";
import youtubeImage from "../../images/youtube.png";

import { FaBars } from "react-icons/fa";//fa=font awesome
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications,MdApps } from "react-icons/md";//md=material design

const Header = ({handleToggleSidebar}) => {
  return (
    <div className='header'>
        <FaBars 
          className='header__menu' 
          size={26} 
          onClick={()=>handleToggleSidebar()}
        />
        
        <img src={youtubeImage} alt="" className="header__logo" />
        
        <form>
          <input type="text" placeholder='Search'/>
          <button type='submit'>
            <AiOutlineSearch size={22}/>
          </button>
        </form>

        <div className="header__icons">
          <MdNotifications size={28}/>
          <MdApps size={28}/>
          <img src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo" alt="avatar" />
        </div>
    </div>
  )
}

export default Header;