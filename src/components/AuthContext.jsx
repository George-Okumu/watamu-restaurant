import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState();


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {(
        children
      )}
    </AuthContext.Provider>
  );
};