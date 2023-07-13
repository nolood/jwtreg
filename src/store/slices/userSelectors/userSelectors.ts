import { IUserState}  from "../../../types/IUserState.ts";

export const selectId = (state: { user: IUserState }) => state.user.isAuth;
