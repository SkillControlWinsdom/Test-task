import React from 'react';
import './Box.css'; // Import CSS for styling (you'll create this file later)

const Box = ({ icon, text }) => {
  return (
    <div className="box-container">
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Box;