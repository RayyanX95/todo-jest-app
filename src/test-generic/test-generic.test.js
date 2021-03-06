import axios from 'axios';
import Users from './users';

test('test basics mock functions ', () => {
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  const mockCallback = jest.fn(x => x + 22);
  forEach([0, 3, 5], mockCallback);

  // The mock function is called three times
  // expect(mockCallback.mock.calls.length).toBe(3);

  // The first argument of the third call to the function was 5
  // expect(mockCallback.mock.calls[2][0]).toBe(5)

  //  return value of the second call to the function was 42
  expect(mockCallback.mock.results[1].value).toBe(25);
});
test('test return value of mock functions', () => {
  const filterTestFn  = jest.fn();
  console.log(filterTestFn ()); // undefined

  filterTestFn.mockReturnValueOnce(false).mockReturnValueOnce(true);

  const result  = [11,99].filter(num => filterTestFn (num));
  console.log("> ", result); // > [99]
});

test('mock axios module', () => {
  
})