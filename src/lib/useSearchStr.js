import { useEffect, useState } from 'react';
const usePersistedState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persistedValue = sessionStorage.getItem(sessionStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);
  return [state, setState];
};
/* const usePersistedReducer = (reducer, intialState, localStorageKey) => {
    const [state, dispatch] = useReducer(reducer, intialState, initial => {
      const persisedValue = localStorage.getItem(localStorageKey);
  
      return persisedValue ? JSON.parse(persisedValue) : initial;
    });
  
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);
  
    return [state, dispatch];
  }; */
export const useSearchStr = () => {
  return usePersistedState('', 'searchString');
};
