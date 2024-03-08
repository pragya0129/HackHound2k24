import SliderGallery from "../Components/SliderGallery";

function Gallery() {
  const images = [
    "Images/hackhound 2k23 photos/IMG1.jpg",
    "Images/hackhound 2k23 photos/IMG2.jpg",
    "Images/hackhound 2k23 photos/IMG3.jpg",
    "Images/hackhound 2k23 photos/IMG4.jpg",
  ];
  return (
    <div>
      <SliderGallery images={images} />
    </div>
  );
}

export default Gallery;
