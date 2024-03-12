import React, { createContext, useContext, useState } from 'react';
import { percentageLived } from '../utils/calculations/PercentageLived';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [age, setAge] = useState('');
  const [lifespan, setLifespan] = useState(72.4);
  const [percentage, setPercentage] = useState(0);
  const [birthdate, setBirthdate] = useState(null);

  const updateLifeAndPercentage = (effectOnLifespan) => {
    setLifespan(prevLifespan => prevLifespan + effectOnLifespan);

    const newPercentage = ((age / (lifespan + effectOnLifespan)) * 100).toFixed(2);
    setPercentage(Number(newPercentage));
  };

  percentageLived({ age, lifespan, setPercentage });

  return (
    <GlobalContext.Provider value={{ age, setAge, lifespan, setLifespan, percentage, setPercentage, birthdate, setBirthdate, updateLifeAndPercentage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
