import React from 'react';
import ReactDOM from 'react-dom';

import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
      <GuestList />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
