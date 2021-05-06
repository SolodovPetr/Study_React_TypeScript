import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'John', age: 21 },
  { name: 'Alex', age: 22 },
  { name: 'Dave', age: 23 },
];

const UserSearch: React.FC = () => {
  // Use REF example
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const searchHandler = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>Search User by name</h3>
      <div>{user && `${user.name} - Age:${user.age}`}</div>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchHandler}>Find</button>
    </div>
  );
};

export default UserSearch;
