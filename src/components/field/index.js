import React from 'react';

import './style.scss';

function Field({ type, label }) {
  const classes = `field`;

  return (
    <input
      className={classes}
      type={type}
      placeholder={label}
    />
  );
}

export default Field;
