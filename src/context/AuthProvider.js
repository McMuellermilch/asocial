import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={props.user}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
