import React from 'react';

import "./_comment.scss";
import moment from 'moment';

const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
        <img 
          src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo" 
          alt="" 
          className='rounded-circle mr-3'
        />

        <div className="comment__body">
            <p className="comment__header mb-1">
                Raj Jadhav&nbsp;•&nbsp;{moment("2020-05-05").fromNow()}
            </p>
            <p className='mb-0'>
                Nice Video Dude!!!
            </p>
        </div>
    </div>
  )
}

export default Comment;