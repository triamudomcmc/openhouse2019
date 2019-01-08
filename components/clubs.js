import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Transition, animated, config } from 'react-spring'

import { TypographicContext } from './design'
import { MOBILE } from './design/withViewType'

export const Clubs = React.memo(props => {
  const { collapseStatus, handleCCollapse, handleCExpand, viewType } = props
  let content
  switch (viewType) {
    case MOBILE:
      content = (
        <React.Fragment>
          <Col md={1}>
            <a style={{ color: 'white' }} href="" target="_blank">
              <p>คณิตศาสตร์</p>
            </a>
            <p>วิทยาศาสตร์</p>
            <p>สังคมศึกษา</p>
            <p>ภาษาไทย</p>
            <p>ภาษาอังกฤษ</p>
            <p>ห้องสมุด</p>
            <p>ศาสนาและวัฒนธรรม</p>
            <p>นาฎศิลป์</p>
          </Col>
          <Transition
            items={!collapseStatus}
            native
            config={config.slow}
            from={{ visibility: 'hidden', height: 0 }}
            enter={{ visibility: 'visible', height: 'auto' }}
            leave={{ visibility: 'hidden', height: 0 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <Col md={1}>
                    <p>วาทศิลป์</p>
                    <p>วรรณศิลป์ ต.อ.</p>
                    <p>ดนตรีไทย</p>
                    <p>ดนตรีสากล</p>
                    <p>ศิลปศึกษา</p>
                    <p>ดุริยางค์</p>
                    <p>เพื่อนที่ปรึกษา</p>
                    <p>นันทนาการกีฬา</p>
                  </Col>
                  <Col md={1}>
                    <p>ผู้บำเพ็ญประโยชน์</p>
                    <p>ผู้นำเยาวชนสาธารณสุข</p>
                    <p>อนุรักษ์ธรรมชาติ ฯ</p>
                    <p>เพาะพันธุ์ไม้</p>
                    <p>ครอสเวิร์ด</p>
                    <p>คอมพิวเตอร์</p>
                    <p>ถ่ายภาพ</p>
                    <p>สิ่งละอันพันละน้อย</p>
                  </Col>
                  <Col md={2}>
                    <p>ค้นพบตนเอง</p>
                    <p>ขับร้องและประสานเสียง</p>
                    <p>กฎหมายน่ารู้</p>
                    <p>สร้างสรรค์หนังสือ</p>
                    <p>การ์ตูน</p>
                    <p>นิเทศศิลป</p>
                    <p>พัฒนาศักยภาพทางวิทยาศาสตร์</p>
                    <p>ของเล่นเพื่อการเรียนรู้</p>
                  </Col>
                  <Col md={2}>
                    <p>ภาพยนตร์สั้นและสื่อโทรทัศน์</p>
                    <p>เศรษฐศาสตร์</p>
                    <p>โลกทั้งระบบ</p>
                    <p>สันทนากร</p>
                    <p>โลกศาสตร์</p>
                    <p>สีสรรพ์ภาษาต่างประเทศที่ 2</p>
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
          <Col md={1}>
            <a style={{ color: 'white' }} href="" target="_blank">
              <p>คณิตศาสตร์</p>
            </a>
            <p>วิทยาศาสตร์</p>
            <p>สังคมศึกษา</p>
            <p>ภาษาไทย</p>
            <p>ภาษาอังกฤษ</p>
            <p>ห้องสมุด</p>
            <p>ศาสนาและวัฒนธรรม</p>
            <p>นาฎศิลป์</p>
          </Col>
          <Col md={1}>
            <p>วาทศิลป์</p>
            <p>วรรณศิลป์ ต.อ.</p>
            <p>ดนตรีไทย</p>
            <p>ดนตรีสากล</p>
            <p>ศิลปศึกษา</p>
            <p>ดุริยางค์</p>
            <p>เพื่อนที่ปรึกษา</p>
            <p>นันทนาการกีฬา</p>
          </Col>
          <Col md={1}>
            <p>ผู้บำเพ็ญประโยชน์</p>
            <p>ผู้นำเยาวชนสาธารณสุข</p>
            <p>อนุรักษ์ธรรมชาติ ฯ</p>
            <p>เพาะพันธุ์ไม้</p>
            <p>ครอสเวิร์ด</p>
            <p>คอมพิวเตอร์</p>
            <p>ถ่ายภาพ</p>
            <p>สิ่งละอันพันละน้อย</p>
          </Col>
          <Col md={2}>
            <p>ค้นพบตนเอง</p>
            <p>ขับร้องและประสานเสียง</p>
            <p>กฎหมายน่ารู้</p>
            <p>สร้างสรรค์หนังสือ</p>
            <p>การ์ตูน</p>
            <p>นิเทศศิลป</p>
            <p>พัฒนาศักยภาพทางวิทยาศาสตร์</p>
            <p>ของเล่นเพื่อการเรียนรู้</p>
          </Col>
          <Col md={2}>
            <p>ภาพยนตร์สั้นและสื่อโทรทัศน์</p>
            <p>เศรษฐศาสตร์</p>
            <p>โลกทั้งระบบ</p>
            <p>สันทนากร</p>
            <p>โลกศาสตร์</p>
            <p>สีสรรพ์ภาษาต่างประเทศที่ 2</p>
          </Col>
        </React.Fragment>
      )
  }
  return (
    <div className="nes-container with-title is-dark">
      <h1 className="title">Clubs</h1>
      <div style={{ color: 'white' }}>
        <TypographicContext>
          <Container>
            <Row>{content}</Row>
          </Container>
        </TypographicContext>
        {viewType === MOBILE && props.collapseStatus && (
          <button
            className="nes-btn is-success"
            onClick={handleCExpand}
            style={{ fontSize: '0.6rem' }}
          >
            Expand
          </button>
        )}
        {viewType === MOBILE && !props.collapseStatus && (
          <button
            className="nes-btn is-error"
            onClick={handleCCollapse}
            style={{ fontSize: '0.6rem' }}
          >
            Collapse
          </button>
        )}
      </div>
    </div>
  )
})
