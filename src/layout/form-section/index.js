import React from 'react';

import './style.scss';

function FormSection({ children, refProp} ) {

  return (
    <section className="form-section" ref={refProp}>
      <div className="container">
        <form>{ children }</form>
      </div>
    </section>
  );
}

export default FormSection;
