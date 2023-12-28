import { useEffect } from 'react';

// Calculates and updates the age/lifespan percentage
export const usePercentageEffect  = ({ age, lifespan, setPercentage }) => {
  useEffect(() => {
    // Triggers the calculation when 'age', 'lifespan', or 'setPercentage' change
    if (age !== '' && lifespan !== 0) {
      // Calculates the percentage based on 'age' and 'lifespan'
      const calculatedPercentage = (age / lifespan) * 100;
      // Rounds the calculated percentage to three decimal places
      const roundedPercentage = calculatedPercentage.toFixed(2);
      // Updates the 'percentage' using 'setPercentage' function
      setPercentage(Number(roundedPercentage));
    }
  }, [age, lifespan, setPercentage]); // Dependency array for useEffect
};

// Calculates and updates the estimated death date based on birthdate and lifespan
export const useEstimatedDeathDateEffect = ({ birthdate, lifespan, setDeathdate }) => {
  useEffect(() => {
    // Triggers the calculation when 'birthdate', 'lifespan', or 'setDeathdate' change
    if (birthdate !== null) {
      // Obtains the birthdate in milliseconds
      const currentDate = new Date(birthdate).getTime();
      // Calculates the lifespan in milliseconds
      const lifespanInMillis = lifespan * 365 * 24 * 60 * 60 * 1000;
      // Calculates the estimated death date by adding lifespan to birthdate
      const estimatedDeathdate = new Date(currentDate + lifespanInMillis);
      // Updates 'deathdate' using 'setDeathdate' function
      setDeathdate(estimatedDeathdate);
    }
  }, [birthdate, lifespan, setDeathdate]); // Dependency array for useEffect
};
