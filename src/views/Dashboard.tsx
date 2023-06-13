import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Container, Grid } from '@mui/material';
import NavigationButton from '../components/buttons/NavigationButton';
import Graphic from '../components/graphic/Graphic';
import useMeasures from '../hooks/useMeasures';

export default function Dashboard() {
  const { measures, loading, domain, nextDomain, prevDomain } = useMeasures();

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
