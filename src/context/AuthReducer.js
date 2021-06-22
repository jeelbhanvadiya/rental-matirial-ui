export default (state, action) => {
  switch (action.type) {

    case "FATCH_DATA":
      return {
        ...state,
        fetching: true,
        success: null,
        error: null,
      };

    case "ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload,
        success: null,
      };

    case "GET_MY_USER_SUCCESS":
      return {
        ...state,
        fetching: false,
      }

    case "LOGIN_SUCCESS": 
        return {
          ...state,
          fetching: false,
          success: action.payload,
          token: action.payload.token,
          error: null,
    };

    case "LOGIN_FAIL":
        return {
          ...state,
          fetching: false,
          success: null,
          error: action.payload,
    };

    case "LOGOUT":
        return {
          ...state,
          fetching: false,
          success: null,
          error: null,
    };

    case "RESET_STATE":
      return {
        fetching: false,
        error: null,
        success: null,
      };

    default:
      return state;
  }
};
