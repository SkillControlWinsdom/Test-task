// components/Task/Box.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.css'; // Import CSS module for styling

const Box = ({ icon, upperText, text, backgroundColor }) => {
  return (
    <div className={styles.box} style={{ backgroundColor }}>
      <div className={styles.icon}>
        {icon} {/* Render the icon directly */}
      </div>
      <div className={styles.content}>
        <div className={`${styles.upperText} ${upperText === 'Pitch' ? styles.boldUnderline : ''}`}>
          {upperText}
        </div>
        <div className={styles.title}>
          {/* Use HTML tags to make specific parts of text bold */}
          {upperText === 'Brief' && (
            <span>
              Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.
            </span>
          )}
          {upperText === 'Search' && (
            <span>
              In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.
            </span>
          )}
          {upperText === 'Pitch' && (
            <span>
              Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Box.propTypes = {
  icon: PropTypes.element.isRequired, // Change prop type to element
  upperText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Box;
