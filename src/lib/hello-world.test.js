const { helloWorld } = require('./hello-world');

test('hello, world', () => {
  expect(helloWorld('world')).toBe('hello, world');
});
