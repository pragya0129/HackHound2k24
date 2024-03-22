import PropTypes from "prop-types";
import "./SponsorInfoCard.css";
function SponsorInfoCard({
  descriptiontag1,
  descriptiontag2,
  descriptiontag3,
  image,
  title,
  description,
  link,
  description2,
  description3,
  description4,
}) {
  return (
    <div className="spincard">
      <div className="spincard-image">
        <img src={image} alt={title} />
        {/* <h2>{title}</h2> */}
      </div>
      <b>
        <p className="spincard-description">{descriptiontag1}</p>
      </b>
      <p className="spincard-description">{description}</p>
      <b>
        <p className="spincard-description">{descriptiontag2}</p>
      </b>
      <p className="spincard-description">{description2}</p>
      <b>
        <p className="spincard-description">{descriptiontag3}</p>
      </b>
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
