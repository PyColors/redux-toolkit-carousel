import React from "react";
import { useDispatch } from "react-redux";
import { switchToNextBackgroundImage } from "../backgroundImageSlice";

const BackgroundImageRightControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="right-arrow"
      aria-label="Next"
      onClick={() => {
        dispatch(switchToNextBackgroundImage());
      }}
    >
      {">"}
    </button>
  );
};

export default BackgroundImageRightControl;
