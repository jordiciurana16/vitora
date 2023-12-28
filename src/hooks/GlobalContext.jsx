import React, { createContext, useContext, useState } from 'react';
import { usePercentageEffect, useEstimatedDeathDateEffect } from '../utils/calculations/GlobalCalculations';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [age, setAge] = useState('');
  const [lifespan, setLifespan] = useState(72.4);
  const [percentage, setPercentage] = useState(0);
  const [birthdate, setBirthdate] = useState(null);
  const [deathdate, setDeathdate] = useState(null);

  // GlobalCalculations
  usePercentageEffect({ age, lifespan, setPercentage });
  useEstimatedDeathDateEffect({ birthdate, lifespan, setDeathdate });

  return (
    <GlobalContext.Provider value={{ age, setAge, lifespan, setLifespan, percentage, setPercentage, birthdate, setBirthdate, deathdate }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
