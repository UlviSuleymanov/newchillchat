import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../features/profile/profileSlice';
import usersSlice from '../features/user/usersSlice';

export const store = configureStore({
  reducer: {
    profilePage: profileSlice,
    usersPage: usersSlice,
  },
});
