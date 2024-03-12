export const userAge = (birthdate) => {
    const currentDate = new Date();
    const ageInMillis = currentDate - birthdate;
    const age = ageInMillis / (1000 * 60 * 60 * 24 * 365);
    return age;
};
