import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Dashboard from './views/Dashboard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container width='100vw' height='100vh'>
        <Header />
        <Dashboard />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
