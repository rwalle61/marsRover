import { Coordinates } from './domain';

export type Grid = Readonly<{ maxX: number; maxY: number }>;

export const isOffGrid = (grid: Grid, coordinates: Coordinates): boolean =>
  coordinates.x > grid.maxX ||
  coordinates.x < 0 ||
  coordinates.y > grid.maxY ||
  coordinates.y < 0;
