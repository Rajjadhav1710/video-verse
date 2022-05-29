import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import Video from '../../components/video/Video';
import { getLikedVideos } from '../../redux/actions/videos.action';

import "./_likedVideoScreen.scss";

const LikedVideoScreen = () => {
    const currentMode = useSelector(state=>state.toggleMode.mode);

    const dispatch=useDispatch();

    const {loading,videos} = useSelector(state=>state.likedVideos);

    useEffect(()=>{
        dispatch(getLikedVideos());
    },[dispatch]);

    return (
        <Row className='mt-2'>
        {
            !loading?(
                videos?.map(video=>
                <Col md={4} lg={3}>
                    <Video video={video} likedVideoScreen/>
                </Col>
                )
            ):(
                [...Array(50)].map(() => (
                    <Col md={4} lg={3}>
                        <SkeletonTheme baseColor={currentMode==="dark"?"#343a40":"#DFDFDF"} highlightColor={currentMode==="dark"?"#3c4147":""}>
                            <Skeleton width="100%" height="140px"/>
                            {/* count represents number of skeletons we want */}
                        </SkeletonTheme>
                    </Col>
                  ))
            )
        }
        </Row>
    )
}

export default LikedVideoScreen;