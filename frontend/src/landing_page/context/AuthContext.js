import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  //  Load once from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      setAuth(JSON.parse(stored));
    }
  }, []);

  //  Login
  const login = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuth(data);
  };

  //  Logout
  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  const isLoggedIn = !!auth;

  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
