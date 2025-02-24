import React, { createContext, useContext, useReducer } from 'react';

import storeReducer, { initialStore } from './storeReducer';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={[store, dispatch]}> {children} </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { useStore, useDispatch };
export default StoreProvider;
