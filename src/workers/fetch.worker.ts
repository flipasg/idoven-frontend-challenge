import Papa from 'papaparse';

self.onmessage = (e) => {
  executeFetch(e.data);
};

const executeFetch = (url: string) => {
  Papa.parse(url, {
    download: true,
    header: true,
    worker: true,
    fastMode: true,
    dynamicTyping: true,
    chunkSize: 40000,
    step: (results) => {
      self.postMessage(results);
    },
    complete: ({ meta }) => {
      self.postMessage(meta);
      self.close();
    },
  });
};

export {};
