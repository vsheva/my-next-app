import type { Theme } from '@mui/system';
import { createGlobalStyle, ThemeProps } from 'styled-components';

export const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
    html,
    body,
    #root{
    height: 100%;
    width: 100%;
    }
`;
