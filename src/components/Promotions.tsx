import React from 'react';
import { motion } from 'framer-motion';
import { FiGift } from 'lucide-react';

interface PromotionsProps {
  promotions: any[];
}

function Promotions({ promotions }: PromotionsProps) {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <ul>
        {promotions.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Promotions;