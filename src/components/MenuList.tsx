import React from 'react';

interface Menu {
  id: number;
  name: string;
  price: number;
}

const MenuList = ({ menus, onRemove, onEdit }: any) => {
  return (
    <ul>
      {menus.map((menu: Menu) => (
        <li key={menu.id}>
          {menu.name} - {menu.price}
          <button onClick={() => onRemove(menu.id)}>Remove</button>
          <button onClick={() => onEdit(menu.id, { name: menu.name, price: menu.price })}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;