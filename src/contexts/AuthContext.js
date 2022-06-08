import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getProfile,
  getToken,
  login,
  logout,
  setToken,
} from "../services/Auth";
export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const checkAuth = async () => {
      const token = getToken();
      if (token) {
        const userDetails = await getProfile();
        setUser(userDetails);
        navigate(location.pathname)
      } else {
        setUser(null);
        navigate("/login")
      }
    };
    checkAuth();
  }, []);

  const signin = async (email, password) => {
    const token = await login(email, password);
    setToken(token);
    const userDetails = await getProfile();
    setUser(userDetails);
    navigate("/")
  };

  const signout = () => {
    logout();
    setUser(null);
    navigate("/");
  };
  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
