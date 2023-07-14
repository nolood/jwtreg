import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/IUserState";
import axios, { AxiosResponse } from "axios";
import { IForm } from "../../../types/IForm";

export const loginUser = createAsyncThunk(
  "user/loginStatus",
  async (param: IForm) => {
    return axios
      .post("https://dummyjson.com/auth/login", {
        username: "kminchelle",
        password: "0lelplR",
      })
      .then((res) => res.data as { token: string });
  }
);

export const checkIsAuth = createAsyncThunk("user/checkIsAuth", async () => {
  const token = localStorage.getItem("jwtregtoken");
  //check auth
  return await axios
    .post(`https://dummyjson.com/auth/login${token ? "" : "s"}`, {
      username: "kminchelle",
      password: "0lelplR",
      // token
    })
    .then((res) => res.data as { token: string });
});

export const extraReducers = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder.addCase(loginUser.fulfilled, (state, action) => {
    state.isAuth = true;
    localStorage.setItem("jwtregtoken", JSON.stringify(action.payload.token));
  });
  builder.addCase(loginUser.rejected, (state, action) => {
    console.error(action.payload);
  });

  builder.addCase(checkIsAuth.fulfilled, (state, action) => {
    state.isAuth = true;
  });

  builder.addCase(checkIsAuth.rejected, (state, action) => {
    state.isAuth = false;
  });
};
