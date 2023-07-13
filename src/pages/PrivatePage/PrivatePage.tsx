import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";

const PrivatePage = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.setItem("jwtregtoken", "");
    navigate(HOME_ROUTE);
  };
  return (
    <div>
      <button onClick={handleSignOut}>Выйти</button>
    </div>
  );
};

export default PrivatePage;
