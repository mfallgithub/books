import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCES,
  FETCH_BOOKS_ERROR,
} from "../constants";
import axios from "axios";


const fetchBooksLoading = () => {
  return {
    type: FETCH_BOOKS_LOADING,
  };
};

const fetchBooksSuccess = (data) => {
  return {
    type: FETCH_BOOKS_SUCCES,
    payload: data,
  };
};

const fetchBooksError = (error) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error,
  };
};

const GOOGLE_API_KEY = "AIzaSyA86TcW9tI4aCrxy3WmODQvQ0ZL0BKqXYM";

export const fetchBooks = (title) => {
  return (dispatch) => {
    dispatch(fetchBooksLoading());
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`
      )
      .then((res) => {
        const bookItemsArray = res.data.items;
        dispatch(fetchBooksSuccess(bookItemsArray));
      })
      .catch((error) => {
        dispatch(fetchBooksError(error.message))
      });
  };
};
