import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_INPUTS":
      return {
        input: {
          distance: action.payload.distance,
          gender: action.payload.gender,
          age: action.payload.age,
          submitted: true,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
