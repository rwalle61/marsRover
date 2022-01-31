import { Position } from './domain';
import { RoverCommand } from './parseInput';

// app layer
const moveRover = ({ startPosition, commands }: RoverCommand): Position =>
  // no need to split out state yet. keep pure
  commands.reduce(
    (currentPosition, command) => command(currentPosition),
    startPosition,
  );

const getEndPositions = (roverCommands: RoverCommand[]): Position[] =>
  roverCommands.reduce((currentEndPositions, roverInput) => {
    const endPosition = moveRover(roverInput);
    return [...currentEndPositions, endPosition];
  }, [] as Position[]);

export default getEndPositions;
