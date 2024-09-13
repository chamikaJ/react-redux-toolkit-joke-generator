export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

interface FetchJokeRequestAction {
  type: typeof FETCH_JOKE_REQUEST;
}

interface FetchJokeSuccessAction {
  type: typeof FETCH_JOKE_SUCCESS;
  payload: string;
}

interface FetchJokeFailureAction {
  type: typeof FETCH_JOKE_FAILURE;
  error: string;
}

export type JokeActionTypes = FetchJokeRequestAction | FetchJokeSuccessAction | FetchJokeFailureAction;
