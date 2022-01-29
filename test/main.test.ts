import moveRovers from '../src/main';

describe('Acceptance', () => {
  describe('given the example test input', () => {
    const input = `
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`.trim();

    it('should move the rovers to the expected positions', () => {
      const output = moveRovers(input);

      expect(output).toBe(
        `
1 3 N
5 1 E
`.trim(),
      );
    });
  });
});
