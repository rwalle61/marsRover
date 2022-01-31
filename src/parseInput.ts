import { Command, commandFactory } from './Command';
import { Direction, Position } from './domain';

export type RoverCommand = {
  startPosition: Position;
  commands: Command[];
};

const parseInput = (input: string): RoverCommand[] => {
  const [, ...roverInputs] = input.split('\n');

  const roverCommands = roverInputs.reduce(
    (currentParsedInputs, roverStartPosition, index, array) => {
      if (index % 2 === 0) {
        const commands = array[index + 1].split('').map(commandFactory);
        // edge case where start x or y are more than 1 digit
        const startX = parseInt(roverStartPosition[0], 10);
        const startY = parseInt(roverStartPosition[2], 10);
        const startDirection = roverStartPosition[4] as Direction;

        const roverCommand: RoverCommand = {
          startPosition: { x: startX, y: startY, direction: startDirection },
          commands,
        };
        return [...currentParsedInputs, roverCommand];
      }
      return currentParsedInputs;
    },
    [] as RoverCommand[],
  );
  return roverCommands;
};

export default parseInput;
