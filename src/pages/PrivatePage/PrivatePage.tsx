import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { setIsAuth } from "../../store/slices/userSlice";

const PrivatePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    localStorage.setItem("jwtregtoken", "");
    dispatch(setIsAuth(false));
    navigate(HOME_ROUTE);
  };
  return (
    <div>
      <button onClick={handleSignOut}>Выйти</button>
    </div>
  );
};

export default PrivatePage;
