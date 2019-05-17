import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Button({ children, primary, href }) {
  const classes = `btn${primary ? ' btn--primary' : ''}`;

  if (href) {
    return (
      <a
        className={classes}
        href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        type="button"
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  primary: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
};

export default Button;
