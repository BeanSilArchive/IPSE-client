import React, { useReducer, useContext } from "react";

const AuthState = (() => {
  const token = localStorage.getItem("ipse-token");

  if (token) {
    return { user: token };
  }

  return {
    user: null
  };
})();

const authReducer = (state, action) => {
  switch (action.type) {
    case "loginSuccess":
      return {
        ...state,
        user: {
          ...action.args
        }
      };
    default:
      return state;
  }
};

const AuthContext = React.createContext(AuthState);

const AuthStateProvider = ({ children }) => (
  <AuthContext.Provider value={useReducer(authReducer, AuthState)}>
    {children}
  </AuthContext.Provider>
);

export const useStateValue = () => useContext(AuthContext);

export default AuthStateProvider;
