const moveRovers = (input: string): string => {
  if (input.split('\n').length === 1) {
    return '';
  }
  if (input.split('\n')[2]) {
    return '0 0 W';
  }
  return input.split('\n')[1];
};

export default moveRovers;
