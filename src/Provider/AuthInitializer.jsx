import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";
import { checkAuth } from "../api/endpoints/auth";

// Runs once on app load to validate the stored JWT token.
// If valid:   restores the user session (login dispatch).
// If invalid: clears auth state so the user is redirected to login.
export default function AuthInitializer({ children }) {
  const { login, logout } = useAuth();
  const hasToken = !!localStorage.getItem("token");

  const { isLoading } = useQuery({
    queryKey: ["auth-check"],
    queryFn: async () => {
      try {
        const res = await checkAuth();
        // Update Redux auth state based on the server's response
        res.success ? login(res.data) : logout();
        return res.data;
      } catch (error) {
        logout();
        throw error;
      }
    },
    enabled: hasToken, // Only run if a token exists in localStorage
    retry: false,
    staleTime: Infinity, // Never re-fetch — we only need to validate the token once per page load
  });

  // Show nothing while the token check is in progress
  if (hasToken && isLoading) return null;

  return <>{children}</>;
}
