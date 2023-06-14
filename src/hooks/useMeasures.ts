import { useContext, useEffect } from 'react';
import { DATA_URL, DOMAIN_STEP } from '../config';
import MeasuresContext from '../context/MeasuresContext';
import { Domain, Measure, MeasuresActionTypes } from '../types';

export default function useMeasures() {
  const { state, dispatch } = useContext(MeasuresContext);

  const setLoading = (loading: boolean) => {
    dispatch({
      type: MeasuresActionTypes.SET_LOADING,
      payload: loading,
    });
  };

  const setMeasures = (measures: Measure[]) => {
    dispatch({
      type: MeasuresActionTypes.SET_MEASURES,
      payload: measures,
    });
  };

  const setDomain = (domain: Domain) => {
    dispatch({
      type: MeasuresActionTypes.SET_DOMAIN,
      payload: domain,
    });
  };

  const fetch = ({ domain }: { domain: [number, number] }) => {
    const fetchWorker = new Worker(
      new URL('../workers/fetch.worker.ts', import.meta.url),
      {
        type: 'module',
      }
    );
    setLoading(true);
    const data: Measure[] = [];
    fetchWorker.postMessage(DATA_URL);
    fetchWorker.onmessage = (event) => {
      const min = domain[0];
      const max = domain[1];
      const chunkedData = event.data.data;
      const measureTime = chunkedData['Time'];
      const value = chunkedData['1'];
      if (measureTime >= min && measureTime <= max) {
        data.push({
          time: measureTime,
          value,
        });
      }
      if (measureTime > max) {
        setMeasures(data);
        setLoading(false);
        fetchWorker.terminate();
      }
    };
  };

  const nextDomain = () => {
    const to = state.domain[1];
    setDomain([to, to + DOMAIN_STEP]);
  };

  const prevDomain = () => {
    const from = state.domain[0];
    setDomain([from - DOMAIN_STEP, from]);
  };

  useEffect(() => {
    fetch({ domain: state.domain });
  }, [state.domain]);

  return {
    ...state,
    nextDomain,
    prevDomain,
  };
}
