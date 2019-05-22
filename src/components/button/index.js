import React from 'react';

import './style.scss';

function Button({ className, children, primary, href, onClick, type = 'button' }) {
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
        type={ type }
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
