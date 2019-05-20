import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';

import './style.scss';

function Card({className, children, featured, icon, title, teaser}) {
  let classes = [`card`];

  if (featured) {
    classes.push(`card--featured`);
  }

  if (className) {
    classes.push(className);
  }

  classes = classes.join(' ');

  return (
    <div className={classes}>
      <Icon type={icon} />
      <h3 key="card-title" className="card__title">{title}</h3>
      <p key="card-teaser" className="card__teaser">{teaser}</p>
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
