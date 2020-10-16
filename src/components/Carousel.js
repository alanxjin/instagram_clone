import React from "react";
import "./Carousel.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/all";
import SlidesIndicator from "./SlidesIndicator";

const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];
const IMAGE_WIDTH = 600;

function Carousel({ currentInd = 0, setCurrentInd, mode = "portrait" }) {
  const styles = {
    left: -IMAGE_WIDTH * currentInd,
  };
  return (
    <div className="Carousel">
      <div className="Carousel__Images" style={styles}>
        {images.map((name) => (
          <div key={name}>
            <img alt="Profile" src={process.env.PUBLIC_URL + "/imgs/" + name} />
          </div>
        ))}
      </div>
      <IoIosArrowDropleftCircle
        className="Carousel__ArrowIcon Carousel__ArrowIcon-Left"
        onClick={() => setCurrentInd(Math.max(currentInd - 1, 0))}
      />
      <IoIosArrowDroprightCircle
        className="Carousel__ArrowIcon Carousel__ArrowIcon-Right"
        onClick={() =>
          setCurrentInd(Math.min(currentInd + 1, images.length - 1))
        }
      />
      {mode === "landscape" && (
        <div className="Carousel__SlidesIndicator">
          <SlidesIndicator size={images.length} currentInd={currentInd} />
        </div>
      )}
    </div>
  );
}

export default Carousel;
