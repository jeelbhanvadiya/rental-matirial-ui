import React, { createContext, useReducer, useMemo } from "react";
import InquiryReducer from "./InquiryReducer";
import { client, Cookies, setAuthHeaders } from "../utils/auth";

const { REACT_APP_NAME } = process.env;
// Initial State
const initialState = {
  fetching: false,
  inquiryDatas: [],
  inquiryDataById: null,
  inquiryDataByUid: [],
  error: null,
  errorInquiry: null,
  success: null,
  totalPage: 0
};

// Create Context
export const InquiryContext = createContext(initialState);
InquiryContext.displayName = "InquiryContext";

// Provider Component
export const InquiryProvider = (props) => {
  const [state, dispatch] = useReducer(InquiryReducer, initialState); 

  // Actions
  const resetState = () => {
    dispatch({ type: "RESET_STATE"});
  };

  const resetPublish = () =>{
    dispatch({ type: "RESET_PUBLISH"})
  }

  const createInquiry = async (body) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.post("inquiry/add", body);

      if (res.status === 200) {
        dispatch({ type: "CREATE_INQUIRY_SUCCESS", payload: res.data.success });
        return true;
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "INQUIRY_ERROR", payload: e.response.data.message });
      return false;
    }
  }; 

  const getInquiry = async (city = null) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = city ? await client.get(`inquiry/lists/city/${city}`): await client.get(`inquiry/lists`);
      if (res.status === 200) {
        dispatch({ type: "GET_ALL_INQUIRY_SUCCESS", payload: res.data });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const getFavoriteInquiry = async (city = null) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get(`inquiry/lists/favorite`);
      if (res.status === 200) {
        dispatch({ type: "GET_ALL_FAVORITE_INQUIRY_SUCCESS", payload: res.data });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const getInquiryById = async (id) => {
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get(`inquiry/list/id/${id}`);
      if (res.status === 200) {
        dispatch({ type: "GET_INQUIRY_BY_ID_SUCCESS", payload: res.data });
        return res.data;
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
      return null;
    }
  };

  const getInquiryByUid = async (uid) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get(`inquiry/lists/me`);
      if (res.status === 200) {
        dispatch({ type: "GET_INQUIRY_BY_UID_SUCCESS", payload: res.data });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const deleteInquiry = async (id) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.delete(`inquiry/delete/${id}`);
      if (res.status === 200) {
        dispatch({ type: "DELETE_INQUIRY_SUCCESS", payload: res.data.success });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const editInquiry = async (id, body) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.put(`inquiry/edit/${id}`, body);
      if (res.status === 200) {
        dispatch({ type: "EDIT_INQUIRY_SUCCESS", payload: res.data.success });
        return true;
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "INQUIRY_ERROR", payload: e.response.data.message });
      return false;
    }
  };

  const value = {
    state,
    inquiryDataById: state.inquiryDataById,
    resetState,
    getInquiry,
    getInquiryById,
    getInquiryByUid,
    getFavoriteInquiry,
    createInquiry,
    editInquiry,
    deleteInquiry,
    resetPublish,
  };

  return (
    <InquiryContext.Provider value={value}>
      {props.children}
    </InquiryContext.Provider>
  );
};
