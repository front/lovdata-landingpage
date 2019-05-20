import React from 'react';
import PropTypes from 'prop-types';

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

Field.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  label: '',
};

export default Field;
