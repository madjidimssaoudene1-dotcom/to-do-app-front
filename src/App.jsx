import { useEffect } from "react";
import { useSelector } from "react-redux";
import Routers from "./routes";

export default function App() {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-base-100 bg-no-repeat"
      style={{
        backgroundImage: `url(/images/bg-desktop-${theme}.jpg)`,
        backgroundSize: " 100vw 100vh",
        backgroundPosition: "top center",
      }}
    >
      <Routers />
    </div>
  );
}
