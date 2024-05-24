import type { Robot } from './moveRobots';

const LOST_STRING = 'LOST';

export const formatTextOutput: FormatOutputPort = (robots) =>
  robots
    .map(
      ({
        position: {
          coordinates: { x, y },
          direction,
        },
        lostCoordinates,
      }: Robot): string =>
        lostCoordinates
          ? `${x} ${y} ${direction} ${LOST_STRING}`
          : `${x} ${y} ${direction}`,
    )
    .join('\n');
export type FormatOutputPort = (robots: Robot[]) => string;
