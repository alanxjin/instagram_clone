import React from "react";
import "./Carousel.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/all";

const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];
const IMAGE_WIDTH = 600;

function Carousel({ currentInd, setCurrentInd }) {
  const styles = {
    // left: `${-IMAGE_WIDTH * currentInd}rem`,
    left: -IMAGE_WIDTH * currentInd,
  };
  console.log(currentInd);
  return (
    <div className="Carousel">
      <div className="Carousel__Images" style={styles}>
        {images.map((name) => (
          <img key={name} src={process.env.PUBLIC_URL + "/imgs/" + name} />
        ))}
      </div>
      <IoIosArrowDropleftCircle
        className="Carousel__ArrowIcon Carousel__ArrowIcon-Left"
        onClick={() => setCurrentInd((pre) => Math.max(pre - 1, 0))}
      />
      <IoIosArrowDroprightCircle
        className="Carousel__ArrowIcon Carousel__ArrowIcon-Right"
        onClick={() =>
          setCurrentInd((pre) => Math.min(pre + 1, images.length - 1))
        }
      />
    </div>
  );
}

export default Carousel;
