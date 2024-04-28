// Image.jsx

import React from 'react';
import imageStyles from './Image.module.css'; // Import CSS module for styling

const Image = ({ backgroundImage }) => {
  return (
    <div className={`${imageStyles['image-container']}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* You can add other content or elements inside the component if needed */}
    </div>
  );
};

export default Image;
