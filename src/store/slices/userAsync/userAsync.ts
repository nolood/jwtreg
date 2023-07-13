import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/IUserState";
import axios from "axios";
import { IForm } from "../../../types/IForm";

export const loginUser = createAsyncThunk(
  "user/loginStatus",
  async (param: IForm) => {
    const response = await axios.post(
      "https://dev-457931.okta.com/oauth2/aushd4c95QtFHsfWt4x6/v1/token",
      {
        grant_type: "password",
        username: "api-user1@iwt.net",
        password: "b3z0nV0cLO",
        client_id: "0oahdhjkutaGcIK2M4x6",
      }
    ); //FIXME

    return {
      //mock
      token_type: "Bearer",
      expires_in: 3600,
      access_token:
        "eyJraWQiOiI1aS1aZUdPZHNlMHUyMnpVWVVpRlY2SjZIOFMwMlZHeUVZRnhMalFKcFl3IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULm1VOUlkU3ltRG15Z1Uwb3JybjhXUUtvSFkxMEpKTVJfUEZpaWk2TnJSTGsuM1lwcncyaFYyeE15LzU5UkkwUWlma1dGY2FUeFpkajVDVndXTWVLaDdjRT0iLCJpc3MiOiJodHRwczovL2Rldi00NTc5MzEub2t0YS5jb20vb2F1dGgyL2F1c2hkNGM5NVF0RkhzZld0NHg2IiwiYXVkIjoiYXBpIiwiaWF0IjoxNTkzODczNDA2LCJleHAiOjE1OTM4NzcwMDYsImNpZCI6IjBvYWhkaGprdXRhR2NJSzJNNHg2IiwidWlkIjoiMDB1aGVuaDFwVkRNZzJ1ZXg0eDYiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiXSwic3ViIjoiYXBpLXVzZXI0QGl3dC5uZXQifQ.Zo1gNyxES2OwNaZTvQfJh7Vpl8YiRlD9zUSfZJOJSXgx65L9O12p9VI1YrTx_meLM4uECuqcGCaiqf4yQx-CQ5QMA-VInb6e0S4SS8RYUDtxfdo3y1WrXFal_20ryh8tcv_8GhkX3d-Ep1jbEKVM7fgYujeTN4R-ccIb-Y1vPGeJHqq9x9BQ6MAUE1URLLVXCZJB8EsE86FaRyaWWdnjWSikrTuWtDSJQCC4oPLjrqbTxFSxabT4_2OeR-9wZ0FmH9wHx3wVuZZj_1upYUsqq6eWPbqpVOyN93gRSV4j0d8L20jFtfN515VE63t5B0QqTN1aSicgscLxG420SiZIVg",
      scope: "offline_access",
      refresh_token: "UoClKuS32UBCDYHcnjM-vbbeKZYo_vRAF8h9NVU6-zw",
    };
  }
);

export const checkIsAuth = createAsyncThunk(
  "user/checkIsAuthStatus",
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const token: string = JSON.parse(
      String(localStorage.getItem("jwtregtoken"))
    );
    const response = await axios.post(
      "https://dev-457931.okta.com/oauth2/aushd4c95QtFHsfWt4x6/v1/token",
      {
        grant_type: "password",
        username: "api-user1@iwt.net",
        password: "b3z0nV0cLO",
        client_id: "0oahdhjkutaGcIK2M4x6",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //FIXME;

    return response;
  }
);

export const extraReducers = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder.addCase(loginUser.fulfilled, (state, action) => {
    console.log("login");
    state.isAuth = true;
    localStorage.setItem(
      "jwtregtoken",
      JSON.stringify(action.payload.access_token)
    );
  });
  builder.addCase(loginUser.rejected, (state, action) => {
    console.error(action.payload);
  });
  builder.addCase(checkIsAuth.rejected, (state, action) => {
    state.isAuth = false;
  });
};
