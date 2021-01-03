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
        renderLoginForm: false,
        authenticated: true,
        credentials: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        authenticated: false,
      };
    case "SAVE_RESULT":
      return {
        ...state,
        resultSaved: true,
      };
    case "INPUT_CHANGE":
      return {
        ...state,
        input: {
          submitted: false,
        },
        resultSaved: false,
      };
    case "GET_PAST_RESULTS":
      return {
        ...state,
        pastResults: action.payload,
      };
    case "RENDER_RESULT":
      return {
        ...state,
        renderResult: !state.renderResult,
      };
    default:
      return state;
  }
};

export default rootReducer;
