const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('yppah')).toEqual('happy');
});

test('Reverse reverses a string', () => {
  expect(reverse('odaroloC')).toEqual('Colorado');
});
