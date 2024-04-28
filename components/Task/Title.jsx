// components/Task/Title.jsx

import React from 'react';
import PropTypes from 'prop-types';
import titleStyles from './Title.module.css'; // Import CSS module for styling

const Title = ({ className, children }) => {
  return <h1 className={`${titleStyles.title} ${className}`}>{children}</h1>;
};

Title.propTypes = {
  className: PropTypes.string, // Add prop type for className
  children: PropTypes.node.isRequired,
};

export default Title;
