import styled from 'styled-components'
import React from 'react'
import { Spring, animated } from 'react-spring'
import {
  beat,
  fontSize,
  ViewType,
  TypographicContext
} from '../components/design'

import { MOBILE } from '../components/design/withViewType'

const Header = styled.div`
  padding-bottom: ${beat(1)};
  font-size: ${fontSize(7)};
  text-align: center;
  ${ViewType.mobile} {
    font-size: ${fontSize(4)};
  }
`

export const Title = React.memo(props => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <Header>
          {props.viewType === MOBILE ? (
            <div>
              <h1>Triam Udom Open House</h1>
              <h1>2019</h1>
              <TypographicContext>
                <p>นิทรรศการ 81 ปี เตรียมอุดมศึกษาก้าวหน้าสู่อนาคต</p>
                <p>11-12 มกราคม 2562</p>
              </TypographicContext>
              <button
                className="nes-btn is-success title-button"
                onClick={scrollToContent}
                style={{ marginTop: '50px' }}
              >
                START!
              </button>
            </div>
          ) : (
            <Spring native from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {props => (
                <animated.div style={props}>
                  <h1>Triam Udom Open House</h1>
                  <h1>2019</h1>
                  <TypographicContext>
                    <p style={{ fontSize: fontSize(2) }}>
                      นิทรรศการ 81 ปี เตรียมอุดมศึกษาก้าวหน้าสู่อนาคต
                    </p>
                    <p style={{ fontSize: fontSize(1) }}>11-12 มกราคม 2562</p>
                  </TypographicContext>
                  <button
                    className="nes-btn is-success title-button"
                    onClick={scrollToContent}
                    style={{ marginTop: '50px' }}
                  >
                    START!
                  </button>
                </animated.div>
              )}
            </Spring>
          )}
        </Header>
      </div>
    </div>
  </section>
))

const scrollToContent = () => {
  document
    .getElementById('programs')
    .scrollIntoView({ behavior: 'smooth', block: 'center' })
}
