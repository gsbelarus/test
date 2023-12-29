export const getAgeString = (years: number) => {
  if (age > 0 && age < 180) {
    return `The age of the person: ${years} years.`;
  } else {
    return 'Invalid age!';
  }
}
