import React from 'react';
import ReactDOM from 'react-dom';

import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div>
      <UserSearch />
      <GuestList />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
