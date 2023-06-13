import { VictoryCommonThemeProps } from 'victory';

export const SCALE: VictoryCommonThemeProps['scale'] = {
  x: 'linear',
  y: 'linear',
};

export const FIELDS = {
  x: {
    fieldName: 'time',
    unit: 'ms',
  },
  y: { fieldName: 'value', unit: 'uV' },
};
