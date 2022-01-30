export type RoverInput = [string, string];

const parseInput = (input: string): RoverInput[] => {
  const [, ...roverInputs] = input.split('\n');

  const parsedRoverInputs = roverInputs.reduce(
    (currentParsedInputs, roverStartPosition, index, array) => {
      if (index % 2 === 0) {
        const roverInstructions = array[index + 1];
        const parsedRoverInput: RoverInput = [
          roverStartPosition,
          roverInstructions,
        ];
        return [...currentParsedInputs, parsedRoverInput];
      }
      return currentParsedInputs;
    },
    [] as RoverInput[],
  );
  return parsedRoverInputs;
};

export default parseInput;
