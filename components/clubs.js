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
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>คณิตศาสตร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=2"
              target="_blank"
            >
              <p>วิทยาศาสตร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=3"
              target="_blank"
            >
              <p>สังคมศึกษา</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=4"
              target="_blank"
            >
              <p>ภาษาไทย</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ภาษาอังกฤษ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ห้องสมุด</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ศาสนาและวัฒนธรรม</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>นาฎศิลป์</p>
            </a>
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
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>วาทศิลป์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=10"
                      target="_blank"
                    >
                      <p>วรรณศิลป์ ต.อ.</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>ดนตรีไทย</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=12"
                      target="_blank"
                    >
                      <p>ดนตรีสากล</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=13"
                      target="_blank"
                    >
                      <p>ศิลปศึกษา</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=14"
                      target="_blank"
                    >
                      <p>ดุริยางค์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>เพื่อนที่ปรึกษา</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=16"
                      target="_blank"
                    >
                      <p>นันทนาการกีฬา</p>
                    </a>
                  </Col>
                  <Col md={1}>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=17"
                      target="_blank"
                    >
                      <p>ผู้บำเพ็ญประโยชน์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=18"
                      target="_blank"
                    >
                      <p>ผู้นำเยาวชนสาธารณสุข</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>อนุรักษ์ธรรมชาติ ฯ</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>เพาะพันธุ์ไม้</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>ครอสเวิร์ด</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>คอมพิวเตอร์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>ถ่ายภาพ</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=24"
                      target="_blank"
                    >
                      <p>สิ่งละอันพันละน้อย</p>
                    </a>
                  </Col>
                  <Col md={2}>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>ค้นพบตนเอง</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=26"
                      target="_blank"
                    >
                      <p>ขับร้องและประสานเสียง</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=27"
                      target="_blank"
                    >
                      <p>กฎหมายน่ารู้</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=28"
                      target="_blank"
                    >
                      <p>สร้างสรรค์หนังสือ</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=29"
                      target="_blank"
                    >
                      <p>การ์ตูน</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>นิเทศศิลป</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>พัฒนาศักยภาพทางวิทยาศาสตร์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>ของเล่นเพื่อการเรียนรู้</p>
                    </a>
                  </Col>
                  <Col md={2}>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>ภาพยนตร์สั้นและสื่อโทรทัศน์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>เศรษฐศาสตร์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=35"
                      target="_blank"
                    >
                      <p>โลกทั้งระบบ</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="https://openhouse.triamudom.ac.th/content?id=36"
                      target="_blank"
                    >
                      <p>สันทนากร</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>โลกศาสตร์</p>
                    </a>
                    <a
                      style={{ color: 'white' }}
                      href="javascript:void()"
                      target="_blank"
                    >
                      <p>สีสรรพ์ภาษาต่างประเทศที่ 2</p>
                    </a>
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
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>คณิตศาสตร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=2"
              target="_blank"
            >
              <p>วิทยาศาสตร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=3"
              target="_blank"
            >
              <p>สังคมศึกษา</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=4"
              target="_blank"
            >
              <p>ภาษาไทย</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ภาษาอังกฤษ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ห้องสมุด</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ศาสนาและวัฒนธรรม</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>นาฎศิลป์</p>
            </a>
          </Col>
          <Col md={1}>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>วาทศิลป์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=10"
              target="_blank"
            >
              <p>วรรณศิลป์ ต.อ.</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ดนตรีไทย</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=12"
              target="_blank"
            >
              <p>ดนตรีสากล</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=13"
              target="_blank"
            >
              <p>ศิลปศึกษา</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=14"
              target="_blank"
            >
              <p>ดุริยางค์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>เพื่อนที่ปรึกษา</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=16"
              target="_blank"
            >
              <p>นันทนาการกีฬา</p>
            </a>
          </Col>
          <Col md={1}>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=17"
              target="_blank"
            >
              <p>ผู้บำเพ็ญประโยชน์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=18"
              target="_blank"
            >
              <p>ผู้นำเยาวชนสาธารณสุข</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>อนุรักษ์ธรรมชาติ ฯ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>เพาะพันธุ์ไม้</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ครอสเวิร์ด</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>คอมพิวเตอร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ถ่ายภาพ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=24"
              target="_blank"
            >
              <p>สิ่งละอันพันละน้อย</p>
            </a>
          </Col>
          <Col md={2}>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=17"
              target="_blank"
            >
              <p>ผู้บำเพ็ญประโยชน์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=18"
              target="_blank"
            >
              <p>ผู้นำเยาวชนสาธารณสุข</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>อนุรักษ์ธรรมชาติ ฯ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>เพาะพันธุ์ไม้</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ครอสเวิร์ด</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>คอมพิวเตอร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ถ่ายภาพ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=24"
              target="_blank"
            >
              <p>สิ่งละอันพันละน้อย</p>
            </a>
          </Col>
          <Col md={2}>
            <a style={{ color: 'white' }} href="" target="_blank">
              <p>ค้นพบตนเอง</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=26"
              target="_blank"
            >
              <p>ขับร้องและประสานเสียง</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=27"
              target="_blank"
            >
              <p>กฎหมายน่ารู้</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=28"
              target="_blank"
            >
              <p>สร้างสรรค์หนังสือ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=29"
              target="_blank"
            >
              <p>การ์ตูน</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>นิเทศศิลป</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>พัฒนาศักยภาพทางวิทยาศาสตร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ของเล่นเพื่อการเรียนรู้</p>
            </a>
          </Col>
          <Col md={2}>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>ภาพยนตร์สั้นและสื่อโทรทัศน์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>เศรษฐศาสตร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=35"
              target="_blank"
            >
              <p>โลกทั้งระบบ</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="https://openhouse.triamudom.ac.th/content?id=36"
              target="_blank"
            >
              <p>สันทนากร</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>โลกศาสตร์</p>
            </a>
            <a
              style={{ color: 'white' }}
              href="javascript:void()"
              target="_blank"
            >
              <p>สีสรรพ์ภาษาต่างประเทศที่ 2</p>
            </a>
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
