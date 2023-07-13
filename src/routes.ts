import HomePage from "./pages/HomePage/HomePage";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import { IRoutes } from "./types/IRoutes";
import { HOME_ROUTE, PRIVATE_ROUTE } from "./utils/consts";

export const publicRoutes: IRoutes[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
];

export const authRoutes: IRoutes[] = [
  {
    path: PRIVATE_ROUTE,
    Component: PrivatePage,
  },
];
