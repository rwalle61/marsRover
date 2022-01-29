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

const moveRovers = (input: string): string => {
  const [, roverStartPosition, roverInstructions] = input.split('\n');

  if (!roverStartPosition) {
    return '';
  }

  if (roverInstructions) {
    const startLocation = roverStartPosition.substring(0, 3);

    const startX = parseInt(startLocation[0], 10);
    let currentY = parseInt(startLocation[2], 10);

    let currentDirection = roverStartPosition[4];

    [...roverInstructions].forEach((roverInstruction) => {
      if (roverInstruction === 'R') {
        currentDirection = spinRoverRight[currentDirection];
      } else if (roverInstruction === 'L') {
        currentDirection = spinRoverLeft[currentDirection];
      } else if (roverInstruction === 'M') {
        currentY += 1;
      }
    });

    return `${startX} ${currentY} ${currentDirection}`;
  }

  return roverStartPosition;
};

export default moveRovers;
