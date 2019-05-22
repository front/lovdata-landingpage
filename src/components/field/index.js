import React from 'react';

import './style.scss';

function Field({ type = 'text', label, name, required =  true }) {
  const classes = `field`;

  return (
    <input
      id={ name }
      className={ classes }
      name={ name }
      type={ type }
      placeholder={ label }
      required={ required }
    />
  );
}

export default Field;
