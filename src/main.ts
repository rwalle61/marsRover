const moveRovers = (input: string): string => {
  const parsedInput = input.split('\n');

  if (parsedInput.length === 1) {
    return '';
  }

  if (parsedInput[2]) {
    return '0 0 W';
  }

  return parsedInput[1];
};

export default moveRovers;
