import { POST_PER_PAGE } from "../utils/constants";
export default (state, action) => {

  switch (action.type) {
    case "FATCH_DATA":
      return {
        ...state,
        fetching: true,
        error: null,
        errorInquiry: null,
      };

    case "ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload,
        totalPage:0
      };

    case "INQUIRY_ERROR":
      return {
        ...state,
        fetching: false,
        errorInquiry: action.payload,
      }; 

    case "CREATE_INQUIRY_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: action.payload,
        errorInquiry: null,
      };
    
    case "EDIT_INQUIRY_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: action.payload,
        errorInquiry: null,
      };
 
    case "GET_ALL_INQUIRY_SUCCESS":
      return {
        ...state,
        fetching: false,
        inquiryDatas: action.payload,
        totalPage: Math.ceil(action.payload.length /POST_PER_PAGE),
        error: null,
      };

    case "GET_ALL_INQUIRY_BY_CITY_SUCCESS":
      return {
        ...state,
        fetching: false,
        inquiryDatas: action.payload,
        totalPage: Math.ceil(action.payload.length /POST_PER_PAGE),
        error: null,
      };

      case "GET_ALL_FAVORITE_INQUIRY_SUCCESS":
        return {
          ...state,
          fetching: false,
          inquiryDatas: action.payload,
          totalPage: Math.ceil(action.payload.length /POST_PER_PAGE),
          error: null,
        };

    case "GET_INQUIRY_BY_ID_SUCCESS":
      return {
        ...state,
        fetching: false,
        inquiryDataById: action.payload,
        error: null,
      };

    case "GET_INQUIRY_BY_UID_SUCCESS":
      return {
        ...state,
        fetching: false,
        inquiryDataByUid: action.payload,
        error: null,
      };

    case "DELETE_INQUIRY_SUCCESS":
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
        errorInquiry: null,
      };

      case "RESET_PUBLISH":
        return {
          ...state,
          success: null,
          inquiryDataByUid: []
        };

    default:
      return state;
  }
};
