import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import styled from 'styled-components'

import { MOBILE } from './design/withViewType'
import { ViewType } from './design'

import { Clubs } from './clubs'
import { Programs } from './programs'
import { Box } from './design/ui'

const Parent = styled.div`
  padding: 0 2rem;
  margin: 2rem;

  ${ViewType.mobile} {
    padding: 0;
    margin: 0;
  }
`

const Content = React.memo(() => (
  <React.Fragment>
    <Programs />
    <br />
    <Clubs />
  </React.Fragment>
))

export const Booth = React.memo(props => (
  <ParallaxLayer
    offset={1}
    speed={0.5}
    factor={props.viewType === MOBILE ? 3 : 1}
  >
    <Parent>
      {props.viewType === MOBILE ? (
        <Content />
      ) : (
        <Box title="Booth">
          <Content />
        </Box>
      )}
    </Parent>
  </ParallaxLayer>
))
