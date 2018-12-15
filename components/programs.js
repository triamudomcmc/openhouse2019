import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import { TypographicContext } from './design'

const sciMath = [
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเยอรมัน',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาฝรั่งเศส',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาสเปน',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาจีน',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเกาหลี',
  'วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาญี่ปุ่น'
]

const art = [
  'ภาษา - จีน',
  'ภาษา - ญี่ปุ่น',
  'ภาษา - เกาหลี',
  'ภาษา - เยอรมัน',
  'ภาษา - สเปน',
  'ภาษา - ฝรั่งเศส'
]

const gifted = [
  'โครงการพัฒนาศักยภาพด้านคณิตศาสตร์',
  'โครงการพัฒนาศักยภาพด้านวิทยาศาสตร์',
  'โครงการพัฒนาศักยภาพด้านภาษาไทย',
  'โครงการพัฒนาศักยภาพด้านภาษาอังกฤษ'
]

export const Programs = React.memo(() => (
  <div className="container with-title is-dark" style={{ color: 'white' }}>
    <h1 className="title">Programs</h1>
    <TypographicContext>
      <Container fluid>
        <Row>
          <Col md={3}>
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
))
