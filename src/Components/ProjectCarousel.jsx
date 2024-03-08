import React from "react";
import "./ProjectCarousel.css"; // Import CSS file
import Slider from "react-slick"; // Import Slider component from react-slick

class ProjectCarousel extends React.Component {
  render() {
    const settingsDetail = {
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const settingsStrip = {
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: ".project-detail",
    };

    return (
      <div className="section-project">
        <h2 className="section__title">Project Carousel</h2>
        <small className="section__subtitle">
          A simple Synchronised carousel by
          <a href="https://codepen.io/ariona">@ariona_rian</a>
          <br />
          using Slick Carousel
        </small>

        <div className="project-carousel">
          <div className="project-strip">
            <Slider {...settingsStrip}>
              <div className="project" key={1}>
                <img src="Images/hackhound 2k23 photos/IMG1.jpg" alt="" />
              </div>
              <div className="project" key={2}>
                <img src="Images/hackhound 2k23 photos/IMG1.jpg" alt="" />
              </div>
              <div className="project" key={2}>
                <img src="Images/hackhound 2k23 photos/IMG1.jpg" alt="" />
              </div>
            </Slider>
          </div>

          <div className="project-screen">
            <Slider {...settingsDetail} className="project-detail">
              <div className="project" key={1}>
                <img src="Images/hackhound 2k23 photos/IMG1.jpg" alt="" />
              </div>
              <div className="project" key={2}>
                <img src="Images/hackhound 2k23 photos/IMG1.jpg" alt="" />
              </div>
            </Slider>
            <div className="screen-frame"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCarousel;
