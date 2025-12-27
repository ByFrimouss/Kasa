import { useState } from "react";
import "../styles/slideshow.scss";

function Slideshow({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  if (!Array.isArray(images) || length === 0) return null;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slideshow">
      {length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}

      <div className="slide">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="slideshow-image"
        />
      </div>

      {length > 1 && (
        <div className="counter">
          {current + 1}/{length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
