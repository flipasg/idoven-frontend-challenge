import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Grid, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import Graphic from '../components/Graphic';
import useMeasures from '../hooks/useMeasures';
import { Domain } from '../types';
import { DEFAULT_DOMAIN, DOMAIN_STEP } from '../config';

export default function Dashboard() {
  const [domain, setDomain] = useState<Domain>(DEFAULT_DOMAIN);
  const { measures, fetch } = useMeasures();

  const nextDomain = () => {
    const to = domain[1];
    setDomain([to, to + DOMAIN_STEP]);
  };

  const prevDomain = () => {
    const from = domain[0];
    setDomain([from - DOMAIN_STEP, from]);
  };

  useEffect(() => {
    fetch({
      domain,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domain]);
  return (
    <Grid
      container
      alignContent={'center'}
      justifyContent='space-evenly'
      height='calc(100% - 50px)'
    >
      <Grid
        container
        item
        alignItems={'center'}
        maxWidth={50}
        sx={{ flex: '0 0 50px' }}
      >
        <IconButton onClick={prevDomain}>
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Grid>
      <Grid item xs={10} height='80%' flexGrow={1}>
        <Graphic data={measures} domain={domain} />
      </Grid>
      <Grid
        container
        item
        alignItems={'center'}
        maxWidth={50}
        sx={{ flex: '0 0 50px' }}
      >
        <IconButton onClick={nextDomain}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
