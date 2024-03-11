import { useState, useEffect } from "react";
import "./SliderGallery.css";

function SliderGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Calculate previous and next image indices
  const prevImageIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <div className="slider-gallery">
      {/* <button className="prev-btn" onClick={prevImage}>
        &lt;
      </button> */}
      <img
        src={images[prevImageIndex]}
        alt="Previous"
        className="gallery-image side-image"
      />
      <img
        src={images[currentImageIndex]}
        alt="Current"
        className="gallery-image main-image"
      />
      <img
        src={images[nextImageIndex]}
        alt="Next"
        className="gallery-image side-image"
      />
      {/* <button className="next-btn" onClick={nextImage}>
        &gt;
      </button> */}
    </div>
  );
}

export default SliderGallery;
