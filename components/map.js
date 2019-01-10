import React from 'react'
import styled from 'styled-components'

import { Box } from './design/ui'
import { TypographicContext } from './design'

const Parent = styled.div`
  transform: translateY(0);
  display: flex;
  justify-content: center;
  width: 100%;
`

export class Map extends React.PureComponent {
  render() {
    return (
      <section className="section" id="map">
        <div className="container">
          <Parent>
            <Box title="Maps!">
              <TypographicContext>
                <a
                  href="/static/map/auditorium.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ลานข้างหอประชุม
                </a>
                <br />
                <a
                  href="/static/map/ATM.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ลานหน้าหอประชุม
                </a>
                <br />
                <a
                  href="/static/map/Phayathai.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ทางออกฝั่งถนนพญาไท
                </a>
                <br />
                <a
                  href="/static/map/Henry.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ทางออกฝั่งถนนอังรีดูนังต์
                </a>
                <br />
                <a
                  href="/static/map/Barnyen.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ลานหน้าตึก 60 ปี
                </a>
                <br />
                <a
                  href="/static/map/Larn70.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ลานอเนกประสงค์ 70 ปี ต.อ.
                </a>
                <br />
                <a
                  href="/static/map/72.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  หน้าตึกเฉลิมพระเกียรติ 72 พรรษา
                </a>
              </TypographicContext>
            </Box>
          </Parent>
        </div>
      </section>
    )
  }
}
