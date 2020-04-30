import React from 'react';

import './style.scss';

function Field({ type = 'text', label, name, required = true, className }) {
  let classes = `field`;

  if ( className ) {
    classes = `${classes} ${className}`;
  }

  return <div className={ classes }>
    <label className={ `field__label` } htmlFor={ name }>{ label }</label>
    <input
      id={ name }
      name={ name }
      className={ `field__input` }
      type={ type }
      required={ required }
      aria-required={ required }
      aria-label={ label }
    />
  </div>;
}

export default Field;
