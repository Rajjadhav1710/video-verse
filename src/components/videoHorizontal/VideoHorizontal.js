import React from 'react';

import "./_videoHorizontal.scss";

import {AiFillEye} from "react-icons/ai";
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';

const VideoHorizontal = () => {

  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds*1000).format("mm:ss");

  return (
    <Row className='videoHorizontal m-1 py-2 align-items-center'>
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo"
          effect="blur"
          className='videoHorizontal__thumbnail'
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
        />
        <span className='video__top__duration'>{_duration}</span>
      </Col>

      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          Be a full stack developer in 1 month
        </p>
        <div className="videoHorizontal__details">
            <AiFillEye/>{numeral(100000).format("0.a")} Views &nbsp;•&nbsp;
          
            {moment("2020-08-09").fromNow()}          
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://lh3.googleusercontent.com/ogw/ADea4I6ZMeWCyHvJT4wR4KONajSHskU_d5FaK0biLT722RQ=s64-c-mo"
            effect="blur"
          /> */}
          {/* will use in search screen */}
          <p>Name of Channel : Backbench coder</p>
        </div>
      </Col>

    </Row>
  )
} 

export default VideoHorizontal;