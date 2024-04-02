import { useState } from "react";
import "./Timeline.css";

function Timeline({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="tslider-gallery">
      <div
        className="tgallery-container"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="tgallery-image"
          />
        ))}
      </div>
      <button className="tprev-btn" onClick={prevImage}>
        &lt;
      </button>
      <button className="tnext-btn" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
}

export default Timeline;
