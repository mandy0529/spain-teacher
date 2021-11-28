import React, {createContext, useContext, useReducer} from 'react';
import {TodoState} from '../interfaces/interface';
import {reducer, inital_state} from './AppReducer';

type props = {
  children: JSX.Element | JSX.Element[];
  //   children: React.ReactNode;
};

const AppContext = createContext({} as TodoState);

const AppProvider = ({children}: props) => {
  const [state, dispatch] = useReducer(reducer, inital_state);

  return (
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
