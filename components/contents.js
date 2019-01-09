import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { Analytics } from './layout'

import { GlobalStyle, Fonts, beat } from '../components/design'
import { Favicon, Social } from '../components/meta'

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

export const Contents = props => {
  return (
    <React.Fragment>
      <Head>
        <Analytics />
        <Favicon />
        <Social />
        <title>Triam Udom Open House</title>
      </Head>
      <GlobalStyle />
      <TypographicContext>{props.children}</TypographicContext>
    </React.Fragment>
  )
}
