import { useState } from 'react';
import { Measure } from '../types';
import { DATA_URL } from '../config';

export default function useMeasures() {
  const [measures, setMeasures] = useState<Measure[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  return {
    fetch,
    measures,
    loading,
    error: null,
  };
}
