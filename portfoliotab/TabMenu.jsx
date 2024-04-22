import React from 'react';

const TabMenu = ({ activeTab, onTabChange }) => {
  return (
    <div className="tab-menu">
      <button className={activeTab === 'Projects' ? 'active' : ''} onClick={() => onTabChange('Projects')}>
        Projects
      </button>
      <button className={activeTab === 'About' ? 'active' : ''} onClick={() => onTabChange('About')}>
        About
      </button>
      <button className={activeTab === 'Contact' ? 'active' : ''} onClick={() => onTabChange('Contact')}>
        Contact
      </button>
    </div>
  );
};

export default TabMenu;