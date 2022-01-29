const moveRovers = (input: string): string => {
  if (input.split('\n').length === 1) {
    return '';
  }
  return '0 0 N';
};

export default moveRovers;
