import PropTypes from "prop-types";
function Card({ image, title, description, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a onClick={handleClick}>
        <img className="linkedin" src="Images/linkedin.png" />
      </a>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
