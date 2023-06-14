import { VictoryTheme } from 'victory';
import deepmerge from 'deepmerge';

const GRAY = '#5e5e5d';
export const LIGHT_GRAY = '#707070';
export const GREEN = '#959427';
const chartTheme = {
  axis: {
    style: {
      axis: {
        stroke: GRAY,
      },
      tickLabels: {
        fill: GRAY,
      },
      grid: {
        stroke: GRAY,
      },
      ticks: {
        stroke: GRAY,
      },
    },
  },
};

const theme = deepmerge(VictoryTheme.material, chartTheme);

export default theme;
