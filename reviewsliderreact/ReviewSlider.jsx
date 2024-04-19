// src/ReviewSlider.jsx
import React, { useState } from 'react';
import './ReviewSlider.css';

const reviews = [
  { id: 1, text: 'Review 1 text', author: 'Author 1', imageUrl: 'img1.jpg' },
  { id: 2, text: 'Review 2 text', author: 'Author 2', imageUrl: 'img2.jpg' },
  { id: 3, text: 'Review 3 text', author: 'Author 3', imageUrl: 'img3.jpg' },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <div className="review-slider">
      <button onClick={prevReview}>&lt;</button>
      <div className="review">
        <img src={reviews[index].imageUrl} alt={`Review by ${reviews[index].author}`} />
        <p>{reviews[index].author}</p>
        <p>{reviews[index].text}</p>
      </div>
      <button onClick={nextReview}>&gt;</button>
    </div>
  );
};

export default ReviewSlider;
