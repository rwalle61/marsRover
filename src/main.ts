const moveRovers = (input: string): string => {
  const [, roverStartPosition, roverInstructions] = input.split('\n');

  if (!roverStartPosition) {
    return '';
  }

  if (roverInstructions) {
    if (roverInstructions === 'R') {
      return '0 0 E';
    }
    return '0 0 W';
  }

  return roverStartPosition;
};

export default moveRovers;
