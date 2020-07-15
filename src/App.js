import React from 'react';
import './App.scss';
import Campaign from './containers/campaign/Campaign';

function App() {
  return (
    <div className="container app-container">
      <img
        src={require('./assets/title.png')}
        alt="title-img"
        style={{ width: '15%' }}
      />
      <Campaign />
    </div>
  );
}

export default App;
