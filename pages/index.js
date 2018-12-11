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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/static/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/16x16.png"
      />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <meta name="theme-color" color="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,600,700|Kanit:400"
        rel="stylesheet"
      />
      <title>Triam Udom Open House</title>
    </Head>
    <GlobalStyle />
    <Parallax pages={2}>
      <Title />
      <Scroll />
      <Clubs />
    </Parallax>
  </React.Fragment>
)
