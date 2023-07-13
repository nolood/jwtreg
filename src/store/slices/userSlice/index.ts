import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/IUserState.ts";
import { extraReducers } from "../userAsync/userAsync.ts";

const initialState: IUserState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers,
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
