import { Direction, Position } from './domain';

const turnLeft = {
  [Direction.North]: Direction.West,
  [Direction.East]: Direction.North,
  [Direction.South]: Direction.East,
  [Direction.West]: Direction.South,
};

const turnRight = {
  [Direction.North]: Direction.East,
  [Direction.East]: Direction.South,
  [Direction.South]: Direction.West,
  [Direction.West]: Direction.North,
};

export type Command = (currentPosition: Position) => Position;

const turnRightCommand: Command = (currentPosition) => ({
  ...currentPosition,
  direction: turnRight[currentPosition.direction],
});

const turnLeftCommand: Command = (currentPosition) => ({
  ...currentPosition,
  direction: turnLeft[currentPosition.direction],
});

const moveCommand: Command = ({ coordinates: { x, y }, direction }) => {
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
    coordinates: { x: nextX, y: nextY },
    direction,
  };
};

export enum RobotInstruction {
  TurnRight = 'R',
  TurnLeft = 'L',
  MoveForwards = 'F',
}

// note - future command types easy to add
const instructionToCommand = {
  [RobotInstruction.TurnRight]: turnRightCommand,
  [RobotInstruction.TurnLeft]: turnLeftCommand,
  [RobotInstruction.MoveForwards]: moveCommand,
};

export const commandFactory = (instruction: RobotInstruction): Command =>
  instructionToCommand[instruction];
