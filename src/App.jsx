import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './hooks/GlobalContext';
import LandingPage from './pages/landing/LandingPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import MenuPage from './pages/menu/MenuPage';
import ArticlesPage from './pages/articles/ArticlesPage';
import ArticleDetail from './pages/articles/ArticleDetail';

function App() {
  return (
    <Router basename="/vitora">
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
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
