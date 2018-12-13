import React from 'react'
import { ParallaxLayer } from 'react-spring/dist/addons.cjs'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'

const Parent = styled.div`
  padding: 0 2rem;
  margin: 2rem;
`

export const Clubs = React.memo(() => (
  <ParallaxLayer offset={2} speed={0.5}>
    <Parent>
      <div className="container with-title">
        <h1 className="title">Clubs</h1>
        <Container>
          <Row>
            <Col md={2}>Col A</Col>
            <Col md={2}>Col B</Col>
            <Col md={2}>Col C</Col>
            <Col md={2}>Col D</Col>
          </Row>
        </Container>
      </div>
    </Parent>
  </ParallaxLayer>
))
