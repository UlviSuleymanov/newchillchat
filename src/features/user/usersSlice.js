import { createSlice } from '@reduxjs/toolkit';
import { usersList } from './UsersAPI';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: usersList,
  },
  reducers: {
    getUser: () => {},
  },
});

export default usersSlice.reducer;

export const { getUser } = usersSlice.actions;
