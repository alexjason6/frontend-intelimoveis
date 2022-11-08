import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
