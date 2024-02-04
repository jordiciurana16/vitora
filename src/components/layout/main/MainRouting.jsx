import { Routes, Route } from 'react-router-dom';
import styles from './MainRouting.module.css'
import Main from '../../../containers/Main';
import Exercise from '../../../containers/Exercise';
import Genetic from '../../../containers/Genetic';

function MainRouting() {
  return (
    <div className={styles.routesContainer}>
      <Routes>
        <Route path="/vitora/exercise" element={<Exercise />} />
        <Route path="/vitora/genetic" element={<Genetic />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default MainRouting;