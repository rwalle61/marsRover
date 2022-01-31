import { Position } from './domain';

const formatEndPositions = (endPositions: Position[]) =>
  endPositions
    .map(
      ({ x, y, direction }: Position): string => `${x} ${y} ${direction}`,
      [] as string[],
    )
    .join('\n');

export default formatEndPositions;
