import React from 'react';

import './style.scss';

function FormSection({ children, refProp, onSubmitProp } ) {
  return (
    <section className="form-section" ref={refProp}>
      <div className="container">
        <form onSubmit={ onSubmitProp }>{ children }</form>
      </div>
    </section>
  );
}

export default FormSection;
