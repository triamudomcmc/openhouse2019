import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import styled from 'styled-components'

import { MOBILE } from './design/withViewType'
import { ViewType } from './design'

import { Clubs } from './clubs'
import { Programs } from './programs'

const Parent = styled.div`
  padding: 0 2rem;
  margin: 2rem;

  ${ViewType.mobile} {
    padding: 0;
    margin: 0;
  }
`

export const Booth = React.memo(props => (
  <ParallaxLayer
    offset={1}
    speed={0.5}
    factor={props.viewType === MOBILE ? 4 : 1}
  >
    <Parent>
      <div className="container with-title">
        <h1 className="title">Booth</h1>
        <div className="containers">
          <Programs />
          <br />
          <Clubs />
        </div>
      </div>
    </Parent>
  </ParallaxLayer>
))
