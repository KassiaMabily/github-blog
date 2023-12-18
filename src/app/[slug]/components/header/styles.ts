'use client';

import styled from 'styled-components'

import { mixins } from '@/styles/mixins'

export const Container = styled.div`
    display: flex;
    gap: 2rem;

    > img {
        border-radius: 8px;
    }

`

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    color: ${(props) => props.theme.colors['base-subtitle']};

    > div:first-child {
        display: flex;
        justify-content: space-between;

        > a {
            ${mixins.fonts.textXS}
            color: ${(props) => props.theme.colors['blue']} !important;
            text-transform: uppercase;
            display: flex;
            flex-direction: row;
            align-items: start;
            justify-content: start;
            gap: 8px;
            > svg {
                width: 12px;
                height: 12px;
                margin: 4px 0;
            }
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        > svg {
            width: 18px;
            height: 18px;
            color: ${(props) => props.theme.colors['base-label']};
        }
    }
`
