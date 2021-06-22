import React, {createContext, useReducer, useState} from "react";
import FavoriteReducer from "./FavoriteReducer";
import {client} from "../utils/auth";
import { setAuthHeaders } from "../utils/auth";
const {REACT_APP_NAME} = process.env;

// Initial State
const initialState = {
    fetching: false,
    error: null,
    success: null,
    counter: 0,
};

// Create Context
export const FavoriteContext = createContext(initialState);
FavoriteContext.displayName = "FavoriteContext";

// Provider Component
export const FavoriteProvider = (props) => {
    const [state, dispatch] = useReducer(FavoriteReducer, initialState);

    const resetFavorite = () => {
        dispatch({type: "RESET_FAVORITE"});
    }

    const addFavorite = async (id) => {
        setAuthHeaders();
        try {
            dispatch({type: "FATCH_DATA"});
            const res = await client.post("favoritehouse/add", {house_id: id});
            if (res.status === 200) {
                dispatch({type: "ADD_FAVORITE_SUCCESS", payload: res.data.success});
                getCounter();
            }
        } catch (e) {
            if (e.response)
                dispatch({type: "ERROR", payload: e.response.data.message});
        }
    }

    const deleteFavorite = async (id) => {
        try {
            dispatch({type: "FATCH_DATA"});
            const res = await client.delete(`favoritehouse/delete/${id}`);
            if (res.status === 200) {
                dispatch({type: "DELETE_FAVORITE_SUCCESS", payload: res.data.success});
                getCounter();
            }
        } catch (e) {
            if (e.response)
                dispatch({type: "ERROR", payload: e.response.data.message});
        }
    };


    const getCounter = async () => {
        setAuthHeaders();
        try {
            dispatch({type: "FATCH_DATA"});
            const res = await client.get(`favoritehouse/counter/`);
            if (res.status === 200) {
                dispatch({type: "GET_COUNTER_SUCCESS", payload: res.data.count});
            }
        } catch (e) {
            if (e.response)
                dispatch({type: "ERROR", payload: e.response.data.message});
        }

    }

    const getFavorite = async () => {
        try {
            dispatch({type: "FATCH_DATA"});
            const res = await client.get("favorite/all");
            if (res.status === 200) {
                dispatch({type: "GET_ALL_SUCCESS", payload: res.data});
            }
        } catch (e) {
            if (e.response)
                dispatch({type: "ERROR", payload: e.response.data.message});
        }
    };


    return (
        <FavoriteContext.Provider
            value={{
                favorite: state,
                getFavorite,
                getCounter,
                addFavorite,
                deleteFavorite,
                resetFavorite
            }}
        >
            {props.children}
        </FavoriteContext.Provider>
    );
};
