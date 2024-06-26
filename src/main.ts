import { formatTextOutput, type FormatOutputPort } from './formatOutput';
import { moveRobots } from './moveRobots';
import { parseTextInput, type ParseInputPort } from './parseInput';

// note - not needed for this task, but just illustrating hexagonal architecture
type Dependencies = {
  parseInput: ParseInputPort;
  formatOutput: FormatOutputPort;
};

type Handler = (dependencies: Dependencies) => (input: string) => string;

const handler: Handler =
  ({ parseInput, formatOutput }) =>
  (input) => {
    const { grid, robotInput: robotCommands } = parseInput(input);

    const robots = moveRobots(grid, robotCommands);

    const output = formatOutput(robots);

    return output;
  };

export const main = handler({
  parseInput: parseTextInput,
  formatOutput: formatTextOutput,
});
