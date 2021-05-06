import React from 'react';
import ReactDOM from 'react-dom';

// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';
// import UserSearch from './classes/UserSearch';
import UserSearch from './refs/UserSearch';

const users = [
  { name: 'John', age: 21 },
  { name: 'Alex', age: 22 },
  { name: 'Dave', age: 23 },
];

const App = () => {
  return (
    <div>
      <UserSearch />
      {/*<GuestList />
      <EventComponent />
      <UserSearch users={users} /> */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
