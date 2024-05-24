import type { Grid } from './Grid';
import { isOffGrid } from './Grid';
import { isSameCoordinates, type Coordinates, type Position } from './domain';
import type { RobotInput } from './parseInput';

const moveRobot = (
  grid: Grid,
  scentCoordinates: Coordinates[],
  { startPosition, commands }: RobotInput,
): { position: Position; lostCoordinates?: Coordinates } => {
  let position = startPosition;

  for (const command of commands) {
    // note - could move this logic into the command (i.e. Command Pattern) but
    // for now this is simpler (& more flexible to change in future)
    const nextPosition = command(position);

    if (isOffGrid(grid, nextPosition.coordinates)) {
      if (
        scentCoordinates.some((coordinates) =>
          isSameCoordinates(coordinates, position.coordinates),
        )
      ) {
        continue;
      }

      return { position, lostCoordinates: position.coordinates };
    }
    position = nextPosition;
  }

  return { position };
};

export type Robot = Readonly<{
  position: Position;
  lostCoordinates?: Coordinates;
}>;

export const moveRobots = (grid: Grid, robotInputs: RobotInput[]): Robot[] => {
  const robots: Robot[] = [];

  for (const robotInput of robotInputs) {
    const scentCoordinates = robots
      .map((robot) => robot.lostCoordinates)
      .filter((coords): coords is Coordinates => Boolean(coords));

    const robot = moveRobot(grid, scentCoordinates, robotInput);

    robots.push(robot);
  }

  return robots;
};
