import "./GuestCard.css";
import PropTypes from "prop-types";

function GuestCard({ image, title, description, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="guest-card">
      <img src={image} alt={title} className="guest-image" />
      <div className="guest-card-content">
        <h2>{title}</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
        <a onClick={handleClick}>
          <img
            className="linkedin"
            src="Images/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}

GuestCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default GuestCard;
