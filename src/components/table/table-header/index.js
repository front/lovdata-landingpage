import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function TableHeader({ children, bordered }) {
  const classes = `table-header${bordered ? ' table-header--bordered' : ''}`;

  return (
    <div className={classes}>{children}</div>
  );
}

TableHeader.propTypes = {
  bordered: PropTypes.bool,
};

TableHeader.defaultProps = {
  bordered: false,
};

export default TableHeader;
