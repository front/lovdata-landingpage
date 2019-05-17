import React from 'react';

import './style.scss';

function ListItem({ children }) {
  const classes = `list-item`;

  return (
    <li className={classes}>{children}</li>
  );
}

export default ListItem;
