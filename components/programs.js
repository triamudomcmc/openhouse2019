import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Transition, animated, config } from 'react-spring'

import { TypographicContext } from './design'
import { MOBILE } from './design/withViewType'

const sciMathLang = [
  'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาเยอรมัน)',
  'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาฝรั่งเศส)',
  'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาสเปน)',
  'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาจีน)',
  'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาเกาหลี)',
  'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาญี่ปุ่น)'
]

const sciMath = [
  'วิทยาศาสตร์-คณิตศาสตร์ (คุณภาพชีวิต)',
  'วิทยาศาสตร์-คณิตศาสตร์ (คอมพิวเตอร์)',
  'วิทยาศาสตร์-คณิตศาสตร์ (บริหาร)',
  'วิทยาศาสตร์-คณิตศาสตร์ (คณิตศาสตร์ประยุกต์)'
]

const art = [
  'ภาษา-จีน',
  'ภาษา-ญี่ปุ่น',
  'ภาษา-เกาหลี',
  'ภาษา-เยอรมัน',
  'ภาษา-สเปน',
  'ภาษา-ฝรั่งเศส'
]

const gifted = [
  'โครงการพัฒนาศักยภาพทางคณิตศาสตร์',
  'โครงการพัฒนาศักยภาพทางวิทยาศาสตร์',
  'โครงการพัฒนาความสามารถพิเศษด้านภาษาไทย',
  'โครงการพัฒนาศักยภาพด้านภาษาอังกฤษ'
]

export const Programs = React.memo(props => {
  const { collapseStatus, handlePCollapse, handlePExpand, viewType } = props
  let content
  switch (viewType) {
    case MOBILE:
      content = (
        <React.Fragment>
          <Col md={2}>
            {sciMathLang.map(content => (
              <p key={content}>{content}</p>
            ))}
          </Col>
          <Transition
            items={!collapseStatus}
            native
            from={{ visibility: 'hidden', height: 0 }}
            enter={{ visibility: 'visible', height: 'auto' }}
            leave={{ visibility: 'hidden', height: 0 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <Col md={2}>
                    {sciMath.map(content => (
                      <p key={content}>{content}</p>
                    ))}{' '}
                  </Col>
                  <Col md={1}>
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
                </animated.div>
              ))
            }
          </Transition>
        </React.Fragment>
      )
      break
    default:
      content = (
        <React.Fragment>
          <Col md={2}>
            {sciMathLang.map(content => (
              <p key={content}>{content}</p>
            ))}
          </Col>
          <Col md={2}>
            {sciMath.map(content => (
              <p key={content}>{content}</p>
            ))}
          </Col>
          <Col md={1}>
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
        </React.Fragment>
      )
  }
  return (
    <div
      className="nes-container with-title is-dark"
      style={{ color: 'white' }}
      id="programs"
    >
      <h1 className="title">Programs</h1>
      <TypographicContext>
        <Container>
          <Row>{content}</Row>
        </Container>
      </TypographicContext>
      {viewType === MOBILE && props.collapseStatus && (
        <button
          className="nes-btn is-success"
          onClick={handlePExpand}
          style={{ fontSize: '0.6rem' }}
        >
          Expand
        </button>
      )}
      {viewType === MOBILE && !props.collapseStatus && (
        <button
          className="nes-btn is-error"
          onClick={handlePCollapse}
          style={{ fontSize: '0.6rem' }}
        >
          Collapse
        </button>
      )}
    </div>
  )
})
