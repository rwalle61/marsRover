import moveRovers from '../src/main';

describe('Acceptance', () => {
  describe('when input has no rovers', () => {
    it('should show no rovers', () => {
      const input = '5 5';

      const output = moveRovers(input);

      expect(output).toBe('');
    });

    it('should show no rovers (different input)', () => {
      const input = '0 0';

      const output = moveRovers(input);

      expect(output).toBe('');
    });
  });

  describe('when input has one rover without instructions', () => {
    const input = `
5 5
0 0 N

`;

    it('should show the rover in the same position', () => {
      const output = moveRovers(input);

      expect(output).toBe('0 0 N');
    });
  });

  // eslint-disable-next-line jest/no-disabled-tests
  describe.skip('when input is the example test input', () => {
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
