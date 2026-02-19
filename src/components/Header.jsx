import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
const Header = () => {
  return (
    <div className="border border-dark header">
      <FaBars size={26} className="header__menu" />
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/042/127/234/small/white-square-bordered-youtube-logo-on-transparent-background-free-png.png"
        alt="youtube logo"
        className="header__logo "
      />
      <form>
        <input type="text"  placeholder="Search"/>
        <button type="submit" size={22}><AiOutlineSearch/></button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="user " className="image" />
      </div>
    </div>
  );
};

export default Header;
