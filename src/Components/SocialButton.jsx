const SocialButton = ({ imageUrl, link }) => {
  const handleClick = () => {
    window.open(link, "_blank"); 
  };

  return (
    <div className="social-button" onClick={handleClick}>
      <img src={imageUrl} alt="Social Media Icon" />
    </div>
  );
};

export default SocialButton;
