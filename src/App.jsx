import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './hooks/GlobalContext';
import MainPage from './pages/MainPage';
import LegalPage from './pages/legal/LegalPage';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/vitora/privacy" element={<LegalPage />} />
          <Route path="/vitora/terms" element={<LegalPage />} />
          <Route path="/vitora/cookies" element={<LegalPage />} />
          <Route path="/vitora/help" element={<LegalPage />} />


        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;
