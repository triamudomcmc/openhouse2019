import styled from 'styled-components'
import React from 'react'
import { beat, fontSize, Tracking, ViewType } from '../components/design'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'

import { enhance } from '../components/design/withViewType'
import { XS_MOBILE, MOBILE } from '../components/design/withViewType'

import { Layout } from '../components/layout'
import { Title } from '../components/title'
import { Booth } from '../components/booth'
import { Schedule } from '../components/schedule'
import { Register } from '../components/register'

import 'nes.css/css/nes.min.css'
import '../static/css/index.css'
import '../static/css/nprogress.css'

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
  render() {
    const { viewType } = this.props
    return (
      <React.Fragment>
        <Layout>
          <Parallax
            pages={
              this.props.viewType === XS_MOBILE
                ? 7
                : this.props.viewType === MOBILE
                ? 6
                : 4
            }
            config={{ tension: 120, friction: 14 }}
            ref="parallax"
          >
            <Title viewType={viewType} />
            <Scroll />
            <StarBg />
            <Booth viewType={viewType} />
            <Schedule viewType={viewType} />
            <Register viewType={viewType} />
          </Parallax>
        </Layout>
      </React.Fragment>
    )
  }
}

export default enhance(Index)
