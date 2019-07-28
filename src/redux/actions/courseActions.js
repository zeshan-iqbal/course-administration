import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "./actionTypes";
import { getCourses } from "./../../api/courseApi";

export const createCourse = course => {
  return { type: CREATE_COURSE, course };
};

export const loadCoursesSuccess = courses => {
  return { type: LOAD_COURSES_SUCCESS, courses };
};

export const loadCourses = () => async dispatch => {
  try {
    let courses = await getCourses();
    dispatch(loadCoursesSuccess(courses));
  } catch (error) {
    throw error;
  }
};
