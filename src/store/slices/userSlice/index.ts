import { createSlice } from "@reduxjs/toolkit";
import {IUserState} from "../../../types/IUserState.ts";

const initialState: IUserState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
