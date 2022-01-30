import { RoverInput } from './parseInput';

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

const moveRover = ({
  startLocation,
  startDirection,
  instructions,
}: RoverInput): string => {
  let currentX = startLocation.x;
  let currentY = startLocation.y;

  let currentDirection = startDirection;

  [...instructions].forEach((instruction) => {
    if (instruction === RoverInstruction.SpinRight) {
      currentDirection = spinRoverRight[currentDirection];
    } else if (instruction === RoverInstruction.SpinLeft) {
      currentDirection = spinRoverLeft[currentDirection];
    } else if (instruction === RoverInstruction.MoveForwards) {
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
};

const getEndPositions = (parsedRoverInputs: RoverInput[]) =>
  parsedRoverInputs.reduce((currentEndPositions, roverInput) => {
    const endPosition = moveRover(roverInput);
    return [...currentEndPositions, endPosition];
  }, [] as string[]);

export default getEndPositions;
