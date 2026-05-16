import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuManagement from './pages/MenuManagement';
import Promotions from './pages/Promotions';
import Header from './components/Header';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<MenuManagement />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;