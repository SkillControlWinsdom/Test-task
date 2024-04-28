import React from 'react';
import backgroundImage from '../resources/background.png'; // Adjust the path to match your folder structure

const Image = () => {
  return (
    <div className="image-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* You can add other content or elements inside the component if needed */}
    </div>
  );
};

export default Image;