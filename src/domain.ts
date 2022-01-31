export type Position = {
  x: number;
  y: number;
  direction: Direction;
};

export enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}
