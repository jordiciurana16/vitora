export const userAge = (birthdate) => {
    const currentDate = new Date();
    const ageInMillis = currentDate - birthdate;
    const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365);
    return ageInYears;
};
