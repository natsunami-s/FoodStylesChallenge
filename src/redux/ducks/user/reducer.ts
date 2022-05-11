import { createSlice } from '@reduxjs/toolkit';

import { User } from 'types/user';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as User,
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setUserData } = userSlice.actions;

export default userSlice.reducer;
