import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStore } from '../store';
import MenuForm from '../components/MenuForm';
import MenuList from '../components/MenuList';

const MenuManagement = () => {
  const [menus, setMenus] = useState([]);
  const { addMenu, removeMenu, editMenu } = useStore();

  useEffect(() => {
    axios.get('/api/menus')
      .then(response => setMenus(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddMenu = (menu: any) => addMenu(menu);
  const handleRemoveMenu = (id: number) => removeMenu(id);
  const handleEditMenu = (id: number, menu: any) => editMenu(id, menu);

  return (
    <div>
      <h1>Menu Management</h1>
      <MenuForm onAdd={handleAddMenu} />
      <MenuList menus={menus} onRemove={handleRemoveMenu} onEdit={handleEditMenu} />
    </div>
  );
};

export default MenuManagement;