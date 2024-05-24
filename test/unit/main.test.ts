import { main } from '../../src/main';
import {
  MAX_COORDINATE_VALUE,
  MAX_INSTRUCTION_CHARS,
} from '../../src/parseInput';

describe('main', () => {
  describe('when there are no robots', () => {
    it('should show no robots', () => {
      const input = '5 5';

      const output = main(input);

      expect(output).toBe('');
    });

    it('should show no robots (different input)', () => {
      const input = '0 0';

      const output = main(input);

      expect(output).toBe('');
    });
  });

  describe('when there is one robot', () => {
    it('should turn left (North to West)', () => {
      const input = `
        5 5
        0 0 N
        L
        `;
      const output = main(input);

      expect(output).toBe('0 0 W');
    });

    it('should turn left (East to North)', () => {
      const input = `
        5 5
        0 0 E
        L
        `;
      const output = main(input);

      expect(output).toBe('0 0 N');
    });

    it('should turn left (South to East)', () => {
      const input = `
        5 5
        0 0 S
        L
        `;
      const output = main(input);

      expect(output).toBe('0 0 E');
    });

    it('should turn left (West to South)', () => {
      const input = `
        5 5
        0 0 W
        L
        `;
      const output = main(input);

      expect(output).toBe('0 0 S');
    });

    it('should turn left (different starting location)', () => {
      const input = `
        5 5
        1 0 N
        L
        `;
      const output = main(input);

      expect(output).toBe('1 0 W');
    });

    it('should turn right (North to East)', () => {
      const input = `
        5 5
        0 0 N
        R
        `;
      const output = main(input);

      expect(output).toBe('0 0 E');
    });

    it('should turn right (East to South)', () => {
      const input = `
        5 5
        0 0 E
        R
        `;
      const output = main(input);

      expect(output).toBe('0 0 S');
    });

    it('should turn right (South to West)', () => {
      const input = `
        5 5
        0 0 S
        R
        `;
      const output = main(input);

      expect(output).toBe('0 0 W');
    });

    it('should turn right (West to North)', () => {
      const input = `
        5 5
        0 0 W
        R
        `;
      const output = main(input);

      expect(output).toBe('0 0 N');
    });

    it('should turn 2 times (right right)', () => {
      const input = `
        5 5
        0 0 N
        RR
        `;
      const output = main(input);

      expect(output).toBe('0 0 S');
    });

    it('should turn 2 times (right left)', () => {
      const input = `
        5 5
        0 0 N
        RL
        `;
      const output = main(input);

      expect(output).toBe('0 0 N');
    });

    it('should turn 3 times (right right right)', () => {
      const input = `
        5 5
        0 0 N
        RRR
        `;
      const output = main(input);

      expect(output).toBe('0 0 W');
    });

    it('should turn 5 times (right left right left right)', () => {
      const input = `
        5 5
        0 0 N
        RLRLR
        `;
      const output = main(input);

      expect(output).toBe('0 0 E');
    });

    it('should move once (start facing North)', () => {
      const input = `
        5 5
        0 0 N
        F
        `;
      const output = main(input);

      expect(output).toBe('0 1 N');
    });

    it('should move once (start facing East)', () => {
      const input = `
        5 5
        0 0 E
        F
        `;
      const output = main(input);

      expect(output).toBe('1 0 E');
    });

    it('should move once (start facing South)', () => {
      const input = `
        5 5
        0 1 S
        F
        `;
      const output = main(input);

      expect(output).toBe('0 0 S');
    });

    it('should move once (start facing West)', () => {
      const input = `
        5 5
        1 0 W
        F
        `;
      const output = main(input);

      expect(output).toBe('0 0 W');
    });

    it('should move once (different x start location)', () => {
      const input = `
        5 5
        2 0 N
        F
        `;
      const output = main(input);

      expect(output).toBe('2 1 N');
    });

    it('should move once (different y start location)', () => {
      const input = `
        5 5
        0 2 N
        F
        `;
      const output = main(input);

      expect(output).toBe('0 3 N');
    });

    it('should move twice', () => {
      const input = `
        5 5
        0 0 N
        FF
        `;
      const output = main(input);

      expect(output).toBe('0 2 N');
    });

    it('should move 3 times', () => {
      const input = `
        5 5
        0 0 N
        FFF
        `;
      const output = main(input);

      expect(output).toBe('0 3 N');
    });

    it('should move then turn right', () => {
      const input = `
        5 5
        0 0 N
        FR
        `;
      const output = main(input);

      expect(output).toBe('0 1 E');
    });

    it('should accept max instruction length', () => {
      const input = `
        5 5
        0 0 N
        ${'R'.repeat(MAX_INSTRUCTION_CHARS)}
        `;
      const output = main(input);

      expect(output).toBe('0 0 W');
    });

    it('should accept max coordinate value', () => {
      const input = `
        ${MAX_COORDINATE_VALUE} ${MAX_COORDINATE_VALUE}
        ${MAX_COORDINATE_VALUE} ${MAX_COORDINATE_VALUE} N
        R
        `;
      const output = main(input);

      expect(output).toBe(`${MAX_COORDINATE_VALUE} ${MAX_COORDINATE_VALUE} E`);
    });
  });

  describe('when there are multiple robots', () => {
    it('should move 2 robots', () => {
      const input = `
        5 5
        0 0 N
        F
        3 3 N
        F
        `;
      const output = main(input);

      expect(output).toBe(
        `
0 1 N
3 4 N
`.trim(),
      );
    });

    it('should move 3 robots', () => {
      const input = `
        5 5
        0 0 N
        F
        3 3 N
        F
        0 0 N
        F
        `;
      const output = main(input);

      expect(output).toBe(
        `
0 1 N
3 4 N
0 1 N
`.trim(),
      );
    });
  });

  describe('when a robot leaves the grid', () => {
    it('should be lost off top', () => {
      const input = `
        0 0
        0 0 N
        F`;
      const output = main(input);

      expect(output).toBe('0 0 N LOST');
    });

    it('should be lost off bottom', () => {
      const input = `
        0 0
        0 0 S
        F`;
      const output = main(input);

      expect(output).toBe('0 0 S LOST');
    });

    it('should be lost off left', () => {
      const input = `
        0 0
        0 0 W
        F`;
      const output = main(input);

      expect(output).toBe('0 0 W LOST');
    });

    it('should be lost off right', () => {
      const input = `
        0 0
        0 0 E
        F`;
      const output = main(input);

      expect(output).toBe('0 0 E LOST');
    });

    it('should show 2nd robot not leaving grid from scented point', () => {
      const input = `
        0 0
        0 0 N
        F
        0 0 N
        F`;
      const output = main(input);

      expect(output).toBe(
        `
0 0 N LOST
0 0 N
`.trim(),
      );
    });

    it('should show 2nd robot continuing after not leaving grid from scented point', () => {
      const input = `
        0 0
        0 0 N
        F
        0 0 N
        FR`;
      const output = main(input);

      expect(output).toBe(
        `
0 0 N LOST
0 0 E
`.trim(),
      );
    });
  });
});
