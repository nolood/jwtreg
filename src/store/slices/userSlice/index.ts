import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/IUserState.ts";
import { extraReducers } from "../userAsync/userAsync.ts";

const initialState: IUserState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
  extraReducers,
});

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;
