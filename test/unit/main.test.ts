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
});
