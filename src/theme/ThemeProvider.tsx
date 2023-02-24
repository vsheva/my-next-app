// import type { FC, ReactNode } from 'react';
// import type { Theme } from '@mui/material';
// import { CacheProvider, EmotionCache } from '@emotion/react';
// import { ThemeProvider as MuiThemeProvider } from '@mui/material';
//
//
// type ThemeProviderProps = {
//     children: ReactNode;
//     theme: Theme;
//     emotionCache: EmotionCache;
// };
//
// const ThemeProvider: FC<ThemeProviderProps> =
//     ({children,
//          theme,
//          emotionCashe
//     }) =>{
//         let emotionCache;
//         return (
//         <CacheProvider value={emotionCache}>
//             <MuiThemeProvider theme={theme}>
//                 {children}
//             </MuiThemeProvider>
//         </CasheProvider>
//     )
// }
//
// export default ThemeProvider;

import type { FC, ReactNode } from 'react';
import type { Theme } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

type ThemeProviderProps = {
    children: ReactNode;
    theme: Theme;
    emotionCache: EmotionCache;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
                                                   children,
                                                   theme,
                                                   emotionCache,
                                               }) => {
    return (
        <CacheProvider value={emotionCache}>
            <MuiThemeProvider theme={theme}>
                {/* <GlobalStyle /> {children} */}
            </MuiThemeProvider>
        </CacheProvider>
    );
};

export default ThemeProvider;