import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    setGuests([...guests, name]);
    setName('');
  };

  return (
    <div>
      <h3>Guest Lists</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addGuest}>Add guest</button>
    </div>
  );
};

export default GuestList;
