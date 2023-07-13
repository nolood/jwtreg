import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";

const AppRouter = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default AppRouter;
