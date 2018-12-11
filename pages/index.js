import styled from 'styled-components'
import Head from 'next/head'
import React from 'react'
import { beat, fontSize, Tracking } from '../components/design'
import { GlobalStyle } from '../components/design'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons.cjs'

import { Title } from '../components/title'
import { Clubs } from '../components/clubs'

const ScrollWrapper = styled.div`
  width: 1;
  height: ${beat(3)};
  margin: ${beat(1)} auto;
  color: black;
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  letter-spacing: ${Tracking.wide};
  font-size: ${fontSize(-3)};
`

const Scroll = React.memo(() => (
  <ParallaxLayer offset={0} speed={0.1}>
    <ScrollWrapper>S C R O L L</ScrollWrapper>
  </ParallaxLayer>
))

export default () => (
  <React.Fragment>
    <Head>
      <link href="https://unpkg.com/nes.css/css/nes.min.css" rel="stylesheet" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    <GlobalStyle />
    <Parallax pages={2}>
      <Title />
      <Scroll />
      <Clubs />
    </Parallax>
  </React.Fragment>
)
