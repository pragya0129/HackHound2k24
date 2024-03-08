import PropTypes from "prop-types"; 
function SponsorCard({ image, alt }) {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <div className="card-content"></div>
    </div>
  );
}


SponsorCard.propTypes = {
  image: PropTypes.string.isRequired, 
};

export default SponsorCard;
