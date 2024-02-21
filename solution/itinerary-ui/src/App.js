import { RecoilRoot } from 'recoil';

import { Layout } from './components/Layout'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';

const klmTheme = createTheme({
  palette: {
    primary: {
      main: "#072b45",
      light: "#00a1de",
      dark: "#0077cd",
      contrastText: "#FFFFFF"
    }

  },
  typography: {
    fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif`,
  }
});

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={klmTheme}>
        <Layout />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
