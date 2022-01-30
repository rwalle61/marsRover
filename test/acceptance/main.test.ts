import moveRovers from '../../src/main';

describe('Acceptance', () => {
  describe('when one rover is instructed to turn', () => {
    const input = `
5 5
1 2 N
L`.trim();

    it('should turn the rover', () => {
      const output = moveRovers(input);

      expect(output).toBe('1 2 W');
    });
  });

  describe('when one rover is instructed to move forwards', () => {
    const input = `
5 5
1 2 N
M`.trim();

    it('should move the rover forwards', () => {
      const output = moveRovers(input);

      expect(output).toBe('1 3 N');
    });
  });

  describe('when one rover is instructed to turn and move forwards', () => {
    const input = `
5 5
1 2 N
LM`.trim();

    it('should turn and move the rover forwards', () => {
      const output = moveRovers(input);

      expect(output).toBe('0 2 W');
    });
  });

  describe('when the first example rover is instructed to move', () => {
    const input = `
5 5
1 2 N
LMLMLMLMM`.trim();

    it('should move the rover to the expected position', () => {
      const output = moveRovers(input);

      expect(output).toBe('1 3 N');
    });
  });

  describe('when the second example rover is instructed to move', () => {
    const input = `
5 5
3 3 E
MMRMMRMRRM`.trim();

    it('should move the rover to the expected position', () => {
      const output = moveRovers(input);

      expect(output).toBe('5 1 E');
    });
  });

  describe('when the two example rovers are instructed to move', () => {
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

  describe('when any number of rovers are instructed to move', () => {
    const input = `
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
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
1 3 N
5 1 E
`.trim(),
      );
    });
  });
});
