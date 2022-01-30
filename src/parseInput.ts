export type RoverInput = {
  startLocation: { x: number; y: number };
  startDirection: string;
  instructions: string[];
};

const parseInput = (input: string): RoverInput[] => {
  const [, ...roverInputs] = input.split('\n');

  const parsedRoverInputs = roverInputs.reduce(
    (currentParsedInputs, roverStartPosition, index, array) => {
      if (index % 2 === 0) {
        const instructions = array[index + 1].split('');
        const startX = parseInt(roverStartPosition[0], 10);
        const startY = parseInt(roverStartPosition[2], 10);
        const startDirection = roverStartPosition[4];

        const parsedRoverInput: RoverInput = {
          startLocation: { x: startX, y: startY },
          startDirection,
          instructions,
        };
        return [...currentParsedInputs, parsedRoverInput];
      }
      return currentParsedInputs;
    },
    [] as RoverInput[],
  );
  return parsedRoverInputs;
};

export default parseInput;
