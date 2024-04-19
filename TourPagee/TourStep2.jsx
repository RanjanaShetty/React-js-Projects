import React from 'react';
import './index.css'; 

const TourStep2 = ({ onNext, onPrev }) => {
  return (
    <div className="container">
      <h2>Step 2: Dive deeper</h2>
      <p>This is the second step of our tour.</p>
      {}
      <img src="https://picsum.photos/200/312" alt="Placeholder" />
      {}
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default TourStep2;
