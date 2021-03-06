import { createSlice } from '@reduxjs/toolkit';

import { User, UserData } from 'types/user';

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
    setUserData: (state, action: { payload: UserData }) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const resetAppState = () => ({
  type: 'RESET_APP_STATE',
});

export const { setUser, setUserData } = userSlice.actions;

export default userSlice.reducer;
