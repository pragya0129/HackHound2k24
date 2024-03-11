import SliderGallery from "../Components/SliderGallery";

function Gallery() {
  const images = [
    "Images/hackhound 2k23 photos/img10.jpg",
    "Images/hackhound 2k23 photos/img11.jpg",
    "Images/hackhound 2k23 photos/img12.jpg",
    "Images/hackhound 2k23 photos/img13.jpg",
  ];
  return (
    <div>
      <SliderGallery images={images} />
    </div>
  );
}

export default Gallery;
