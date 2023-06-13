import { MeasuresAction, MeasuresActionTypes, MeasuresState } from '../types';

export default function measuresReducer(
  state: MeasuresState,
  action: MeasuresAction
): MeasuresState {
  switch (action.type) {
    case MeasuresActionTypes.SET_MEASURES:
      return { ...state, measures: action.payload };
    case MeasuresActionTypes.SET_DOMAIN:
      return { ...state, domain: action.payload };
    case MeasuresActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
