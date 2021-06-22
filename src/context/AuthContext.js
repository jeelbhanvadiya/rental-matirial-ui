import { createContext, useMemo, useEffect, useReducer } from "react";
import { client, setAuthHeaders } from "../utils/auth";
import AuthReducer from "./AuthReducer";
import Cookies from "js-cookie";

// Initial State
const initialState = {
  fetching: false,
  token: "",
  user: null,
  error: null,
  success: null, 
};

const { REACT_APP_NAME } = process.env;

export const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  
  const cookieDialog = () =>{
  const shouldPopUp = () => !localStorage.getItem('rf_concent');
  const saveToStorage = () => localStorage.setItem('rf_concent', true);

    if(shouldPopUp()){
      const consent = window.confirm('agree with coockie policy?');
      if(consent)saveToStorage();
    }
  }


  const getMyUser = async () => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get("/auth/me");
      if (res.status === 200) {
        dispatch({ type: "GET_MY_USER_SUCCESS", payload: res.data.success });
        return res;
      }
      // else{
      //   return onLogout();
      // }
    } catch (e) {
      dispatch({ type: "ERROR", payload: { message: e.message } });
      onLogout();
      return null;
    }
  };

  const onLogin = async (body) => {
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.post("/auth/login", {...body});
      if (res.status === 200) {
        const token = res.headers["x-authorization-token"];
        if (token) {
          dispatch({type: "LOGIN_SUCCESS",payload: {sucess:res.data.success, token}});
          Cookies.set(`${REACT_APP_NAME}-auth-token`, token);
          return true;
        } else {
          throw new Error(`Login failed`);
        }
      }
    } catch (e) {
      e.response
        ? dispatch({ type: "LOGIN_FAIL", payload: e.response.data.message })
        : dispatch({ type: "LOGIN_FAIL", payload: { network: e.message } });

      return false;
    }
  };

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.remove(`${REACT_APP_NAME}-auth-token`);
    Cookies.remove(`${REACT_APP_NAME}-user`)
  };
  

  const resetState = () =>{
    dispatch({ type: "RESET_STATE" });
  }

  const value ={
      state: state,
      token:state.token,
      onLogin,
      onLogout,
      getMyUser,
      resetState,
      cookieDialog
    };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
