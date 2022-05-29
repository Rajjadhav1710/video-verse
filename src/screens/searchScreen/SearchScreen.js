import React, { useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getVideosBySearch } from "../../redux/actions/videos.action";

import {FaFilter} from "react-icons/fa";

import "./_searchScreen.scss";

const FilterIcon = ()=>{
  return(
    <>
      <FaFilter/>&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>FILTERS</span>
    </>
  );
}

const SearchScreen = () => {
  const currentMode = useSelector(state => state.toggleMode.mode);
  const { query } = useParams();
  // console.log(query);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState("relevance");

  useEffect(() => {
    dispatch(getVideosBySearch(query,filter));
  }, [query,filter,dispatch]);
  //every time query get modified we need to make another request

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  const handleFilter = (evt)=>{
    // console.log(evt.target.innerHTML);
    setFilter(evt.target.innerHTML);
  }

  return (
    <Container>

      <DropdownButton 
        id="dropdown-basic-button" 
        title={<FilterIcon/>}
        // variant="secondary"
        menuVariant={currentMode==="dark"?"dark":""}
        className={`dropDownButton ${currentMode}`}
      >
        <Dropdown.Item onClick={handleFilter} as="button" active={filter==="relevance"}>relevance</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter} as="button" active={filter==="date"}>date</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter} as="button" active={filter==="rating"}>rating</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter} as="button" active={filter==="title"}>title</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter} as="button" active={filter==="viewCount"}>viewCount</Dropdown.Item>
      </DropdownButton>

      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
          // search screen is a boolean value to indicate this component is for search screen
        ))
      ) : (
        <SkeletonTheme baseColor={currentMode === "dark" ? "#343a40" : "#DFDFDF"} highlightColor={currentMode === "dark" ? "#3c4147" : ""}>
          <Skeleton width="100%" height="160px" count={20} />
          {/* count represents number of skeletons we want */}
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SearchScreen;
