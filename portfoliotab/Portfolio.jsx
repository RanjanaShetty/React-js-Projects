import React, { useState } from 'react';
import TabMenu from './TabMenu';
import TabContent from './TabMenuContent';
import './styles.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="portfolio">
      <h1>PORTFOLIO</h1>
      <TabMenu activeTab={activeTab} onTabChange={handleTabChange} />
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Portfolio;