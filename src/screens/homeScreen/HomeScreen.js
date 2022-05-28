import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

import InfiniteScroll from "react-infinite-scroll-component";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";

import "./_homeScreen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(activeCategory));
  };

  return (
    <Container className="homeScreenContainer">
      <CategoriesBar />
      <Row>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          // loader={
          //   <div className="spinner-border text-danger d-block mx-auto"></div>
          // }
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* Note: value of the key on list rendered by map function must be unique otherwise it will cause problems */}
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4} key={video?.id?.videoId || video.id}>
                  <Video video={video} />
                </Col>
              ))
            : [...Array(20)].map((val,i) => (
                <Col lg={3} md={4} key={i}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default HomeScreen;
