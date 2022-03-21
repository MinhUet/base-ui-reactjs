const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    decrement(state, action) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increment, decrement } = actions;

export default reducer;
