import React from 'react';
import "./_video.scss";

import {AiFillEye} from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Marvel_Studios_Assembled_logo.jpg/250px-Marvel_Studios_Assembled_logo.jpg" alt="" />
        <span>05:43</span>
      </div>
      <div className="video__title">
        create app in 5 minuites #made by chintu
      </div>
      <div className="video__details">
        <span>
          <AiFillEye/>5m Views &nbsp;•&nbsp;
        </span>
        <span>
          5 days ago
        </span>
      </div>
      <div className="video__channel">
        <img src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo" alt="" />
        <p>Rainbow hat jr</p>
      </div>
    </div>
  )
}

export default Video;