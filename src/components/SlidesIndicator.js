import React from "react";
import { GoPrimitiveDot } from "react-icons/all";
import "./SlidesIndicator.css";

function SlidesIndicator({ size, currentInd }) {
  return (
    <div className="SlidesIndicator">
      {Array.from(Array(size)).map((x, index) => (
        <GoPrimitiveDot
          key={index}
          className={
            "SlidesIndicator__Icon " +
            (currentInd === index ? "SlidesIndicator__Icon-Selected" : "")
          }
        />
      ))}
    </div>
  );
}

export default SlidesIndicator;
