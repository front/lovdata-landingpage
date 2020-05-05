import React from 'react';

import './style.scss';

import logo from '../../img/logo-pro.png';

function HeaderSection({ children } ) {

  return (
    <section className="header-section">
      <div className="container">
        <header>
          <img src={ logo } alt="Lovdata Pro" tabIndex="0" aria-label="LovData Pro" />
        </header>

        { children }
      </div>
    </section>
  );
}

export default HeaderSection;
