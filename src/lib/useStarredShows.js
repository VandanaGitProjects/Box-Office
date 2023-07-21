import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, intialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, intialState, initial => {
    const persisedValue = localStorage.getItem(localStorageKey);

    return persisedValue ? JSON.parse(persisedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};
//usereducer
const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

export const useStarredShows = () => {
  return  usePersistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );
};
