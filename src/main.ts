const spinRoverLeft = {
  N: 'W',
  E: 'N',
  S: 'E',
  W: 'S',
};

const spinRoverRight = {
  N: 'E',
  E: 'S',
  S: 'W',
  W: 'N',
};

const spinRover = (
  startDirection: string,
  roverInstruction: string,
): string => {
  if (roverInstruction === 'R') {
    return spinRoverRight[startDirection];
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

    let currentDirection = roverStartPosition[4];

    currentDirection = spinRover(currentDirection, roverInstructions[0]);

    if (roverInstructions.length >= 2) {
      currentDirection = spinRover(currentDirection, roverInstructions[1]);
    }
    if (roverInstructions.length === 3) {
      currentDirection = spinRover(currentDirection, roverInstructions[2]);
    }

    return `${startLocation} ${currentDirection}`;
  }

  return roverStartPosition;
};

export default moveRovers;
