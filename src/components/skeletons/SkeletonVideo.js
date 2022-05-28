import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";

const SkeletonVideo = () => {
  const currentMode = useSelector(state=>state.toggleMode.mode);
  return (
    <div style={{ margin: "1rem" }}>
      <SkeletonTheme baseColor={currentMode==="dark"?"#343a40":"#DFDFDF"} highlightColor={currentMode==="dark"?"#3c4147":""}>
        <Skeleton height={180} />
        <div>
          <Skeleton
            style={{ margin: "0.5rem" }}
            circle
            height={40}
            width={40}
          />
          <Skeleton height={40} width="75%" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
