module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  // TODO update the return value for redux / context implementation
  getTodo: jest.fn().mockReturnValue(Promise.resolve({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  })),
}