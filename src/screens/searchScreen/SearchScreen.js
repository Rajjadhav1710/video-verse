import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getVideosBySearch } from "../../redux/actions/videos.action";

const SearchScreen = () => {
  const { query } = useParams();
  // console.log(query);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);
  //every time query get modified we need to make another request

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
          // search screen is a boolean value to indicate this component is for search screen
        ))
      ) : (
        <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
          {/* count represents number of skeletons we want */}
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SearchScreen;
