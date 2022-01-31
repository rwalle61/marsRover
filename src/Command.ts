import { Direction, Position } from './domain';

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

export type Command = (currentPosition: Position) => Position;

const spinRightCommand: Command = (currentPosition) => ({
  ...currentPosition,
  direction: spinRoverRight[currentPosition.direction],
});

const spinLeftCommand: Command = (currentPosition) => ({
  ...currentPosition,
  direction: spinRoverLeft[currentPosition.direction],
});

const moveCommand: Command = ({ x, y, direction }) => {
  // assume rovers can go off plateau, no obstacles
  let nextX = x;
  let nextY = y;

  if (direction === Direction.East) {
    nextX = x + 1;
  } else if (direction === Direction.West) {
    nextX = x - 1;
  } else if (direction === Direction.North) {
    nextY = y + 1;
  } else {
    nextY = y - 1;
  }

  return {
    x: nextX,
    y: nextY,
    direction,
  };
};

enum RoverInstruction {
  SpinRight = 'R',
  SpinLeft = 'L',
  MoveForwards = 'M',
}

const instructionToCommand = {
  [RoverInstruction.SpinRight]: spinRightCommand,
  [RoverInstruction.SpinLeft]: spinLeftCommand,
  [RoverInstruction.MoveForwards]: moveCommand,
};

export const commandFactory = (instruction: RoverInstruction): Command =>
  instructionToCommand[instruction];
