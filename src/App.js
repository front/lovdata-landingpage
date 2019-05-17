import React from 'react';

import Button from './components/button';
import Icon from './components/icon';

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>Lovdata Pro fordeler</h1>
      </div>

      <div className="row">
        <Button primary>Click me!</Button>
      </div>
      <div className="row">
        <Icon type="notifications"></Icon>
        <Icon type="calendar"></Icon>
      </div>
    </div>
  );
}

export default App;
