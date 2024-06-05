import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './hooks/GlobalContext';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import MenuPage from './pages/menu/MenuPage';
import ArticlesPage from './pages/ArticlesPage';
import DataPage from './pages/DataPage';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/vitora" element={<LandingPage />} />
          <Route path="/vitora/profile/*" element={<ProfilePage />} />
          <Route path="/vitora/articles" element={<ArticlesPage />} />
          <Route path="/vitora/data" element={<DataPage />} />
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
