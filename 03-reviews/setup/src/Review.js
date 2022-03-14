import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex(() => {
      let newIndex;
      newIndex = index + 1;
      if (newIndex === people.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex(() => {
      let newIndex;
      newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  };

  const randomNumber = () => {
    let random = Math.floor(Math.random() * people.length);
    setIndex(() => {
      random = random + 1;
      if (random === people.length) {
        random = 0;
      }
      return random;
    });
    console.log(random);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
