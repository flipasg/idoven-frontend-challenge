import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { AxisDomain, Domain, Measure } from '../../types';
import Brush from './components/Brush';
import LineChart from './components/LineChart';
import { GraphicContainer } from './styles';

export default function Graphic({
  data,
  domain,
  loading,
}: {
  data: Measure[];
  domain: Domain;
  loading: boolean;
}) {
  const [zoomDomain, setZoomDomain] = useState<Domain>(domain);

  const handleZoom = (domain: AxisDomain) => {
    setZoomDomain(domain.x as Domain);
  };

  useEffect(() => {
    setZoomDomain(domain);
  }, [domain]);

  return (
    <GraphicContainer>
      <Grid item maxHeight={600}>
        <LineChart data={data} domain={zoomDomain} handleZoom={handleZoom} />
      </Grid>
      <Grid item maxHeight={200}>
        <Brush
          data={loading ? [] : data}
          domain={zoomDomain}
          handleZoom={handleZoom}
        />
      </Grid>
    </GraphicContainer>
  );
}
