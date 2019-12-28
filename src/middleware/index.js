import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

export const forbiddenWordsMiddleware = ({ dispatch }) => next => action => {
  const forbiddenWords = ["spam", "money"];

  if (action.type === ADD_ARTICLE) {
    const foundWord = forbiddenWords.filter(word =>
      action.payload.title.toLowerCase().includes(word)
    );
    if (foundWord.length) {
      return dispatch({ type: FOUND_BAD_WORD });
    }
  }
  return next(action);
};
