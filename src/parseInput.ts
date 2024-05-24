import { Command, commandFactory, type RobotInstruction } from './Command';
import type { Direction } from './domain';
import { Position } from './domain';
import { Grid } from './Grid';
import { parseInteger } from './utils';

const INPUT_LINES_PER_ROBOT = 2;
const COORDINATE_DELIMITER = ' ';
const INSTRUCTION_LINE_DELIMETER = '\n';
const START_POSITION_DELIMETER = ' ';
const INSTRUCTION_DELIMITER = '';

export const MAX_INSTRUCTION_CHARS = 99;

export const MAX_COORDINATE_VALUE = 50;

export type RobotInput = Readonly<{
  startPosition: Position;
  commands: Command[];
}>;

// note - this assumes the input is valid, but with more time, I'd add lots of validation

export const parseTextInput: ParseInputPort = (input) => {
  const [gridLine, ...inputLines] = input
    .split(INSTRUCTION_LINE_DELIMETER)
    .map((line) => line.trimStart())
    .filter(Boolean);

  const [maxX, maxY] = gridLine
    .split(COORDINATE_DELIMITER)
    .map((coordinate) => parseInteger(coordinate));

  const grid: Grid = { maxX, maxY };

  const robotInputs: RobotInput[] = [];

  for (let i = 0; i < inputLines.length; i += INPUT_LINES_PER_ROBOT) {
    const startPositionLine = inputLines[i];
    const instructionsLine = inputLines[i + 1];

    const [startXString, startYString, startDirectionString] =
      startPositionLine.split(START_POSITION_DELIMETER);

    const startPosition: Position = {
      coordinates: {
        x: parseInteger(startXString),
        y: parseInteger(startYString),
      },
      direction: startDirectionString as Direction,
    };

    const commands = instructionsLine
      .split(INSTRUCTION_DELIMITER)
      .map((instruction) => commandFactory(instruction as RobotInstruction));

    const robotInput: RobotInput = {
      startPosition,
      commands,
    };
    robotInputs.push(robotInput);
  }

  return { grid, robotInput: robotInputs };
};
export type ParseInputPort = (input: string) => {
  grid: Grid;
  robotInput: RobotInput[];
};
