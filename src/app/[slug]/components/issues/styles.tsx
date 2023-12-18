'use client';

import { mixins } from '@/styles/mixins';
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h3 {
            color: ${(props) => props.theme.colors['base-subtitle']};
        }

        span {
            ${mixins.fonts.textS}
            color: ${(props) => props.theme.colors['base-span']};
        }

    }
    input {
        padding: 12px 16px;
        border-radius: 6px;
        border: 1px solid ${(props) => props.theme.colors['base-border']};
        background: ${(props) => props.theme.colors['base-input']};

        &::placeholder {
            color: ${(props) => props.theme.colors['base-label']};
        }
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`

export const IssueCard = styled.a`
    background-color: ${(props) => props.theme.colors['base-post']};
    padding: 32px;
    border-radius: 10px;

    div {
        display: flex;
        flex-direction: row;
        gap: 16px;

        padding-bottom: 20px;

        h2 {
            color: ${(props) => props.theme.colors['white']};
            flex: 1;
        }

        time {
            ${mixins.fonts.textS}
            ${(props) => props.theme.colors['base-span']}
            width: fit-content;
            line-height: 260%;
        }
    }

`
