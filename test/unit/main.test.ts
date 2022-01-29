import moveRovers from '../../src/main';

describe('main', () => {
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
    it('should show the rover in the same position', () => {
      const input = `
5 5
0 0 N

`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 N');
    });

    it('should show the rover in the same position (different input)', () => {
      const input = `
5 5
1 0 N

`.trim();
      const output = moveRovers(input);

      expect(output).toBe('1 0 N');
    });
  });

  describe('when input has one rover with instructions', () => {
    it('should spin the rover left (North to West)', () => {
      const input = `
5 5
0 0 N
L
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 W');
    });

    it('should spin the rover left (East to North)', () => {
      const input = `
5 5
0 0 E
L
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 N');
    });

    it('should spin the rover left (South to East)', () => {
      const input = `
5 5
0 0 S
L
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 E');
    });

    it('should spin the rover left (West to South)', () => {
      const input = `
5 5
0 0 W
L
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 S');
    });

    it('should spin the rover left (different starting location)', () => {
      const input = `
5 5
1 0 N
L
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('1 0 W');
    });

    it('should spin the rover right (North to East)', () => {
      const input = `
5 5
0 0 N
R
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 E');
    });

    it('should spin the rover right (East to South)', () => {
      const input = `
5 5
0 0 E
R
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 S');
    });

    it('should spin the rover right (South to West)', () => {
      const input = `
5 5
0 0 S
R
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 W');
    });

    it('should spin the rover right (West to North)', () => {
      const input = `
5 5
0 0 W
R
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 N');
    });

    it('should spin the rover 2 times (right then right)', () => {
      const input = `
5 5
0 0 N
RR
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 S');
    });

    it('should spin the rover 2 times (right then left)', () => {
      const input = `
5 5
0 0 N
RL
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 N');
    });
  });
});
