import { tyreType } from './tires';

describe('Tires function ', () => {
  test('Test for type weather rain and qualification', () => {
    expect(tyreType('rain', 'qualification')).toBe('rain');
  });

  test('Test for type weather drizzle and qualification', () => {
    expect(tyreType('drizzle', 'qualification')).toBe('intermediate');
  });

  test('Test for type weather dry and qualification', () => {
    expect(tyreType('dry', 'qualification')).toBe('soft');
  });

  test('Test for type weather dry and start', () => {
    expect(tyreType('dry', 'start')).toBe('medium');
  });

  test('Test for type weather dry and race', () => {
    expect(tyreType('dry', 'race')).toBe('hard');
  });
});
