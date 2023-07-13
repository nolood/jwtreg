import { IUserState } from "../../../types/IUserState.ts";

export const selectIsAuth = (state: { user: IUserState }) => state.user.isAuth;
