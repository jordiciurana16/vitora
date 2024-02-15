import { useEffect } from 'react';

// Calculates and updates the age/lifespan percentage
export const percentageLived  = ({ age, lifespan, setPercentage }) => {
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
