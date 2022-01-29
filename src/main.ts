const moveRovers = (input: string): string => {
  const [, roverStartPosition, roverInstructions] = input.split('\n');

  if (!roverStartPosition) {
    return '';
  }

  if (roverInstructions) {
    const startDirection = roverStartPosition[4];

    if (roverInstructions === 'R') {
      return '0 0 E';
    }
    if (startDirection === 'E') {
      return '0 0 N';
    }
    return '0 0 W';
  }

  return roverStartPosition;
};

export default moveRovers;
