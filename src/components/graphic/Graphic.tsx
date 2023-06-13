import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { AxisDomain, Domain, Measure } from '../../types';
import Brush from './components/Brush';
import LineChart from './components/LineChart';

export default function Graphic({
  data,
  domain,
}: {
  data: Measure[];
  domain: Domain;
}) {
  const [zoomDomain, setZoomDomain] = useState<Domain>(domain);

  const handleZoom = (domain: AxisDomain) => {
    setZoomDomain(domain.x as Domain);
  };

  useEffect(() => {
    setZoomDomain(domain);
  }, [domain]);

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
      width='100%'
    >
      <Grid item xs={6} height={'60%'} width={'100%'}>
        <LineChart data={data} domain={zoomDomain} handleZoom={handleZoom} />
      </Grid>
      <Grid item xs={3} height={'40%'}>
        <Brush data={data} domain={zoomDomain} handleZoom={handleZoom} />
      </Grid>
    </Grid>
  );
}
