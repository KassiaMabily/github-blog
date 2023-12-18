import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
        font-size: 1.7rem; // 24px
        line-height: 160%;
        font-weight: 700;
    `,

    titleM: css`
        font-size: 1.4rem; // 20px
        line-height: 160%;
        font-weight: 700;
    `,

    titleS: css`
        font-size: 1.5rem; // 18px
        line-height: 160%;
        font-weight: 400;
    `,

    textM: css`
        font-size: 1.15rem; // 16px
        line-height: 160%;
        font-weight: 400;
    `,

    textS: css`
        font-size: 1rem; // 14px
        line-height: 160%;
        font-weight: 400;
    `,

    textXS: css`
        font-size: 0.85rem; // 12px
        line-height: 160%;
        font-weight: 700;
    `,
  },
}
