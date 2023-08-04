import { createSlice } from '@reduxjs/toolkit';
const usersSlice = createSlice({
  name: 'users',
  initialState: { inputValue: '', users: [] },
  reducers: {
    changeInput: (state, action) => {
      state.inputValue = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.inputValue = ''; 
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
});
export const { changeInput, addUser, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;