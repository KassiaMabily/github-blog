'use client';

import { mixins } from '@/styles/mixins';
import styled from 'styled-components'

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:first-child {
        display: flex;
        align-items: center;
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
        color: ${(props) => props.theme.colors['base-label']};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        > svg {
            width: 18px;
            height: 18px;
        }
    }
`
