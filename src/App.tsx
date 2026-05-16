import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Promotions from './components/Promotions';
import axios from 'axios';
import { useStore } from './store';

function App() {
  const [menu, setMenu] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const { data, error } = useStore();

  useEffect(() => {
    axios.get('/api/menu')
      .then(response => {
        setMenu(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('/api/promotions')
      .then(response => {
        setPromotions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home menu={menu} promotions={promotions} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;