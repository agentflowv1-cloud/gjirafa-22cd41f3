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

  // Add initial menu items if none exist
  if (storeMenus.length === 0) {
    const initialMenuItems = [
      { id: 1, name: 'Item 1', price: 10.99 },
      { id: 2, name: 'Item 2', price: 9.99 },
      { id: 3, name: 'Item 3', price: 12.99 }
    ];
    initialMenuItems.forEach((item) => addMenu(item));
  }

  return (
    <div>
      <h1>Menu Management</h1>
      <MenuForm onAdd={handleAddMenu} />
      <MenuList menus={menus} onRemove={handleRemoveMenu} onEdit={handleEditMenu} />
    </div>
  );
};

export default MenuManagement;