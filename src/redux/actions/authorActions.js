import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
import { getAuthors } from "./../../api/authorApi";

export const loadAuthorsSuccess = authors => {
  let normalizedShape = authors.reduce(
    (acc, author) => ({ ...acc, [author.id]: author }),
    {}
  );
  return { type: LOAD_AUTHORS_SUCCESS, authors: normalizedShape };
};

export const loadAuthors = () => async dispatch => {
  try {
    let authors = await getAuthors();
    dispatch(loadAuthorsSuccess(authors));
  } catch (error) {
    throw error;
  }
};
