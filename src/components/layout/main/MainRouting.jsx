import { Routes, Route } from 'react-router-dom';
import styles from './MainRouting.module.css'
import Results from '../../../containers/results/ResultsContainer';
import Exercise from '../../../containers/Exercise';
import Genetic from '../../../containers/Genetic';
import Geography from '../../../containers/Geography';


function MainRouting() {
  return (
    <div className={` ${styles.routesContainer}`}>
      <Routes>
        <Route path="/vitora/exercise" element={<Exercise />} />
        <Route path="/vitora/genetic" element={<Genetic />} />
        <Route path="/vitora/geography" element={<Geography />} />
        <Route path="/*" element={<Results />} />
      </Routes>
    </div>
  );
}

export default MainRouting;