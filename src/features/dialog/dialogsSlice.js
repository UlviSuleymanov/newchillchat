import { createSlice } from '@reduxjs/toolkit';
import { dialogs } from './dialogsData.js';

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState: {
    value: dialogs,
  },
  reducers: {
    sendMessage: (state, action) => {
      state.value.push(action.payload);
    },
    updateMessage: (state, action) => {
      state.value.map((user) => user.message !== action.payload);
    },
  },
});

export default dialogsSlice.reducer;

export const { sendMessage, updateMessage } = dialogsSlice.actions;
