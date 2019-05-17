import React from 'react';
// import PropTypes from 'prop-types';

import './style.scss';

function Icon({ children, type }) {
  const classes = `icon${type ? ` icon--${type}` : ''}`;

  return (
    <i className={classes}>{children}</i>
  );
}

// Icon.propTypes = {
//   primary: PropTypes.bool,
// };

// Icon.defaultProps = {
//   primary: false,
// };

export default Icon;
