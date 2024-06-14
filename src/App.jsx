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
    <Router basename="/vitora">
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/privacy" element={<MenuPage />} />
          <Route path="/terms" element={<MenuPage />} />
          <Route path="/cookies" element={<MenuPage />} />
          <Route path="/help" element={<MenuPage />} />
          <Route path="/contact" element={<MenuPage />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;
