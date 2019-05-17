import React from 'react';

import './style.scss';

function Table({ children }) {
  const classes = `table`;

  return (
    <div className={classes}>{children}</div>
  );
}

export default Table;
