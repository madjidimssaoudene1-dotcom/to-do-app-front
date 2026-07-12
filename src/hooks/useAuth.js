import { useDispatch, useSelector } from "react-redux";
import {
  login as loginSlice,
  logout as logoutSlice,
} from "../app/slices/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return {
    user,
    isAuthenticated,
    login: (userData) => dispatch(loginSlice(userData)),
    logout: () => {
      dispatch(logoutSlice());
      localStorage.removeItem("token");
    },
  };
};
