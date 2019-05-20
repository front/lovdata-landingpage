import React from 'react';
import Button from '../../components/button';

import './style.scss';

function HeaderSection({ children, onClickButton } ) {

  return (
    <section className="header-section">
      <div className="container">
        <header>
          <h2>LovData <b>Pro</b></h2>
          <Button onClick={ onClickButton }>Prøv gratis</Button>
        </header>

        { children }
      </div>
    </section>
  );
}

export default HeaderSection;
