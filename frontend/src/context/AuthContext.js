import { createContext, useEffect, useReducer } from "react";


const INITIAL_STATE = {
    user: null || JSON.parse(localStorage.getItem("user"))    ,
    auth: JSON.parse(localStorage.getItem("auth")),
    loading: false,
    error: null,
  };


  export const AuthContext = createContext(INITIAL_STATE);


const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        auth:true,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        auth:false,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        auth:false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.auth));
      }, [state.auth]);
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          loading: state.loading,
          error: state.error,
          auth:state.auth,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };