import Loader from "../Components/Loader";
import SocialButton from "../Components/SocialButton";

function DefaultRender() {
  return (
    <div className="default_container">
      <div className="top">
        <h1>
          <span className="heading">HackHound 2.0</span>
          <br></br>
          <div className="date">5ᵗʰ - 6ᵗʰ April</div>
          <br></br>
          <div className="text">
            HackHound is a 24-hour in-person hackathon that seeks to provide an
            opportunity for ardent members of the hacker community to showcase
            the best of their talents and encourage tech culture to the new and
            old.
          </div>

          <Loader />
          <SocialButton
            imageUrl="Images/instagram (1).png"
            link="https://www.instagram.com"
          />
          <SocialButton
            imageUrl="Images/facebook (1).png"
            link="https://www.instagram.com"
          />
          <SocialButton
            imageUrl="Images/twitter (2).png"
            link="https://www.instagram.com"
          />
          <SocialButton
            imageUrl="Images/gmail.png"
            link="https://www.instagram.com"
          />
          <SocialButton
            imageUrl="Images/discord.png"
            link="https://www.instagram.com"
          />
        </h1>

        {/* <img className="animated-img" src="/src/assets/code.png"></img>
        <img className="animated-img2" src="/src/assets/code.png"></img>
        <img className="animated-img3" src="/src/assets/code.png"></img>
        <img
          className="animated-img4"
          src="/src/assets/Hackhound logo.jpeg"
        ></img> */}

        <p className="animtext">
          Get ready to code, collaborate, and innovate!
          <br></br>
          Starting in...
        </p>

        {/* <section className="registration">
            <h2>Registrations Opening Soon!</h2>
          </section> */}
      </div>
    </div>
  );
}

export default DefaultRender;
