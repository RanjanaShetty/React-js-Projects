import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="py-2">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        <svg
          className={`fill-indigo-500 shrink-0 ml-8 ${
            accordionOpen ? "rotate-180" : "rotate-90"
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="transform origin-center transition duration-200 ease-out"
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="transform origin-center transition duration-200 ease-out"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`}
      >
        <div className="p-2 text-slate-600 text-sm">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;