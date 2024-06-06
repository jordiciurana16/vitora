import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './hooks/GlobalContext';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import MenuPage from './pages/menu/MenuPage';
import ArticlesPage from './pages/ArticlesPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/vitora" element={<LandingPage />} />
          <Route path="/vitora/dashboard/*" element={<DashboardPage />} />
          <Route path="/vitora/articles" element={<ArticlesPage />} />
          <Route path="/vitora/resources" element={<ResourcesPage />} />
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
