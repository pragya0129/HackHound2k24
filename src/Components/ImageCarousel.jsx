import React, { useState } from 'react';
import './ImageCarousel.css'; // Import the CSS file for styling

const ImageCarousel = ({ images }) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={`container ${lightMode ? 'light' : ''}`}>
      <aside className="carousel">
        <div className="carousel__wrapper">
          {images.map((item, i) => (
            <div key={`slide-${i}`} className="item" id={`slide-${i}`}>
              <img src={item} alt="" width="418" height="418" />
            </div>
          ))}
        </div>
      </aside>
      <article className="instagram">
        <header className="instagram__header">
          <figure>
            <img
              src="https://assets.codepen.io/108082/jake-dog.png"
              alt="Jake Dog"
              width="42"
              height="42"
            />
            <figcaption>
              <h4>Jake the Dog</h4>
            </figcaption>
          </figure>
        </header>
        <section className="instagram__media">
          <div className="img"></div>
        </section>
        <footer className="instagram__buttons">
          <div className="left">
            <svg
              className="instagram__icon instagram__icon--heart"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Heart icon path */}
            </svg>
            <svg
              className="instagram__icon instagram__icon--comment"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Comment icon path */}
            </svg>
            <svg
              className="instagram__icon instagram__icon--message"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Message icon path */}
            </svg>
          </div>
          <div className="right">
            <svg
              className="instagram__icon instagram__icon--saved"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Saved icon path */}
            </svg>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ImageCarousel;
