import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
} from 'victory';
import { InteractiveGraphic } from '../../../types';
import { SCALE } from '../config';
import { LINE_STYLES } from '../styles';
import theme from '../theme';

export default function LineChart({
  domain,
  data,
  handleZoom,
}: InteractiveGraphic) {
  return (
    <VictoryChart
      width={800}
      height={400}
      scale={SCALE}
      theme={theme}
      containerComponent={
        <VictoryZoomContainer
          zoomDimension='x'
          zoomDomain={{ x: domain }}
          onZoomDomainChange={handleZoom}
        />
      }
    >
      <VictoryAxis dependentAxis tickFormat={(t) => `${Math.round(t)} uV`} />
      <VictoryAxis tickFormat={(t) => `${Math.round(t)} ms`} offsetY={50} />
      <VictoryLine style={LINE_STYLES} data={data} x='time' y='value' />
    </VictoryChart>
  );
}
