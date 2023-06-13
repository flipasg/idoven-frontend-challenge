import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import NavigationButton from '../components/buttons/NavigationButton';
import Graphic from '../components/graphic/Graphic';
import { DEFAULT_DOMAIN, DOMAIN_STEP } from '../config';
import useMeasures from '../hooks/useMeasures';
import { Domain } from '../types';

export default function Dashboard() {
  const [domain, setDomain] = useState<Domain>(DEFAULT_DOMAIN);
  const { measures, fetch, loading } = useMeasures();

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
    <Container maxWidth='xl'>
      <Grid container justifyContent='center' maxHeight='100%'>
        <NavigationButton
          onClick={prevDomain}
          icon={<KeyboardArrowLeftIcon />}
        />
        <Grid item xs={11} maxHeight='100%' flexGrow={1}>
          <Graphic data={measures} domain={domain} loading={loading} />
        </Grid>
        <NavigationButton
          onClick={nextDomain}
          icon={<KeyboardArrowRightIcon />}
        />
      </Grid>
    </Container>
  );
}
