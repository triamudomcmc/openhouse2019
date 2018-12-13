import React from 'react'
import { ParallaxLayer } from 'react-spring/dist/addons.cjs'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import { TypographicContext } from './design'

const Parent = styled.div`
  padding: 0 2rem;
  margin: 2rem;
  color: white;
`

const sciMath = [
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเยอรมัน',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาฝรั่งเศส',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาสเปน',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาจีน',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเกาหลี',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาญี่ปุ่น'
]

const art = [
  'ภาษา - ภาษาจีน',
  'ภาษา - ภาษาญี่ปุ่น',
  'ภาษา - ภาษาเกาหลี',
  'ภาษา - ภาษาเยอรมัน',
  'ภาษา - ภาษาสเปน',
  'ภาษา - ภาษาฝรั่งเศส'
]

const gifted = [
  'โครงการพัฒนาศักยภาพด้านคณิตศาสตร์',
  'โครงการพัฒนาศักยภาพด้านวิทยาศาสตร์',
  'โครงการพัฒนาศักยภาพด้านภาษาไทย',
  'โครงการพัฒนาศักยภาพด้านภาษาอังกฤษ'
]

export const Info = React.memo(() => (
  <ParallaxLayer offset={1} speed={0.5}>
    <Parent>
      <div className="container with-title is-dark">
        <h1 className="title">Programs</h1>
        <TypographicContext>
          <Container fluid>
            <Row>
              <Col offset={0.5} md={2}>
                {sciMath.map(content => (
                  <p key={content}>{content}</p>
                ))}
              </Col>
              <Col md={2}>
                {art.map(content => (
                  <p key={content}>{content}</p>
                ))}
              </Col>
              <Col md={2}>
                <p>ภาษา - คณิตศาสตร์</p>
                {gifted.map(content => (
                  <p key={content}>{content}</p>
                ))}
              </Col>
            </Row>
          </Container>
        </TypographicContext>
      </div>
    </Parent>
  </ParallaxLayer>
))
