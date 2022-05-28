import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";
import Comment from "../comment/Comment";

import "./_comments.scss";

const Comments = ({ videoId, totalComments }) => {
  const currentMode = useSelector(state=>state.toggleMode.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const [text, setText] = useState("");

  const comments = useSelector((state) => state.commentList.comments);
  const { photoURL } = useSelector(state=>state.auth?.user);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));
    setText("");
  };

  
  return (
    <div className={`comments ${currentMode}`}>
      <p>{totalComments} Comments</p>

      <div className="comments__form d-flex w-100 my-2">
        <img
          src={photoURL}
          alt="avatar"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            placeholder="Add a comment…"
            type="text"
            className="flex-grow-1"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="border-0 p-2" type="submit">
            Comment
          </button>
        </form>
      </div>

      <div className="comments__list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
