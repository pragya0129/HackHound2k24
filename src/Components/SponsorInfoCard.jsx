import PropTypes from "prop-types";
import "./SponsorInfoCard.css";
function SponsorInfoCard({ image, title, description, link,description2,description3,description4 }) {

  return (
    <div className="spincard">
      <div className="spincard-image">
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
      <p className="spincard-description">{description}</p>
      <p className="spincard-description">{description2}</p>
      <p className="spincard-description">{description3}</p>
      <p className="spincard-description">{description4}</p>
    </div>
  );
}

SponsorInfoCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SponsorInfoCard;
