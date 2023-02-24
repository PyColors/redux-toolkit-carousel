import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBackgroundImage } from "./backgroundImageSlice";
import './index.css';
import { isLoading } from "./backgroundImageSlice";

const BackgroundImage = () => {
  const { imageUrls, currentImageUrlIndex } = useSelector(
    (state) => state.backgroundImage
  );

  const dispatch = useDispatch();

  const imagesAreLoading = useSelector(isLoading);

  useEffect(() => {
    dispatch(getBackgroundImage());
  }, [dispatch]);

  if (imagesAreLoading) {
    return <div className="loading">Loading images</div>;
  }
  
  return (
    <div>
      <img src={imageUrls[currentImageUrlIndex]} alt="" className="image" />
    </div>
  );
};

export default BackgroundImage;
