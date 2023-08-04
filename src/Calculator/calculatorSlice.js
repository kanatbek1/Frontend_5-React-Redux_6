import { createSlice } from '@reduxjs/toolkit';
const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: { result: null },
  reducers: {
    add: (state, action) => {
      state.result = action.payload.num1 + action.payload.num2;
    },
    subtract: (state, action) => {
      state.result = action.payload.num1 - action.payload.num2;
    },
    multiply: (state, action) => {
      state.result = action.payload.num1 * action.payload.num2;
    },
    divide: (state, action) => {
      if (action.payload.num2 === 0) {
        alert('На ноль делить нельзя!');
        return;
      }
      state.result = action.payload.num1 / action.payload.num2;
    },
  },
});
export const { add, subtract, multiply, divide } = calculatorSlice.actions;
export default calculatorSlice.reducer;