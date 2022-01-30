import getEndPositions from './getEndPositions';
import parseInput from './parseInput';

const moveRovers = (input: string): string => {
  const parsedRoverInputs = parseInput(input);

  const endPositions = getEndPositions(parsedRoverInputs);

  return endPositions.join('\n');
};

export default moveRovers;
