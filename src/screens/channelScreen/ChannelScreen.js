import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Video from '../../components/video/Video';
import { getChannelDetails } from '../../redux/actions/channel.action';
import { getVideosByChannel } from '../../redux/actions/videos.action';
import numeral from 'numeral';

import "./_channelScreen.scss";

const ChannelScreen = () => {
    const currentMode = useSelector(state=>state.toggleMode.mode);

    const {channelId}=useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getVideosByChannel(channelId));
      dispatch(getChannelDetails(channelId));
    }, [dispatch,channelId]);

    const {loading,videos} = useSelector(state=>state.channelVideos);
    const {snippet,statistics} = useSelector(state=>state.channelDetails.channel);
    
    return (
        <>
            {/* channel details */}
            <div className={`px-5 py-4 my-2 d-flex justify-content-between align-items-center channelHeader ${currentMode}`}>
                <div className="d-flex align-items-center channelHeader__left">
                    <img src={snippet?.thumbnails?.default?.url} alt="" />

                    <div className="ml-3 channelHeader__details">
                        <h3>{snippet?.title}</h3>
                        <span className='statistics'>
                            {numeral(statistics?.subscriberCount).format('0.a')}{' '}subscribers
                        </span>
                    </div>
                </div>
                {/* TODO: get subscription status */}
                <button>Sbscribe</button>
            </div>

            <Container>
                <Row className='mt-2'>
                {
                    !loading?(
                        videos?.map(video=>
                        <Col md={4} lg={3}>
                            <Video video={video} channelScreen/>
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
            </Container>
        </>
    )
}

export default ChannelScreen;