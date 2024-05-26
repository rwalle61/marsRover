import { main } from '../../src/main';

// note - I've used acceptance tests for main features, unit tests for robustness & edge cases
describe('Acceptance', () => {
  it('should turn one robot', () => {
    const input = `
      5 5
      1 2 N
      L`.trim();
    const output = main(input);

    expect(output).toBe('1 2 W');
  });

  it('should move one robot forwards', () => {
    const input = `
      5 5
      1 2 N
      F`.trim();
    const output = main(input);

    expect(output).toBe('1 3 N');
  });

  it('turn and move one robot forwards', () => {
    const input = `
      5 5
      1 2 N
      LF`.trim();
    const output = main(input);

    expect(output).toBe('0 2 W');
  });

  it('should move the 1st example robot', () => {
    const input = `
      5 3
      1 1 E
      RFRFRFRF`.trim();
    const output = main(input);

    expect(output).toBe('1 1 E');
  });

  it('should move the 2nd example robot', () => {
    const input = `
      5 3
      3 2 N
      FRRFLLFFRRFLL`.trim();
    const output = main(input);

    expect(output).toBe('3 3 N LOST');
  });

  it('should move all example robots', () => {
    const input = `
      5 3
      1 1 E
      RFRFRFRF
      3 2 N
      FRRFLLFFRRFLL
      0 3 W
      LLFFFLFLFL`.trim();
    const output = main(input);

    expect(output).toBe(
      `
1 1 E
3 3 N LOST
2 3 S
`.trim(),
    );
  });

  it('should move any number of robots', () => {
    const input = `
      5 3
      1 1 E
      RFRFRFRF
      3 2 N
      FRRFLLFFRRFLL
      0 3 W
      LLFFFLFLFL
      0 3 W
      LLFFFLFLFL
      0 3 W
      LLFFFLFLFL
      0 3 W
      LLFFFLFLFL`.trim();
    const output = main(input);

    expect(output).toBe(
      `
1 1 E
3 3 N LOST
2 3 S
2 3 S
2 3 S
2 3 S
`.trim(),
    );
  });

  // note - you can use this to run my code against new data
  it('should run with new input', () => {
    const input = `
    5 3
    1 1 E
    RFRFRFRF
      `.trim();
    const output = main(input);

    expect(output).toBe(
      `
1 1 E
`.trim(),
    );
  });
});
