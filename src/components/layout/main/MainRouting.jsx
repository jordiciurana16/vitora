import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './MainRouting.module.css';
import ResultsContainer from '../../../containers/results/ResultsContainer';
import Exercise from '../../../containers/factors/Exercise';
import Genetic from '../../../containers/factors/Genetic';
import Geography from '../../../containers/factors/Geography';
import Stress from '../../../containers/factors/Stress';
import Accidents from '../../../containers/factors/Accidents';
import Addiction from '../../../containers/factors/Addiction';
import Climate from '../../../containers/factors/Climate';
import Economy from '../../../containers/factors/Economy';
import Education from '../../../containers/factors/Education';
import Environment from '../../../containers/factors/Environment';
import LawsAndPolicies from '../../../containers/factors/LawsAndPolicies';
import Health from '../../../containers/factors/Health';
import Nutrition from '../../../containers/factors/Nutrition';
import Occupation from '../../../containers/factors/Occupation';
import SocialLive from '../../../containers/factors/SocialLive';
import WarAndConflict from '../../../containers/factors/WarAndConflict';




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
