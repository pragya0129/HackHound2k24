import Countdown from "../Components/Countdown";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import SponsorCard from "../Components/SponsorCard";
import SocialButton from "../Components/SocialButton";
import { useEffect } from "react";
import Gallery from "./Gallery";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div className="container">
        <div className="top" id="home">
          <h1>
            <span className="heading">HackHound 2.0</span>
            <br></br>
            <div className="date">5ᵗʰ - 6ᵗʰ April</div>
            <br></br>
            <div className="text">
              HackHound is a 24-hour in-person hackathon that seeks to provide
              an opportunity for ardent members of the hacker community to
              showcase the best of their talents and encourage tech culture to
              the new and old.
              <br></br>
              <br></br>
            </div>
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
            <br></br>
          </h1>
          <div
            className="apply-button"
            data-hackathon-slug="hackhound-2"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>

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
          <Countdown />

          {/* <section className="registration">
            <h2>Registrations Opening Soon!</h2>
          </section> */}
        </div>

        <h2>Sponsors</h2>
        <div className="cards">
          <SponsorCard image="Images/_Colored.png" alt="DEVFOLIO LOGO" />
          <SponsorCard image="Images/Colored.png" alt="POLYGON LOGO" />
          <SponsorCard image="Images/Untitled.png" alt="ETHINDIA LOGO" />
        </div>

        <div id="gallery">
          <h2>HackHound 2k23 Flashback</h2>
          <h4>Recalling Moments of Inspiration</h4>
          <Gallery />
        </div>

        {/* <section className="register-btn">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register Now
          </a>
        </section> */}

        <h2>Past Sponsors</h2>
        <div className="cards">
          <SponsorCard image="Images/Mlh-logo-color.svg.png" />
          <SponsorCard image="Images//devfolio.png" />
          <SponsorCard image="Images//Polygon_blockchain_logo.png" />
          <SponsorCard image="Images//filecoinio-ar21.png" />
          <SponsorCard image="Images//solana-sol9611.jpg" />
          <SponsorCard image="Images//replit.png" />
          <SponsorCard image="Images//interview-cake.jpg" />
          <SponsorCard image="Images//axure2644.jpg" />
        </div>

        <h2>Club Coordinator</h2>
        <div className="cards">
          <Card image="Images//user (1).png" title="Dr. Oshin Sharma" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
