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

    [...roverInstructions].forEach((roverInstruction) => {
      currentDirection = spinRover(currentDirection, roverInstruction);
    });

    const startX = parseInt(startLocation[0], 10);
    let currentY = parseInt(startLocation[2], 10);

    if (roverInstructions[0] === 'M') {
      [...roverInstructions].forEach(() => {
        currentY += 1;
      });
      return `${startX} ${currentY} N`;
    }

    return `${startLocation} ${currentDirection}`;
  }

  return roverStartPosition;
};

export default moveRovers;
