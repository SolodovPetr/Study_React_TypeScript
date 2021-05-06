import React, { useState } from 'react';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setTerm(e.target.value)} type="text" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
