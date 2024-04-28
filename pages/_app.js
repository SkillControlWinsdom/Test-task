// pages/_app.js

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles'; // Use a relative path to import globalStyles.js
import { theme } from '~/styles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> {/* Include GlobalStyles component */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
