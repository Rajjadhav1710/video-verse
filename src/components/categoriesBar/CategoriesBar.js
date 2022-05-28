import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "react native",
  "use of api",
  "redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Songs",
  "Coding",
  "Cricket",
  "Fotball",
  "Real Madrid",
  "Gastby",
  "Poor Coder",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const currentMode = useSelector(state=>state.toggleMode.mode);

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);

    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className={`categoriesBar ${currentMode}`}>
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
