import React, { createContext, useContext, useState, useEffect } from 'react';

// Creating a context to hold global state
const GlobalContext = createContext();

// GlobalProvider component manages shared state and provides it to consuming components
export const GlobalProvider = ({ children }) => {
  const [age, setAge] = useState(''); // State user age
  const [lifespan, setLifespan] = useState(72.4); // State user lifespan
  const [percentage, setPercentage] = useState(0); // State user percentage lived

  // Effect to calculate the percentage based on age and lifespan changes
  useEffect(() => {
    if (age !== '' && lifespan !== 0) {
      const calculatedPercentage = (age / lifespan) * 100;
      // Arrodoneix el valor a 3 decimals
      const roundedPercentage = calculatedPercentage.toFixed(3);
      setPercentage(Number(roundedPercentage)); // Assegura que és un número amb Number()
    }
  }, [age, lifespan]);

  // Providing state and state-setting functions via context provider
  return (
    <GlobalContext.Provider value={{ age, setAge, lifespan, setLifespan, percentage, setPercentage }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access global state values and functions
export const useGlobalContext = () => useContext(GlobalContext);
