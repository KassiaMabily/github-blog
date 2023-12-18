'use client'

import { createGlobalStyle, css } from 'styled-components'
import { mixins } from './mixins'

const styles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        ${mixins.fonts.textM};
    }

    button {
        border: none;
        cursor: pointer;
    }

    h1 {
        ${mixins.fonts.titleL};
        color: ${(props) => props.theme.colors['base-title']};
    }

    h2 {
        ${mixins.fonts.titleM};
    }

    h3 {
        ${mixins.fonts.titleS};
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
    ${styles}
`
