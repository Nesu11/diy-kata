const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(52,35)).toBe('1.5')
    expect(reachDestination(44,10)).toBe('4.5')
  });
});
