import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import MenuForm from '../components/MenuForm';
import MenuList from '../components/MenuList';

const MenuManagement = () => {
  const [menus, setMenus] = useState([]);
  const { menus: storeMenus, addMenu, removeMenu, editMenu } = useStore();

  useEffect(() => {
    setMenus(storeMenus);
  }, [storeMenus]);

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