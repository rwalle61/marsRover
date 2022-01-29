const moveRovers = (input: string): string => {
  const [, roverStartPosition, roverInstructions] = input.split('\n');

  if (!roverStartPosition) {
    return '';
  }

  if (roverInstructions) {
    const startDirection = roverStartPosition[4];

    const startLocation = roverStartPosition.substring(0, 4);

    if (roverInstructions === 'R') {
      return `${startLocation}E`;
    }
    if (startDirection === 'E') {
      return `${startLocation}N`;
    }
    if (startDirection === 'S') {
      return `${startLocation}E`;
    }
    if (startDirection === 'W') {
      return `${startLocation}S`;
    }
    return `${startLocation}W`;
  }

  return roverStartPosition;
};

export default moveRovers;
