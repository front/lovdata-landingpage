import React from 'react';

import './style.scss';

import logo from '../../img/logo_pro.png';

function HeaderSection({ children } ) {

  return (
    <section className="header-section">
      <div className="container">
        <header>
          <a href="mailto:"><img src={ logo } alt="Lovdata Pro" tabIndex="0" aria-label="LovData Pro" /></a>
        </header>

        { children }
      </div>
    </section>
  );
}

export default HeaderSection;
