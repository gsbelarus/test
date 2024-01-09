export const getAgeString = (age: number) {
  if (age < 0) {
    throw new Error('Invalid age');
  }
  return `This person's age is ${age} years`;
}
