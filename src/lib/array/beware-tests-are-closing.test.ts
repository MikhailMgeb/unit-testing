import { checkBrackets } from './beware-tests-are-closing';

test('Test for correct nesting backers', () => {
  expect(checkBrackets('[)][{}')).toBeFalsy();
});

test('Test for correct nesting backers', () => {
  expect(checkBrackets('{([])}')).toBeTruthy();
});
