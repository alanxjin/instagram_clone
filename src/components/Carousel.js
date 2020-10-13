import React, { useState } from "react";
import "./Carousel.css";

const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];
const IMAGE_WIDTH = 600;
function Carousel() {
  const [currentInd, setCurrentInd] = useState(0);
  const styles = {
    left: -IMAGE_WIDTH * currentInd,
  };
  return (
    <div className="Carousel">
      <div className="Carousel__Images" style={styles}>
        {images.map((name) => (
          <img key={name} src={process.env.PUBLIC_URL + "/imgs/" + name} />
        ))}
      </div>
      <button onClick={() => setCurrentInd((pre) => Math.max(pre - 1, 0))}>
        left
      </button>
      <button
        onClick={() =>
          setCurrentInd((pre) => Math.min(pre + 1, images.length - 1))
        }
      >
        right
      </button>
    </div>
  );
}

export default Carousel;
