import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_JOKE_REQUEST, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAILURE, JokeActionTypes } from '../types/actionTypes';

export const fetchJoke = () => {
  return async (dispatch: Dispatch<JokeActionTypes>) => {
    dispatch({ type: FETCH_JOKE_REQUEST });

    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      const joke = `${response.data.setup} - ${response.data.punchline}`;
      dispatch({ type: FETCH_JOKE_SUCCESS, payload: joke });
    } catch (error: any) {
      dispatch({ type: FETCH_JOKE_FAILURE, error: error.message });
    }
  };
};
