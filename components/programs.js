import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Transition, animated } from 'react-spring'

import { TypographicContext } from './design'
import { MOBILE } from './design/withViewType'

const sciMathLang = [
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาเยอรมัน)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/906515299553279/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาฝรั่งเศส)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/907009699503839/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาสเปน)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/906470406224435/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาจีน)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/905823252955817/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาเกาหลี)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/905788989625910/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (ภาษาญี่ปุ่น)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/907067599498049/'
  }
]

const sciMath = [
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (คุณภาพชีวิต)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/909949672543175/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (คอมพิวเตอร์)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/909964092541733/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (บริหาร)',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/910476535823822/'
  },
  {
    title: 'วิทยาศาสตร์-คณิตศาสตร์ (คณิตศาสตร์ประยุกต์)',
    link: 'javascript:void();'
  }
]

const art = [
  {
    title: 'ภาษา-จีน',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/905872349617574/'
  },
  {
    title: 'ภาษา-ญี่ปุ่น',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/906364582901684/'
  },
  {
    title: 'ภาษา-เกาหลี',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/905213183016824/'
  },
  {
    title: 'ภาษา-เยอรมัน',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/905248286346647/'
  },
  {
    title: 'ภาษา-สเปน',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/905972899607519/'
  },
  {
    title: 'ภาษา-ฝรั่งเศส',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/905914322946710/'
  }
]

const gifted = [
  {
    title: 'โครงการพัฒนาศักยภาพทางคณิตศาสตร์',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/906317839573025/'
  },
  {
    title: 'โครงการพัฒนาศักยภาพทางวิทยาศาสตร์',
    link:
      'https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/906954886175987/'
  },
  {
    title: 'โครงการพัฒนาความสามารถพิเศษด้านภาษาไทย',
    link: 'javascript:void();'
  },
  { title: 'โครงการพัฒนาศักยภาพด้านภาษาอังกฤษ', link: 'javascript:void();' }
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
              <a
                style={{ color: 'white' }}
                key={content.title}
                href={content.link}
                target="_blank"
              >
                <p>{content.title}</p>
              </a>
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
                      <a
                        style={{ color: 'white' }}
                        di
                        key={content.title}
                        href={content.link}
                        target="_blank"
                      >
                        <p>{content.title}</p>
                      </a>
                    ))}
                  </Col>
                  <Col md={1}>
                    {art.map(content => (
                      <a
                        style={{ color: 'white' }}
                        key={content.title}
                        href={content.link}
                        target="_blank"
                      >
                        <p>{content.title}</p>
                      </a>
                    ))}
                  </Col>
                  <Col md={2}>
                    <a
                      style={{ color: 'white' }}
                      href="https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/906424846228991/"
                      target="_blank"
                    >
                      <p>ภาษา-คณิตศาสตร์</p>
                    </a>{' '}
                    {gifted.map(content => (
                      <a
                        style={{ color: 'white' }}
                        key={content.title}
                        href={content.link}
                        target="_blank"
                      >
                        <p>{content.title}</p>
                      </a>
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
              <a
                style={{ color: 'white' }}
                key={content.title}
                href={content.link}
                target="_blank"
              >
                <p>{content.title}</p>
              </a>
            ))}
          </Col>
          <Col md={2}>
            {sciMath.map(content => (
              <a
                style={{ color: 'white' }}
                key={content.title}
                href={content.link}
                target="_blank"
              >
                <p>{content.title}</p>
              </a>
            ))}
          </Col>
          <Col md={1}>
            {art.map(content => (
              <a
                style={{ color: 'white' }}
                key={content.title}
                href={content.link}
                target="_blank"
              >
                <p>{content.title}</p>
              </a>
            ))}
          </Col>
          <Col md={2}>
            <a
              style={{ color: 'white' }}
              href="https://www.facebook.com/TriamUdomOPH/photos/a.904838286387647/906424846228991/"
              target="_blank"
            >
              <p>ภาษา-คณิตศาสตร์</p>
            </a>{' '}
            {gifted.map(content => (
              <a
                style={{ color: 'white' }}
                key={content.title}
                href={content.link}
                target="_blank"
              >
                <p>{content.title}</p>
              </a>
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
