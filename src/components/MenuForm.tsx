import React, { useState } from 'react';
import { useStore } from '../store';

const MenuForm = ({ onAdd }: any) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const { addMenu } = useStore();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onAdd({ name, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(event.target.valueAsNumber)} />
      </label>
      <button type="submit">Add Menu</button>
    </form>
  );
};

export default MenuForm;