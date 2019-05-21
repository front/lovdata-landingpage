import React from 'react';
import { Button } from '../../components';

import './style.scss';

import logo from '../../img/logo.svg';

function HeaderSection({ children, onClickButton } ) {

  return (
    <section className="header-section">
      <div className="container">
        <header>
          <img src={ logo } alt="Lovdata Pro" />
          <Button primary onClick={ onClickButton }>Få 3 måneder gratis</Button>
        </header>

        { children }
      </div>
    </section>
  );
}

export default HeaderSection;
