import React from 'react';
import Menu from '../components/Menu';
import Promotions from '../components/Promotions';

interface HomeProps {
  menu: any[];
  promotions: any[];
}

function Home({ menu, promotions }: HomeProps) {
  return (
    <div>
      <h1>Welcome to our Home Page</h1>
      <Menu menu={menu} />
      <Promotions promotions={promotions} />
    </div>
  );
}

export default Home;