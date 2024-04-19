import React from 'react';
import './index.css'; 

const TourStep3 = ({ onPrev }) => {
  return (
    <div className="container">
      <h2>Step 3: Final step</h2>
      <p>This is the final step of our tour.</p>
      {}
      <img src="https://picsum.photos/200/311" alt="Placeholder" />
      {}
      <button onClick={onPrev}>Previous</button>
      <button>Finish</button>
    </div>
  );
};

export default TourStep3;
