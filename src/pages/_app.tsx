import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
// import type { AppProps } from 'next/app';
import createEmotionCache from '@/theme/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { theme } from '../theme/index';
import { CssBaseline } from "@mui/material";




const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
