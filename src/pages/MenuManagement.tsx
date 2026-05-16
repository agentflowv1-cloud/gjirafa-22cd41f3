import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import MenuForm from '../components/MenuForm';
import MenuList from '../components/MenuList';

const MenuManagement = () => {
  const [menus, setMenus] = useState([]);
  const { addMenu, removeMenu, editMenu } = useStore();

  useEffect(() => {
    // Mock data for menus
    const menusData = [
      { id: 1, name: 'Menu 1', price: 10.99 },
      { id: 2, name: 'Menu 2', price: 9.99 },
      { id: 3, name: 'Menu 3', price: 12.99 }
    ];
    setMenus(menusData);
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