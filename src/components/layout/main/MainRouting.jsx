import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './MainRouting.module.css';
import ResultsContainer from '../../../containers/results/ResultsContainer';
import FactorComponent from '../../../containers/factors/FactorComponent'; // Importem el nou component dinàmic

function MainRouting() {
  return (
    <div className={`${styles.routesContainer}`}>
      <Routes>
        {/* Ruta dinàmica per a qualsevol factor */}
        <Route path=":factor" element={<FactorComponent />} />
        <Route path="*" element={<ResultsContainer />} />
      </Routes>
    </div>
  );
}

export default MainRouting;
