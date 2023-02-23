import React from "react";
import { useDispatch } from "react-redux";
import { switchToPreviousBackgroundImage } from "../backgroundImageSlice";

const BackgroundImageLeftControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="left-arrow"
      aria-label="Previous"
      onClick={() => {
        dispatch(switchToPreviousBackgroundImage());
      }}
    >
      {"<"}
    </button>
  );
};

export default BackgroundImageLeftControl;
