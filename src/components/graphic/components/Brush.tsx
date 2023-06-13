import {
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryLine,
} from 'victory';
import { InteractiveGraphic } from '../../../types';
import { SCALE } from '../config';
import { BRUSH_STYLES, LINE_STYLES } from '../styles';

export default function Brush({
  data,
  domain,
  handleZoom,
}: InteractiveGraphic) {
  return (
    <VictoryChart
      scale={SCALE}
      width={600}
      height={150}
      containerComponent={
        <VictoryBrushContainer
          brushDimension='x'
          brushDomain={{ x: domain }}
          onBrushDomainChange={handleZoom}
          brushStyle={BRUSH_STYLES}
        />
      }
    >
      <VictoryAxis
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fill: 'transparent' },
        }}
      />
      <VictoryLine style={LINE_STYLES} data={data} x='time' y='value' />
    </VictoryChart>
  );
}
