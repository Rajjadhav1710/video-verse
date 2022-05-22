import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from '../../components/comments/Comments';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import { getVideoById } from '../../redux/actions/videos.action';

import "./_watchScreen.scss";

const WatchScreen = () => {

    const {id}=useParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideoById(id));
    },[dispatch,id]);

    const {video,loading} = useSelector(state=>state.selectedVideo);

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        title={video?.snippet?.title}
                        allowFullScreen
                        width="100%"
                        height="100%"
                    >
                    </iframe>
                </div>
                {
                    !loading ? (
                        <VideoMetaData video={video} videoId={id}/>
                    ) : (
                        <h6>Loading Skeleton</h6>
                    )
                }
                
                <Comments videoId={id} totalComments = {video?.statistics?.commentCount}/>
            </Col>
            <Col lg={4}>
                {
                    [...Array(10)].map(() => <VideoHorizontal />)
                }
            </Col>
        </Row>
    );
}

export default WatchScreen;