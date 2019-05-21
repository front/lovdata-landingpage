import React from 'react';

import './style.scss';

function List({ children, title }) {
  const classes = `list`;

  return (
    <div className={classes}>
      <h4 className="list__title">{title}</h4>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default List;
