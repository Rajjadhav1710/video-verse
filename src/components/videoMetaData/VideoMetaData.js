import React from 'react';

import "./_videoMetaData.scss";

import numeral from 'numeral';
import moment from 'moment';

import {MdThumbUp,MdThumbDown} from "react-icons/md";
import ShowMoreText from 'react-show-more-text';
const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
        <div className="videoMetaData__top">
            <h5>Video Title</h5>        
            <div className="d-flex justify-content-between align-items-center py-1">
                <span>
                        {numeral(100000).format("0.a")} Views &nbsp;•&nbsp;
                        {moment("2020-06-6").fromNow()}
                </span>
            
                <div>
                    <span className='mr-3'>
                        <MdThumbUp size={26}/>{numeral(100000).format("0.a")}
                    </span>
                    <span className='mr-3'>
                        <MdThumbDown size={26}/>{numeral(100000).format("0.a")}
                    </span>
                </div>
            </div>
        </div>

        <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
            <div className="d-flex">
                <img 
                    src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo" 
                    alt="" 
                    className='rounded-circle mr-3'
                />
                <div className="d-flex flex-column">
                    <span>Channel Name</span>
                    <span>{numeral(100000).format("0.a")} Subscribers</span>
                </div>
            </div>

            <button className="btn border-0 p-2 m-2">SUBSCRIBE</button>
        </div>

        <div className="videoMetaData__description">
            <ShowMoreText
                lines={3}
                more="SHOW MORE"
                less="SHOW LESS"
                anchorClass='showMoreText'
                expanded={false}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum optio, corporis veritatis eveniet laboriosam aut neque esse? Ipsam, quo reprehenderit. Praesentium reprehenderit est nam accusantium quae, omnis nihil iure illo deserunt aliquid delectus sequi et minima harum corporis, amet rerum eveniet cupiditate ad! Eos eum animi asperiores doloribus ullam minus, nam error nisi nostrum accusamus aspernatur deserunt adipisci fugiat, architecto fuga distinctio. Blanditiis inventore neque molestias quidem praesentium aliquid quia? Quibusdam recusandae sint ducimus nam deleniti, nesciunt rerum. Repellendus voluptatibus sunt tenetur sequi odit blanditiis fugiat, saepe sint incidunt! Dignissimos beatae reiciendis nobis corporis voluptas, neque debitis commodi cumque.
            </ShowMoreText>
        </div>
    </div>
  )
}

export default VideoMetaData;