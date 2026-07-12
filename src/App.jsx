import { useEffect } from "react";
import Header from "./components/Header";
import MainApp from "./components/MainApp";
import { useSelector } from "react-redux";
import { Router } from "react-router";
import { Routes } from "react-router";

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
      <Routes>

        
      </Routes>
    </div>
  );
}
