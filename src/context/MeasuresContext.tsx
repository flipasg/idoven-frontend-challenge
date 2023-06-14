import React, { createContext, useReducer } from 'react';
import { DEFAULT_DOMAIN } from '../config';
import { MeasuresAction, MeasuresContextProps, MeasuresState } from '../types';
import measuresReducer from '../reducers/measuresReducer';

const INITIAL_STATE: MeasuresState = {
  measures: [],
  domain: DEFAULT_DOMAIN,
  loading: false,
};

const defaultState = {
  state: INITIAL_STATE,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (_action: MeasuresAction): void => void 0,
};
const MeasuresContext = createContext<MeasuresContextProps>(defaultState);
export function MeasuresContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(measuresReducer, INITIAL_STATE);

  return (
    <MeasuresContext.Provider value={{ state, dispatch }}>
      {children}
    </MeasuresContext.Provider>
  );
}
export default MeasuresContext;
