import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import calculatorReducer from './calculatorSlice';
const store = configureStore({
  reducer: {
    users: usersReducer,
    calculator: calculatorReducer,
  },
});
export default store;