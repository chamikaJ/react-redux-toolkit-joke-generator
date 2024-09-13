import { FETCH_JOKE_REQUEST, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAILURE, JokeActionTypes } from '../types/actionTypes';

export interface JokeState {
  loading: boolean;
  joke: string | null;
  error: string | null;
}

const initialState: JokeState = {
  loading: false,
  joke: null,
  error: null,
};

export const jokeReducer = (state = initialState, action: JokeActionTypes): JokeState => {
  switch (action.type) {
    case FETCH_JOKE_REQUEST:
      return {
        ...state,
        loading: true,
        joke: null,
        error: null,
      };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        loading: false,
        joke: action.payload,
        error: null,
      };
    case FETCH_JOKE_FAILURE:
      return {
        ...state,
        loading: false,
        joke: null,
        error: action.error,
      };
    default:
      return state;
  }
};
