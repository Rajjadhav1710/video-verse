import React from "react";

import "./_comment.scss";
import moment from "moment";
import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
  const currentMode = useSelector(state=>state.toggleMode.mode);
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;
  return (
    <div className={`comment d-flex ${currentMode}`}>
      <img src={authorProfileImageUrl} alt="" className="rounded-circle mr-3" />

      <div className="comment__body">
        <p className="comment__header mb-1">
          <span>{authorDisplayName}</span>&nbsp;•&nbsp;<span className="statistics">{moment(publishedAt).fromNow()}</span>
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
