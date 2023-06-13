import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
} from 'victory';
import { InteractiveGraphic } from '../../../types';
import { FIELDS, SCALE } from '../config';
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
      <VictoryAxis dependentAxis tickFormat={(t) => `${Math.round(t)} ${FIELDS.y.unit}`} />
      <VictoryAxis tickFormat={(t) => `${Math.round(t)} ${FIELDS.x.unit}`} offsetY={50} />
      <VictoryLine style={LINE_STYLES} data={data} x={FIELDS.x.fieldName} y={FIELDS.y.fieldName}  />
    </VictoryChart>
  );
}
