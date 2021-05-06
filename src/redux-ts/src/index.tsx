import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  return <h1>Hello, Redux + TS</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
