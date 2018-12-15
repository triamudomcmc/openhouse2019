import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import { TypographicContext } from './design'

export const Clubs = React.memo(() => (
  <div className="container with-title is-dark" style={{ color: 'white' }}>
    <h1 className="title">Clubs</h1>
    <TypographicContext>
      <Container>
        <Row>
          <Col md={1}>
            <p>คณิตศาสตร์</p>
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
          <Col md={2}>
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
            <p>นิเทศศิลป์</p>
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
        </Row>
      </Container>
    </TypographicContext>
  </div>
))
