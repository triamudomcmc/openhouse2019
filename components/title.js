import styled from 'styled-components'
import React from 'react'
import { ParallaxLayer } from 'react-spring/dist/addons.cjs'

const Header = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
`

export const Title = React.memo(() => (
  <ParallaxLayer offset={0} speed={0.5}>
    <Header>
      <h1>Triam Udom Open House</h1>
      <h1>2019</h1>
    </Header>
  </ParallaxLayer>
))
