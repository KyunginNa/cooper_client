import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_INPUTS":
      return {
        ...state,
        input: {
          distance: action.payload.distance,
          gender: action.payload.gender,
          age: action.payload.age,
          submitted: true,
        },
      };
    case "SET_AUTH_CREDENTIALS":
      return {
        ...state,
        authenticated: true,
        credentials: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
