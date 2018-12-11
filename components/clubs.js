import React from 'react'
import { ParallaxLayer } from 'react-spring/dist/addons.cjs'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 2rem;
  margin: 2rem;
`

export const Clubs = React.memo(() => (
  <ParallaxLayer offset={1} speed={0.5}>
    <Container>
      <div className="container with-title">
        <h1 className="title">Clubs</h1>
      </div>
    </Container>
  </ParallaxLayer>
))
