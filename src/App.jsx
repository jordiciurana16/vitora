import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './hooks/GlobalContext';
import MainPage from './pages/MainPage';
import MenuPage from './pages/menu/MenuPage';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/vitora/privacy" element={<MenuPage />} />
          <Route path="/vitora/terms" element={<MenuPage />} />
          <Route path="/vitora/cookies" element={<MenuPage />} />
          <Route path="/vitora/help" element={<MenuPage />} />
          <Route path="/vitora/contact" element={<MenuPage />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;
