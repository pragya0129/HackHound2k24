import "./WinnerCard.css";

const Card = ({ position, name, description }) => {
  const style = {
    height: position === 1 ? "260px" : position === 2 ? "220px" : "200px",
    display: "inline-block",
  };
};

const WinnerCard = () => {
  const winnerData = [
    { position: 2, name: "Winner 2", description: "₹15K" },
    { position: 1, name: "Winner 1", description: "₹20K" },
    { position: 3, name: "Winner 3", description: "₹10K" },
  ];

  return (
    <div className="winners-container">
      <div className="winnercard two">
        <img src="Images/2nd-place.png" width="100px"></img>
        <h2>1ˢᵗ Runner-Up</h2>
        <p>₹15K</p>
      </div>
      <div className="winnercard one">
        <img src="Images/winner-1.png" width="100px"></img>
        <h2>Winner</h2>
        <p>₹20K</p>
      </div>
      <div className="winnercard three">
        <img src="Images/3rd-place.png" width="100px"></img>
        <h2>2ⁿᵈ Runner-Up</h2>
        <p>₹10K</p>
      </div>
    </div>
  );
};

export default WinnerCard;
