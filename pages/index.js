import styled from 'styled-components'
import Head from 'next/head'
import React from 'react'
import { beat, fontSize, Tracking, ViewType } from '../components/design'
import { GlobalStyle } from '../components/design'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import { GA_TRACKING_ID } from '../lib/gtag'

import { enhance } from '../components/design/withViewType'
import { MOBILE } from '../components/design/withViewType'

import { Title } from '../components/title'
import { Booth } from '../components/booth'
import { Register } from '../components/register'

import '../static/css/nes.min.css'
import '../static/css/index.css'

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

  ${ViewType.mobile} {
    font-size: ${fontSize(-7)};
  }
`

const Scroll = React.memo(() => (
  <ParallaxLayer offset={0} speed={0.7}>
    <ScrollWrapper>S C R O L L</ScrollWrapper>
  </ParallaxLayer>
))

const StarBg = React.memo(() => (
  <Parallax.Layer
    offset={1}
    speed={0}
    factor={3}
    style={{
      backgroundImage: "url('/static/svg/star.svg')",
      backgroundSize: 'cover'
    }}
  />
))

class Index extends React.PureComponent {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    const { viewType } = this.props
    return (
      <React.Fragment>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
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
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Triam Udom Open House</title>
        </Head>
        <GlobalStyle />
        <Parallax
          pages={this.props.viewType === MOBILE ? 6.5 : 3}
          config={{ tension: 120, friction: 14 }}
          ref="parallax"
        >
          <Title onClick={() => this.scroll(1)} />
          <Scroll />
          <StarBg />
          <Booth viewType={viewType} />
          <Register viewType={viewType} />
        </Parallax>
      </React.Fragment>
    )
  }
}

export default enhance(Index)
