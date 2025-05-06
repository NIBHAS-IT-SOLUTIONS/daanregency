import React from 'react';
import './HighlightBar.css';

const HighlightBar = () => {
  return (
    <div className="city-highlight-bar-wrapper">
      <div className="city-highlight-bar text-white">
        <span className="scrolling-text">
          🏨 Available in Major Cities: <strong>Kochi</strong>, <strong>Trivandrum</strong>, <strong>Thrissur</strong>, <strong>Kottayam</strong> &nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
};

export default HighlightBar;
