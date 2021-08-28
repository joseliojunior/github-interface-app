import React from 'react';
import App from './App';
import { ResetStyle } from './global/ResetStyle';
import GithubProvider from './providers/GithubProvider';
import { ThemeProvider } from 'styled-components';
import theme from './services/theme';

const Providers = () => 
<main>
    <GithubProvider>
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <App />
        </ThemeProvider>
    </GithubProvider>
</main>;

export default Providers;