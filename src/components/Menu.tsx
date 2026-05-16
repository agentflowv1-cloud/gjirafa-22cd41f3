import React from 'react';
import { motion } from 'framer-motion';
import { FiMenu } from 'lucide-react';

interface MenuProps {
  menu: any[];
}

function Menu({ menu }: MenuProps) {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
      <ul>
        {menu.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Menu;