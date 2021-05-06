import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
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
