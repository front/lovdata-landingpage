import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';

import './style.scss';

function Card({ children, featured, icon, title, teaser }) {
  const classes = `card${featured ? ` card--featured` : ''}`;

  return (
    <div className={classes}>
      <Icon type={icon} />
      <h3 className="card__title">{title}</h3>
      <p className="card__teaser">{teaser}</p>
      {children}
    </div>
  );
}

Card.propTypes = {
  featured: PropTypes.bool,
};

Card.defaultProps = {
  featured: false,
};

export default Card;
