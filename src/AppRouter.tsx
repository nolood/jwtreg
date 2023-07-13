import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { useAppDispatch, useAppSelector } from "./hooks/useReduxHooks";
import { selectIsAuth } from "./store/slices/userSelectors/userSelectors";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";
import { useEffect } from "react";
import { checkIsAuth } from "./store/slices/userAsync/userAsync";

const AppRouter = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkIsAuth());
  }, []);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default AppRouter;
