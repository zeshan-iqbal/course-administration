import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
const courseReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      return [...state, action.course];
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case actionTypes.SAVE_COURSES_SUCCESS:
      return [...state, action.course];
    case actionTypes.UPDATE_COURSES_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    default:
      return state;
  }
};

export default courseReducer;
