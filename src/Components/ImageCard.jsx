
import PropTypes from "prop-types";
import "./ImageCard.css"; // Import the CSS file for styling

function ImageCard({ imageSrc }) {
  return (
    <div className="image-card">
      <img src={imageSrc} alt="Card" className="card-image" />
    </div>
  );
}

ImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default ImageCard;
