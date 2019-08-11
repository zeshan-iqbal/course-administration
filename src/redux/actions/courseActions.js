import {
  CREATE_COURSE,
  LOAD_COURSES_SUCCESS,
  SAVE_COURSES_SUCCESS,
  UPDATE_COURSES_SUCCESS
} from "./actionTypes";
import * as courseApi from "./../../api/courseApi";

export const loadCoursesSuccess = courses => ({
  type: LOAD_COURSES_SUCCESS,
  courses
});

export const updateCourseSuccess = course => ({
  type: UPDATE_COURSES_SUCCESS,
  course
});

export const saveCourseSuccess = course => ({
  type: SAVE_COURSES_SUCCESS,
  course
});

export const loadCourses = () => async dispatch => {
  try {
    let courses = await courseApi.getCourses();
    dispatch(loadCoursesSuccess(courses));
  } catch (error) {
    throw error;
  }
};

export const saveCourse = course => async (dispatch, getState) => {
  try {
    const savedCourse = await courseApi.saveCourse(course);
    course.id
      ? dispatch(updateCourseSuccess(savedCourse))
      : dispatch(saveCourseSuccess(savedCourse));
  } catch (error) {
    throw error;
  }
};
