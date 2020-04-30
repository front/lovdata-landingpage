import React from 'react';

import './style.scss';

function Table({ children }) {
  const classes = `table`;

  return (
    <div role="table" tabIndex="0" className={ classes }>{ children }</div>
  );
}

export default Table;
