import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import JokeGenerator from './components/JokeGenerator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <JokeGenerator />
    </Provider>
  );
};

export default App;
