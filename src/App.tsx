import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import { MeasuresContextProvider } from './context/MeasuresContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <MeasuresContextProvider>
        <Dashboard />
      </MeasuresContextProvider>
    </ThemeProvider>
  );
}

export default App;
