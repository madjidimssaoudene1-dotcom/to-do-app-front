import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/slices/themeSlice";
import { useCallback } from "react";

export default function useTheme() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleThemeFunction = useCallback(
    () => dispatch(toggleTheme()),
    [dispatch],
  );

  return { theme, toggleTheme: toggleThemeFunction };
}
