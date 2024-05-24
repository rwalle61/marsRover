export type Coordinates = Readonly<{
  x: number;
  y: number;
}>;

export const isSameCoordinates = (a: Coordinates, b: Coordinates): boolean =>
  a.x === b.x && a.y === b.y;

export type Position = Readonly<{
  coordinates: Coordinates;
  direction: Direction;
}>;


export enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}
