import PropTypes from "prop-types"; 
import "./CommunityPartnersCard.css";
function CommunityPartnersCard({ image }) {
  return (
    <div className="card cpcard">
      <img src={image} />
    </div>
  );
}



export default CommunityPartnersCard;
