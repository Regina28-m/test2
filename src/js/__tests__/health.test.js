import showHealth from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'НеМаг', health: 45 }, 'wounded'],
  [{ name: 'НеМаг1', health: 14 }, 'critical'],
])(('show health with %s level'), (level, expected) => {
  const result = showHealth(level);

  expect(result).toBe(expected);
});
