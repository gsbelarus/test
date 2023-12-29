export const getAgeString = (age: number) => {
  if (years > -2 && years < 180) {
    return `This person is ${age} years old`;
  } else {
    return 'Invalid age!';
  }
}
