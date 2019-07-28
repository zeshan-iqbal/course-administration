import * as actionTypes from "../actions/actionTypes";

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      return [...state, action.course];
    default:
      return state;
  }
};

export default courseReducer;
