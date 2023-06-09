import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider, User } from "../context/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const navigate = useNavigate();

  const login = useCallback(
    async (data: User) => {
      setUser(data);
      navigate("/");
    },
    [navigate, setUser]
  );

  const logout = useCallback(async () => {
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return <AuthContextProvider value={value}>{children}</AuthContextProvider>;
};
