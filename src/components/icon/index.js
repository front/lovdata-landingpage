import React from 'react';

import './style.scss';

function Icon({ children, type }) {
  const classes = `icon${type ? ` icon--${type}` : ''}`;

  return (
    <i className={classes}>{children}</i>
  );
}

export default Icon;
