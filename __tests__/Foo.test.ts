import Foo from '../src/Foo';
import 'jest';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('Test Foo class', function () {
    console.trace('line should be 9');
    const foo = new Foo();
    expect(foo.foo('asd')).toBe('asd');
    expect(foo.foo('banana')).toBe('yalla');
});