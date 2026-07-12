import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-white tracking-wider drop-shadow-lg">
        TODO
      </h1>
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
          className="w-6 h-6 "
        />
      </button>
    </header>
  );
}
