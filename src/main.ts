enum RoverInstruction {
  SpinRight = 'R',
  SpinLeft = 'L',
  MoveForwards = 'M',
}

enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

const spinRoverLeft = {
  [Direction.North]: Direction.West,
  [Direction.East]: Direction.North,
  [Direction.South]: Direction.East,
  [Direction.West]: Direction.South,
};

const spinRoverRight = {
  [Direction.North]: Direction.East,
  [Direction.East]: Direction.South,
  [Direction.South]: Direction.West,
  [Direction.West]: Direction.North,
};

const moveRovers = (input: string): string => {
  const [, roverStartPosition, roverInstructions] = input.split('\n');

  if (!roverStartPosition) {
    return '';
  }

  if (roverInstructions) {
    const startLocation = roverStartPosition.substring(0, 3);

    let currentX = parseInt(startLocation[0], 10);
    let currentY = parseInt(startLocation[2], 10);

    let currentDirection = roverStartPosition[4];

    [...roverInstructions].forEach((roverInstruction) => {
      if (roverInstruction === RoverInstruction.SpinRight) {
        currentDirection = spinRoverRight[currentDirection];
      } else if (roverInstruction === RoverInstruction.SpinLeft) {
        currentDirection = spinRoverLeft[currentDirection];
      } else if (roverInstruction === RoverInstruction.MoveForwards) {
        if (currentDirection === Direction.East) {
          currentX += 1;
        } else if (currentDirection === Direction.West) {
          currentX -= 1;
        } else if (currentDirection === Direction.North) {
          currentY += 1;
        } else {
          currentY -= 1;
        }
      }
    });

    return `${currentX} ${currentY} ${currentDirection}`;
  }

  return roverStartPosition;
};

export default moveRovers;
