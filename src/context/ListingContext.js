import React, { createContext, useReducer, useMemo } from "react";
import ListingReducer from "./ListingReducer";
import { client, Cookies, setAuthHeaders } from "../utils/auth";

const { REACT_APP_NAME } = process.env;
// Initial State
const initialState = {
  fetching: false,
  houseDatas: [],
  houseDataById: null,
  houseDataByUid: [],
  error: null,
  errorListing: null,
  success: null,
  totalPage: 0
};

// Create Context
export const ListingContext = createContext(initialState);
ListingContext.displayName = "ListingContext";

// Provider Component
export const ListingProvider = (props) => {
  const [state, dispatch] = useReducer(ListingReducer, initialState); 

  // Actions
  const resetState = () => {
    dispatch({ type: "RESET_STATE"});
  };

  const resetPublish = () =>{
    dispatch({ type: "RESET_PUBLISH"})
  }

  const createListing = async (body) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.post("house/add", body);

      if (res.status === 200) {
        dispatch({ type: "CREATE_LISTING_SUCCESS", payload: res.data.success });
        return true;
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "LISTING_ERROR", payload: e.response.data.message });
      return false;
    }
  }; 

  const getListing = async (city = null) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = city ? await client.get(`house/lists/city/${city}`): await client.get(`house/lists`);
      if (res.status === 200) {
        dispatch({ type: "GET_ALL_LISTING_SUCCESS", payload: res.data });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const getFavoriteListing = async (city = null) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get(`house/lists/favorite`);
      if (res.status === 200) {
        dispatch({ type: "GET_ALL_FAVORITE_LISTING_SUCCESS", payload: res.data });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const getListingById = async (id) => {
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get(`house/list/id/${id}`);
      if (res.status === 200) {
        dispatch({ type: "GET_LISTING_BY_ID_SUCCESS", payload: res.data });
        return res.data;
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
      return null;
    }
  };

  const getListingByUid = async (uid) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.get(`house/lists/me`);
      if (res.status === 200) {
        dispatch({ type: "GET_LISTING_BY_UID_SUCCESS", payload: res.data });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const deleteListing = async (id) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.delete(`house/delete/${id}`);
      if (res.status === 200) {
        dispatch({ type: "DELETE_LISTING_SUCCESS", payload: res.data.success });
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "ERROR", payload: e.response.data.message });
    }
  };

  const editListing = async (id, body) => {
    setAuthHeaders();
    try {
      dispatch({ type: "FATCH_DATA" });
      const res = await client.put(`house/edit/${id}`, body);
      if (res.status === 200) {
        dispatch({ type: "EDIT_LISTING_SUCCESS", payload: res.data.success });
        return true;
      }
    } catch (e) {
      if (e.response)
        dispatch({ type: "LISTING_ERROR", payload: e.response.data.message });
      return false;
    }
  };

  const value = {
    state,
    houseDataById: state.houseDataById,
    resetState,
    getListing,
    getListingById,
    getListingByUid,
    getFavoriteListing,
    createListing,
    editListing,
    deleteListing,
    resetPublish,
  };

  return (
    <ListingContext.Provider value={value}>
      {props.children}
    </ListingContext.Provider>
  );
};
