import React, { useEffect, useState } from 'react';

import "./_videoHorizontal.scss";

import {AiFillEye} from "react-icons/ai";
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VideoHorizontal = ({video}) => {

  const {
    id,
    snippet:{
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails:{medium}
    }
  } = video;

  const [views,setViews]=useState(null);
  const [duration,setDuration]=useState(null);

  const [channelIcon,setChannelIcon]=useState(null);

  useEffect(()=>{
    const get_video_details =async ()=>{
      const {data:{items}}=await request("/videos",{
        params:{
          part:"contentDetails,statistics",
          id:id.videoId
        }
      });
      // console.log(items);
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    }

    get_video_details();
  },[id]);

  useEffect(()=>{
    const get_channel_icon =async ()=>{
      const {data:{items}}=await request("/channels",{
        params:{
          part:"snippet",
          id:channelId
        }
      });
      // console.log(items);
      setChannelIcon(items[0].snippet.thumbnails.default);
    }

    get_channel_icon();
  },[channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds*1000).format("mm:ss");

  const navigate=useNavigate();

  const handleClick = ()=>{
    //TODO: handle channel click
    navigate(`/watch/${id.videoId}`);
  }

  return (
    <Row className='videoHorizontal m-1 py-2 align-items-center' onClick={handleClick}>
      {/* TODO:refractor grid */}
      <Col xs={6} md={6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          className='videoHorizontal__thumbnail'
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
        />
        <span className='videoHorizontal__duration'>{_duration}</span>
      </Col>

      <Col xs={6} md={6} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          {title}
        </p>
        <div className="videoHorizontal__details">
            <AiFillEye/>{numeral(views).format("0.a")} Views &nbsp;•&nbsp;
          
            {moment(publishedAt).fromNow()}          
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* TODO: show in search screen */}
          {/* <LazyLoadImage
            src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo"
            effect="blur"
          /> */}
          {/* will use in search screen */}
          <p className='mb-0'>{channelTitle}</p>
        </div>
      </Col>

    </Row>
  )
} 

export default VideoHorizontal;