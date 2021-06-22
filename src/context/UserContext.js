import React, { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import {client, Cookies, setAuthHeaders} from "../utils/auth";
import axios from "axios";

const { REACT_APP_NAME } = process.env;

// Initial State
const initialState = {
  fetching: false,
  users: [],
  error: null,
  success: null,
};

// Create Context
export const UserContext = createContext(initialState);
UserContext.displayName = "UserContext";

// Provider Component
export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Actions
  const createUser = async (body) => {
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.post("user/add", body);

      if (res.status === 200) {
        dispatch({ type: "CREATE_USER_SUCCESS", payload: res.data.success });
        // const token = res.headers["x-authorization-token"];
        // if (token) {
        //   Cookies.set(`${REACT_APP_NAME}-auth-token`, token);
        //   return true;
        // }
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
      // return false;
    }
  };

  const getUsers = async () => {
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get("user/all");
      if (res.status === 200) {
        dispatch({ type: "GET_ALL_SUCCESS", payload: res.data });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const deleteUser = async (id) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.delete(`user/delete/${id}`);
      if (res.status === 200) {
        dispatch({ type: "DELETE_USER_SUCCESS", payload: res.data.success });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };


  const editUser = async (id, body) => {
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.put(`user/edit/${id}`, body);
      if (res.status === 200) {
        dispatch({ type: "EDIT_USER_SUCCESS", payload: res.data.success });
        return true;
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
      return false;
    }
  };

  const resetState = () =>{
    dispatch({ type: "RESET_STATE" });
  }

  return (
    <UserContext.Provider
      value={{
        state: state,
        getUsers,
        createUser,
        editUser,
        deleteUser,
        resetState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
