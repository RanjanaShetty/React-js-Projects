import React from 'react';

const TabMenuContent = ({ activeTab }) => {
  return (
    <div className="tab-content">
      {activeTab === 'Projects' && <h2>COVID-19 TESTING AND MANAGMENT SYSTEM:
      A COVID-19 testing and management system facilitates efficient testing procedures, including scheduling appointments, sample collection, and result reporting. It also aids in tracking and managing patient data, contact tracing, and implementing public health measures to mitigate the spread of the virus.
        </h2>}
      {activeTab === 'About' && <h2>RANJANA R SHETTY CSE UNDERGRAD WITH GOOD COMMUNICATION AND PROBLEM SOLVING SKILL </h2>}
      {activeTab === 'Contact' && <h2>email:ranjanarshetty123@gmail.com
        linkedin:www.linkedin.com/in/ranjana-r-shetty-a78670224</h2>}
    </div>
  );
};

export default TabMenuContent;
