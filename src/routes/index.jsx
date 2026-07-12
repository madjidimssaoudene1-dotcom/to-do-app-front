import { Navigate, Route, Routes } from "react-router";
import Login from "../components/Login";
import Register from "../components/REgister";
import Header from "../components/Header";
import MainApp from "../components/MainApp";
import { useAuth } from "../hooks/useAuth";

export default function Routers() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* public routes */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to={"/"} replace /> : <Login />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to={"/"} replace /> : <Register />}
      />

      {/* protected routes */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <div className="container mx-auto px-4 py-12 max-w-md">
              {/* header */}
              <Header />
              {/* main app  */}
              <MainApp />
            </div>
          ) : (
            <Navigate to={"/login"} replace />
          )
        }
      />

      {/* catch all */}
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}