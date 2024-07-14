import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './MainRouting.module.css';
import ResultsContainer from '../../../containers/results/ResultsContainer';
import Exercise from '../../../containers/categories/Exercise';
import Genetic from '../../../containers/categories/Genetic';
import Geography from '../../../containers/categories/Geography';
import Stress from '../../../containers/categories/Stress';
import Accidents from '../../../containers/categories/Accidents';
import Addiction from '../../../containers/categories/Addiction';
import Climate from '../../../containers/categories/Climate';
import Economy from '../../../containers/categories/Economy';
import Education from '../../../containers/categories/Education';
import Environment from '../../../containers/categories/Environment';
import LawsAndPolicies from '../../../containers/categories/LawsAndPolicies';
import Health from '../../../containers/categories/Health';
import Nutrition from '../../../containers/categories/Nutrition';
import Occupation from '../../../containers/categories/Occupation';
import SocialLive from '../../../containers/categories/SocialLive';
import WarAndConflict from '../../../containers/categories/WarAndConflict';




function MainRouting() {
  return (
    <div className={`${styles.routesContainer}`}>
      <Routes>
        <Route path="accidents" element={<Accidents />} />
        <Route path="addiction" element={<Addiction />} />
        <Route path="climate" element={<Climate />} />
        <Route path="economy" element={<Economy />} />
        <Route path="education" element={<Education />} />
        <Route path="environment" element={<Environment />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="genetic" element={<Genetic />} />
        <Route path="geography" element={<Geography />} />
        <Route path="lawsandpolicies" element={<LawsAndPolicies />} />
        <Route path="health" element={<Health />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="occupation" element={<Occupation />} />
        <Route path="sociallive" element={<SocialLive />} />
        <Route path="stress" element={<Stress />} />
        <Route path="warandconflict" element={<WarAndConflict />} />
        <Route path="*" element={<ResultsContainer />} />
      </Routes>
    </div>
  );
}

export default MainRouting;
