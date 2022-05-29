import React from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

import DarkModeToggle from "react-dark-mode-toggle";
import { TOGGLE_MODE } from "../../redux/actionType";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const currentMode = useSelector(state=>state.toggleMode.mode);

  // const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(log_out());
  };

  const toggleMode = () => {
    dispatch({
      type:TOGGLE_MODE
    });
    localStorage.setItem("mode",currentMode==="dark"?"light":"dark");
  }

  // const homeClickHandler = () => {
  //   navigate("/");
  // };

  return (
    <nav
      className={sidebar ? `sidebar open ${currentMode}` : `sidebar ${currentMode}`}
      // onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li onClick={() => handleToggleSidebar(false)}>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li onClick={() => handleToggleSidebar(false)}>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      <Link to="/liked/videos">
        <li onClick={() => handleToggleSidebar(false)}>
          <MdThumbUp size={23} />
          <span>Liked Videos</span>
        </li>
      </Link>

      <li onClick={() => handleToggleSidebar(false)}>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li onClick={() => handleToggleSidebar(false)}>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      {/* <li>
        <MdSentimentDissatisfied size={23} />
        <span>I Don't Know</span>
      </li> */}

      <hr />

      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />

      <li className="toggle-mode-container">
        <DarkModeToggle
          size={40}
          onChange={toggleMode}
          checked={currentMode==="dark"?true:false}
        />
      </li>

    </nav>
  );
};

export default Sidebar;
