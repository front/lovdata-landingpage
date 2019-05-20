import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Button({ className, children, primary, href, onClick }) {
  let classes = [`btn`];

  if (primary) {
    classes.push(`btn--primary`);
  }

  if (className) {
    classes.push(className);
  }

  classes = classes.join(' ');

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
        onClick={onClick}
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
