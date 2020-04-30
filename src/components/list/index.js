import React from 'react';

import './style.scss';

function List({ children, title }) {
  const classes = `list`;

  return (
    <div tabIndex="0" aria-label={ title } className={ classes }>
      <h4 className="list__title">{ title }</h4>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default List;
