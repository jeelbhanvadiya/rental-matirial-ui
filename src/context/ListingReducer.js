import { POST_PER_PAGE } from "../utils/constants";
export default (state, action) => {

  switch (action.type) {
    case "FATCH_DATA":
      return {
        ...state,
        fetching: true,
        error: null,
        errorListing: null,
      };

    case "ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload,
        totalPage:0
      };

    case "LISTING_ERROR":
      return {
        ...state,
        fetching: false,
        errorListing: action.payload,
      }; 

    case "CREATE_LISTING_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: action.payload,
        errorListing: null,
      };
    
    case "EDIT_LISTING_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: action.payload,
        errorListing: null,
      };
 
    case "GET_ALL_LISTING_SUCCESS":
      return {
        ...state,
        fetching: false,
        houseDatas: action.payload,
        totalPage: Math.ceil(action.payload.length /POST_PER_PAGE),
        error: null,
      };

    case "GET_ALL_LISTING_BY_CITY_SUCCESS":
      return {
        ...state,
        fetching: false,
        houseDatas: action.payload,
        totalPage: Math.ceil(action.payload.length /POST_PER_PAGE),
        error: null,
      };

      case "GET_ALL_FAVORITE_LISTING_SUCCESS":
        return {
          ...state,
          fetching: false,
          houseDatas: action.payload,
          totalPage: Math.ceil(action.payload.length /POST_PER_PAGE),
          error: null,
        };



    case "GET_LISTING_BY_ID_SUCCESS":
      return {
        ...state,
        fetching: false,
        houseDataById: action.payload,
        error: null,
      };

    case "GET_LISTING_BY_UID_SUCCESS":
      return {
        ...state,
        fetching: false,
        houseDataByUid: action.payload,
        error: null,
      };

    case "DELETE_LISTING_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: action.payload,
        error: null,
      };
    
      case "RESET_STATE":
      return {
        ...state,
        error: null,
        errorListing: null,
      };

      case "RESET_PUBLISH":
        return {
          ...state,
          success: null,
          houseDataByUid: []
        };

    default:
      return state;
  }
};
