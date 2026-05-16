import React from 'react';
import { Promotions } from '../components/Promotions';
import { useStore } from '../store';

const PromotionsPage = () => {
  const { menus } = useStore((state) => state.menus);
  return (
    <div>
      <h1>Promotions</h1>
      <Promotions promotions={menus} />
    </div>
  );
};

export default PromotionsPage;