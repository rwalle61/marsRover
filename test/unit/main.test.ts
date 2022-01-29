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

    it('should spin the rover 2 times (right right)', () => {
      const input = `
5 5
0 0 N
RR
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 S');
    });

    it('should spin the rover 2 times (right left)', () => {
      const input = `
5 5
0 0 N
RL
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 N');
    });

    it('should spin the rover 3 times (right right right)', () => {
      const input = `
5 5
0 0 N
RRR
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 W');
    });

    it('should spin the rover 5 times (right left right left right)', () => {
      const input = `
5 5
0 0 N
RLRLR
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 E');
    });

    it('should move the rover once (start facing North)', () => {
      const input = `
5 5
0 0 N
M
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 1 N');
    });

    it('should move the rover once (start facing East)', () => {
      const input = `
5 5
0 0 E
M
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('1 0 E');
    });

    it('should move the rover once (start facing South)', () => {
      const input = `
5 5
0 1 S
M
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 S');
    });

    it('should move the rover once (start facing West)', () => {
      const input = `
5 5
1 0 W
M
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 0 W');
    });

    it('should move the rover once (different x start location)', () => {
      const input = `
5 5
2 0 N
M
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('2 1 N');
    });

    it('should move the rover once (different y start location)', () => {
      const input = `
5 5
0 2 N
M
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 3 N');
    });

    it('should move the rover twice', () => {
      const input = `
5 5
0 0 N
MM
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 2 N');
    });

    it('should move the rover 3 times', () => {
      const input = `
5 5
0 0 N
MMM
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 3 N');
    });

    it('should move then turn the rover right', () => {
      const input = `
5 5
0 0 N
MR
`.trim();
      const output = moveRovers(input);

      expect(output).toBe('0 1 E');
    });
  });
});
