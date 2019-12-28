import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  UPDATE_ARTICLE,
  DATA_LOADED,
  API_ERRORED,
  FOUND_BAD_WORD
} from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  errors: [],
  badWords: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case REMOVE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.filter(el => el.id !== action.id)
      });
    case UPDATE_ARTICLE:
      const articleToUpdate = state.articles.filter(el => el.id === action.id);
      articleToUpdate[0].title = action.payload;
      return Object.assign({}, state, {
        articles: state.articles
          .filter(el => el.id !== action.id)
          .concat(articleToUpdate)
      });
    case DATA_LOADED:
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });
    case API_ERRORED:
      return Object.assign({}, state, {
        errors: action.payload.toString()
      });
    case FOUND_BAD_WORD:
      return Object.assign({}, state, {
        badWords: "Spam is not allowed"
      })
    default:
      return state;
  }
}

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   } else if (action.type === REMOVE_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.filter(el => el.id !== action.id)
//     });
//   } else if (action.type === UPDATE_ARTICLE) {
// const articleToUpdate = state.articles.filter(el => el.id === action.id);
// articleToUpdate[0].title = action.payload;
// return Object.assign({}, state, {
//   articles: state.articles
//     .filter(el => el.id !== action.id)
//     .concat(articleToUpdate)
// });
//   } else if (action.type === DATA_LOADED) {
//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload)
//     });
//   } else if (action.type === API_ERRORED) {
//     return Object.assign({}, state, {
//       errors: action.payload
//     })
//   }
//   return state;
// }

export default rootReducer;
