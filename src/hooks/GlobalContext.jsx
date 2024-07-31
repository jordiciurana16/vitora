import React, { createContext, useContext, useState } from 'react';
import { percentageLived } from '../utils/calculations/PercentageLived';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [age, setAge] = useState('');
  const [lifespan, setLifespan] = useState(72.41);
  const [percentage, setPercentage] = useState(0);
  const [birthdate, setBirthdate] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(1);

  const updateLifeAndPercentage = (effectOnLifespan) => {
    setLifespan(prevLifespan => {
      const newLifespan = (prevLifespan + effectOnLifespan).toFixed(2);
      const newPercentage = ((age / newLifespan) * 100).toFixed(2);
      setPercentage(Number(newPercentage));
      return Number(newLifespan);
    });
  };

  percentageLived({ age, lifespan, setPercentage });

  return (
    <GlobalContext.Provider value={{ age, setAge, lifespan, setLifespan, percentage, setPercentage, birthdate, setBirthdate, updateLifeAndPercentage, hoveredItem, setHoveredItem }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
