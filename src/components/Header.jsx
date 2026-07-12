import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-white tracking-widest drop-shadow-lg">
        TODO
      </h1>
      <div className="flex items-center gap-2">
        {user && (
          <span className="text-white text-sm hidden sm:inline">
            Hi, {user.firstName}
          </span>
        )}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost hover:bg-transparent hover:border-0 hover:scale-110 transition-transform duration-200"
        >
          <img
            src={
              theme === "dark"
                ? "./images/icon-sun.svg"
                : "./images/icon-moon.svg"
            }
            alt="Change theme color"
            className="w-6 h-6 transition-transform duration-300"
          />
        </button>
        <button
          onClick={handleLogout}
          className="btn btn-ghost btn-sm text-white hover:bg-white/20"
          title="Logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
