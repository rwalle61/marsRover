import formatEndPositions from './formatEndPositions';
import getEndPositions from './getEndPositions';
import parseInput from './parseInput';

// app layer
// Single responsibility - just coordinate domain stuff
// could do a formatterService
const moveRovers = (input: string): string => {
  const commands = parseInput(input);

  const endPositions = getEndPositions(commands);

  const output = formatEndPositions(endPositions);

  return output;
};

export default moveRovers;
