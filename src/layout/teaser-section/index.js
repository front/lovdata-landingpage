import React from 'react';

import './style.scss';

function TeaserSection({ children} ) {

  return (
    <section className="teaser-section">
      <div className="container">
        { children }
      </div>
    </section>
  );
}

export default TeaserSection;
