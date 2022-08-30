import { configureStore } from '@reduxjs/toolkit';
import dialogsSlice from '../features/dialog/dialogsSlice';
import profileSlice from '../features/profile/profileSlice';
import usersSlice from '../features/user/usersSlice';

export const store = configureStore({
  reducer: {
    profilePage: profileSlice,
    dialogsPage: dialogsSlice,
    usersPage: usersSlice,
  },
});
