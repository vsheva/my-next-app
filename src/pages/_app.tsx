import { ThemeProvider } from '@mui/material';
import createEmotionCache from '@/theme/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme } from '../theme/index';
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme} emotionCache={emotionCache}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
