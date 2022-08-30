import { createSlice } from '@reduxjs/toolkit';
import { postsData } from './postData';
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: postsData,
  },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    updateText: (state, action) => {
      state.value.map((user) => user.text !== action.payload);
    },
  },
});

export const { addPost, updateText } = profileSlice.actions;

export default profileSlice.reducer;
