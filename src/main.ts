const spinRoverLeft = {
  N: 'W',
  E: 'N',
  S: 'E',
  W: 'S',
};

const spinRover = (
  startDirection: string,
  roverInstructions: string,
): string => {
  if (roverInstructions === 'R') {
    return 'E';
  }
  return spinRoverLeft[startDirection];
};

const moveRovers = (input: string): string => {
  const [, roverStartPosition, roverInstructions] = input.split('\n');

  if (!roverStartPosition) {
    return '';
  }

  if (roverInstructions) {
    const startLocation = roverStartPosition.substring(0, 3);

    const startDirection = roverStartPosition[4];

    const endDirection = spinRover(startDirection, roverInstructions);

    return `${startLocation} ${endDirection}`;
  }

  return roverStartPosition;
};

export default moveRovers;
