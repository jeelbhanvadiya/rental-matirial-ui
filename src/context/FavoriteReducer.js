export default (state, action) => {
  switch (action.type) {
    case "FATCH_DATA":
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case "ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case "ADD_FAVORITE_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: action.payload,
        error: null,
      };

    case "GET_ALL_SUCCESS":
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case "GET_COUNTER_SUCCESS":
      return {
        ...state,
        counter: action.payload,
      };

    case "RESET_FAVORITE":
      return {
        ...state,
        fetching: false,
        error: null,
        success: null,
      };

    case "DELETE_FAVORITE_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: action.payload,
        error: null,
      };

    default:
      return state;
  }
};
