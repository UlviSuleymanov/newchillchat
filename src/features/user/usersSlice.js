import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: '',
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
};

export const fetchUsers = createAsyncThunk('fetchUsers', async (CurrentPage, totalUsersCount) => {
  const response = await axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${CurrentPage}&count=${totalUsersCount}`,
  );
  console.log(response);
  return response.data;
});

//generates pending, fullfilled, rejected action types
const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.items;
      state.totalUsersCount = action.payload.totalCount;
      state.currentPage = action.payload.items;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
