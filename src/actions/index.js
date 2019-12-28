import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  UPDATE_ARTICLE,
  DATA_REQUESTED
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function removeArticle(id) {
  return { type: REMOVE_ARTICLE, id };
}

export function updateArticle(payload, id) {
  return { type: UPDATE_ARTICLE, payload, id };
}

export function getData() {
  return { type: DATA_REQUESTED };
};
