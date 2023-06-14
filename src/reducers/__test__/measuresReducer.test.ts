import { DEFAULT_DOMAIN } from '../../config';
import { Domain, MeasuresAction, MeasuresActionTypes } from '../../types';
import measuresReducer from '../measuresReducer';

describe('reducers :: measuresReducer', () => {
  it('setDomain :: should set domain in the state', () => {
    const payload: Domain = [10, 20];
    const initialState = {
      measures: [],
      domain: DEFAULT_DOMAIN,
      loading: false,
    };
    const action: MeasuresAction = {
      type: MeasuresActionTypes.SET_DOMAIN,
      payload,
    };
    expect(measuresReducer(initialState, action)).toEqual({
      ...initialState,
      domain: payload,
    });
  });
  it('setLoading :: should set loading in the state', () => {
    const payload = true;
    const initialState = {
      measures: [],
      domain: DEFAULT_DOMAIN,
      loading: false,
    };
    const action: MeasuresAction = {
      type: MeasuresActionTypes.SET_LOADING,
      payload,
    };
    expect(measuresReducer(initialState, action)).toEqual({
      ...initialState,
      loading: payload,
    });
  });

  it('setMeasures :: should set measures in the state', () => {
    const payload = [
      {
        time: 10,
        value: 20,
      }
    ];
    const initialState = {
      measures: [],
      domain: DEFAULT_DOMAIN,
      loading: false,
    };
    const action: MeasuresAction = {
      type: MeasuresActionTypes.SET_MEASURES,
      payload,
    };
    expect(measuresReducer(initialState, action)).toEqual({
      ...initialState,
      measures: payload,
    });
  });
});
