import React from 'react';
import ReactDOM from 'react-dom';

import GuestList from './state/GuestList';

const App = () => {
  return <GuestList />
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
