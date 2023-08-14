import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCES,
  FETCH_BOOKS_ERROR
} from "../constants";

const initialState = {
  isLoading: false,
  fetchedBooks: [],
  error: ""
};

const reducerFetchedBooks = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_BOOKS_SUCCES:
      return {
        ...state,
        isLoading: false,
        fetchedBooks: action.payload,
        error: ""
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        fetchedBooks: [],
        error: action.payload
      };
    default: return state;
  }
};

export default reducerFetchedBooks;
