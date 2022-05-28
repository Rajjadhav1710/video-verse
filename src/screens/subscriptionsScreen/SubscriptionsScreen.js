import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionChannel } from "../../redux/actions/videos.action";

import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";

import "./_subscriptionsScreen.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SubscriptionsScreen = () => {
  const currentMode = useSelector(state=>state.toggleMode.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptionChannel());
  }, [dispatch]);

  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme baseColor={currentMode==="dark"?"#343a40":"#DFDFDF"} highlightColor={currentMode==="dark"?"#3c4147":""}>
          <Skeleton width="100%" height="160px" count={20} />
          {/* count represents number of skeletons we want */}
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionsScreen;
