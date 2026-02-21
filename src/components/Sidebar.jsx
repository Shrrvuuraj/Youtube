import React from "react";
import "./stylesheet/apptwo.css";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

const Sidebar = ({ sideBar }) => {
  return (
    <nav
      className={`border border-danger sidebar 
    ${sideBar ? "show" : ""}`}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked </span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I dont know</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} />
        <span>Log Outt</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
