const initialState = [
  {
    name: 'Sudhi',
    id: 1,
  },
  {
    name: 'Sumam',
    id: 2,
  },
];

export const usersReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_USER') {
    return [...action.payload];
  }
  return [...state];
};
