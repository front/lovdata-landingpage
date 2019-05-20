import React from 'react';

import './style.scss';

function FooterSection({ children} ) {
  return (
    <section className="footer-section">
      <div className="container">
        { children }
        <footer>Lovdata Pro er en tjeneste fra Stiftelsen Lovdata — ©2019</footer>
      </div>
    </section>
  );
}

export default FooterSection;
