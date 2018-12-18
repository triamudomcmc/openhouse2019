import styled from 'styled-components'
import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import { Spring, config, animated } from 'react-spring'
import { beat, fontSize, ViewType } from '../components/design'

const Header = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  padding-bottom: ${beat(1)};
  font-size: ${fontSize(1)};
  ${ViewType.mobile} {
    font-size: ${fontSize(-1)};
  }
  ${ViewType.xsMobile} {
    font-size: ${fontSize(-1)};
  }
`

export const Title = React.memo(() => (
  <ParallaxLayer offset={0} speed={0.5}>
    <Header>
      <Spring
        native
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={config.molasses}
      >
        {props => (
          <animated.div style={props}>
            <h1>Triam Udom Open House</h1>
            <h1>2019</h1>
          </animated.div>
        )}
      </Spring>
    </Header>
  </ParallaxLayer>
))
