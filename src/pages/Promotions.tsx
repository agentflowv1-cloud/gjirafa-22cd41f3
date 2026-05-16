import React from 'react';
import { Promotions } from '../components/Promotions';
import { useStore } from '../store';

const PromotionsPage = () => {
  const { menus } = useStore((state) => state.menus);
  // Use mock promotions data as menus is being used for menu management
  const promotions = [
    { id: 1, name: 'Promotion 1' },
    { id: 2, name: 'Promotion 2' },
  ];
  return (
    <div>
      <h1>Promotions</h1>
      <Promotions promotions={promotions} />
    </div>
  );
};

export default PromotionsPage;