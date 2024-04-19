import React, { useState } from 'react';
import TourStep1 from './TourStep1';
import TourStep2 from './TourStep2';
import TourStep3 from './TourStep3';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <TourStep1 onNext={nextStep} />;
      case 2:
        return <TourStep2 onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <TourStep3 onPrev={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Awesome Tour Page</h1>
      {renderStep()}
    </div>
  );
}

export default App;