import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import { MeasuresContextProvider } from './context/MeasuresContext';
import Dashboard from './views/Dashboard';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MeasuresContextProvider>
        <Dashboard />
      </MeasuresContextProvider>
    </ThemeProvider>
  );
}
