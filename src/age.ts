export const getAgeString = (age: number) {
  if (age < 0) {
    throw new Error('invalid age');
  }
  return `This person's age is ${age} years`;
}
