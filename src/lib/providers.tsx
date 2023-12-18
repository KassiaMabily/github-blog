'use client';

import StyledComponentsRegistry from './registry';
import { defaultTheme } from '@/styles/themes/default';
import { ThemeProvider } from 'styled-components';

const Providers = (props: React.PropsWithChildren) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={defaultTheme}>
                {props.children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default Providers
