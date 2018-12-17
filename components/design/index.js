import styled, { createGlobalStyle } from 'styled-components'

/**
 *Color
 */
export const Colors = {
  triamPink: '#ff94c2',
  triamGrey: '#959da5',

  brightest: '',
  bright: '',
  main: '',
  dark: '',
  darkest: ''
}

export function getSystemFonts() {
  return [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ]
}

/**
 * Convert a "beat" to a CSS size unit. Used to establish a
 * [vertical rhythm](https://zellwk.com/blog/why-vertical-rhythms/).
 * @param {number} beats Number of beats
 */
export function beat(beats) {
  return `${beats * 1.52}rem`
}

/**
 * Computes the absolute font size for
 * [typographic scale](http://spencermortensen.com/articles/typographic-scale/).
 *
 * We use [7 tone equal temperament](https://en.wikipedia.org/wiki/Equal_temperament#5_and_7_tone_temperaments_in_ethnomusicology)
 * which is the [tuning of Thai traditional instruments](https://en.wikipedia.org/wiki/Ranat_ek#Tuning).
 *
 * @param {number} n The font size, where
 *
 *   - `-14` = 0.25x normal font size.
 *   - `-7` = 0.5x normal font size.
 *   - `0` = normal font size.
 *   - `7` = 2x normal font size.
 *   - `14` = 4x normal font size.
 */
export function fontSize(n) {
  return `${(2 ** (n / 7)).toFixed(3)}rem`
}

/**
 * Tracking (letter-spacing).
 */

export const Fonts = {
  display: ['Montserrat', ...getSystemFonts()].join(', '),
  body: ['Noto Sans', 'Noto Sans Thai UI', ...getSystemFonts()].join(', ')
}

export const Tracking = {
  tight: '-0.05em',
  normal: '0',
  wide: '0.05em',
  extraWide: '0.1em'
}

export const TypographicContext = styled.div`
  font-family: ${Fonts.body};
  font-weight: 600;
  font-size: 1rem;
  > p,
  > blockquote,
  > ul,
  > ol,
  > dl,
  > table,
  > pre {
    margin-top: ${beat(1)};
    margin-bottom: 0;
    &:first-child: {
      margin-top: 0;
    }
  }
`

function generateFontFace(src, family, weight) {
  return `@font-face {
        font-family: "${family}";
        font-weight: ${weight};
        src: url(${src}) format('truetype');
      }`
}

function getFontFace() {
  return `${generateFontFace(
    '/static/fonts/NotoSans-Light.ttf',
    'Noto Sans',
    300
  )}

    ${generateFontFace('/static/fonts/NotoSans-SemiBold.ttf', 'Noto Sans', 600)}
    ${generateFontFace(
      '/static/fonts/NotoSansDisplay-Black.ttf',
      'Noto Sans Display',
      800
    )}
    ${generateFontFace(
      '/static/fonts/NotoSansThaiUI-Light.ttf',
      'Noto Sans Thai UI',
      300
    )}
    ${generateFontFace(
      '/static/fonts/NotoSansThaiUI-SemiBold.ttf',
      'Noto Sans Thai UI',
      600
    )}`
}

/**
 *Responsive
 */
export const XS_MOBILE_BREAKPOINT = 350
export const MOBILE_BREAKPOINT = 767
export const TABLET_BREAKPOINT = 1023

export const ViewType = {
  xsMobile: `@media (max-width: ${XS_MOBILE_BREAKPOINT}px)`,
  mobile: `@media (max-width: ${MOBILE_BREAKPOINT}px)`,
  tablet: `@media (min-width: ${MOBILE_BREAKPOINT +
    1}px) and (max-width: ${TABLET_BREAKPOINT}px)`
}

const BASE_FONT_SIZE = '14px'
const BASE_FONT_SIZE_XS = '12px'

export const GlobalStyle = createGlobalStyle`
${getFontFace()}
body {
  font-size: ${BASE_FONT_SIZE};
  margin: 0;
  padding: 0;
  ${ViewType.mobile} {
    font-size: ${BASE_FONT_SIZE_XS}
  }
}
}
`
