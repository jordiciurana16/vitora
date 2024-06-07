// src/components/routing/MainRouting.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './MainRouting.module.css';
import Results from '../../../containers/results/ResultsContainer';
import Exercise from '../../../containers/categories/Exercise';
import Genetic from '../../../containers/categories/Genetic';
import Geography from '../../../containers/categories/Geography';
import Birthdate from '../../feature/Birthdate';

function MainRouting() {
  return (
    <div className={`${styles.routesContainer}`}>
      <Routes>
        <Route path="exercise" element={<Exercise />} />
        <Route path="genetic" element={<Genetic />} />
        <Route path="geography" element={<Geography />} />
        <Route path="birthdate" element={<Birthdate />} />
        <Route path="*" element={<Results />} />
      </Routes>
    </div>
  );
}

export default MainRouting;
