import React from 'react';
import './index.css'; 

const TourStep1 = ({ onNext }) => {
  return (
    <div>
      <h2>Step 1: Welcome to our tour!</h2>
      <p>This is the first step of our tour. Let's get started!</p>
      {}
      <img src="https://picsum.photos/200/314" alt="Placeholder" />
      {}
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default TourStep1;