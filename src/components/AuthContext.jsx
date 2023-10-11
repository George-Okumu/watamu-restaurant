import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token,setToken] = useState();
  const [id,setId] = useState();



  return (
    <AuthContext.Provider value={{ token, setToken, id, setId }}>
      {(
        children
      )}
    </AuthContext.Provider>
  );
};