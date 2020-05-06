import React from 'react';

import './style.scss';

function ListItem({ children }) {
  const classes = `list-item`;
  const key = Math.random().toString(36).substring(2, 15);

  return (
    <li
      className={classes}
      key={`list-item-${key}`}
    >{children}</li>
  );
}

export default ListItem;
