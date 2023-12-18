'use client';

import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CoverContainer = styled.header`
    width: 100%;
    padding-top: 64px;
    padding-bottom: 134px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    background-color: ${({ theme }) => theme.colors['base-profile']};

    overflow: hidden;
    z-index: -20px !important;

    div#effect-rectangle {
        position: absolute;
        bottom: 0;

        background-color: #14589C;
        filter: blur(106px);

        width: 891px;
        height: 52px;
        flex-shrink: 0;
    }

    div#effect-ellipse-1 {
        position: absolute;
        top: -96px;
        left: -130px;

        background-color: #14589C;
        filter: blur(200px);

        width: 236px;
        height: 236px;
    }

    div#effect-ellipse-2 {
        position: absolute;
        top: -52.14px;
        right: 0;

        background-color: #14589C;
        filter: blur(118px);

        width: 155.251px;
        height: 155.251px;
        flex-shrink: 0;
    }
`

export const Content = styled.div`
    height: 100%;
    width: 864px;

    display: flex;
    flex-direction: column;
    gap: 72px;
    padding-bottom: 72px;
`

export const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.colors['base-profile']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
    position: relative;
    z-index: -1px;
    border-radius: 10px;
    padding: 40px;

    margin-top: -88px;
`
