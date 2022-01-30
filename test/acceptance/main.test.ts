import moveRovers from '../../src/main';

describe('Acceptance', () => {
  describe('when input has a rover with one rotate instruction', () => {
    const input = `
5 5
1 2 N
L`.trim();

    it('should move the rover to the expected position', () => {
      const output = moveRovers(input);

      expect(output).toBe('1 2 W');
    });
  });

  describe('when input has a rover with one move instruction', () => {
    const input = `
5 5
1 2 N
M`.trim();

    it('should move the rover to the expected position', () => {
      const output = moveRovers(input);

      expect(output).toBe('1 3 N');
    });
  });

  describe('when input has a rover with a move and rotate instruction', () => {
    const input = `
5 5
1 2 N
LM`.trim();

    it('should move the rover to the expected position', () => {
      const output = moveRovers(input);

      expect(output).toBe('0 2 W');
    });
  });

  describe('when input has the first example rover with instructions', () => {
    const input = `
5 5
1 2 N
LMLMLMLMM`.trim();

    it('should move the rover to the expected position', () => {
      const output = moveRovers(input);

      expect(output).toBe('1 3 N');
    });
  });

  describe('when input has the second example rover with instructions', () => {
    const input = `
5 5
3 3 E
MMRMMRMRRM`.trim();

    it('should move the rover to the expected position', () => {
      const output = moveRovers(input);

      expect(output).toBe('5 1 E');
    });
  });

  describe('when input is the example test input (2 rovers with instructions)', () => {
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
