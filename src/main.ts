const moveRovers = (input: string): string => {
  if (input.split('\n').length === 1) {
    return '';
  }
  return input.split('\n')[1];
};

export default moveRovers;
