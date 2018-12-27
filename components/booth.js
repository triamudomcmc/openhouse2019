import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import styled from 'styled-components'

import { XS_MOBILE, MOBILE } from './design/withViewType'

import { Clubs } from './clubs'
import { Programs } from './programs'
import { Box, Parent } from './design/ui'

export const Booth = React.memo(props => (
  <ParallaxLayer
    offset={1}
    speed={0.5}
    factor={
      props.viewType === XS_MOBILE ? 4 : props.viewType === MOBILE ? 2 : 1
    }
  >
    <Parent>
      <Box title="Booth">
        <Programs />
        <br />
        <Clubs />
      </Box>
    </Parent>
  </ParallaxLayer>
))
