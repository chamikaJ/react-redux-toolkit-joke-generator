import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../actions/actions';
import { RootState, AppDispatch } from '../store/store';

const JokeGenerator: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const joke = useSelector((state: RootState) => state.joke);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  return (
    <div>
      <h1>Joke Generator</h1>
      {loading && <p>Loading...</p>}
      {joke && <p>{joke}</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={() => dispatch(fetchJoke())}>Get Another Joke</button>
    </div>
  );
};

export default JokeGenerator;
