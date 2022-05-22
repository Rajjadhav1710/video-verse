import React from 'react';
import Comment from '../comment/Comment';

import "./_comments.scss";

const Comments = () => {

  const handleComment = ()=>{

  }

  return (
    <div className='comments'>
      <p>1234 Comments</p>
      
      <div className="comments__form d-flex w-100 my-2">
        <img 
          src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo" 
          alt="" 
          className='rounded-circle mr-3'
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input placeholder='Write a comment...' type="text" className="flex-grow-1" />
          <button className='border-0 p-2' type='submit'>Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {
          [...Array(15)].map(()=><Comment/>)
        }
      </div>

    </div>
  )
}

export default Comments;