import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import styled from 'styled-components'

import { XS_MOBILE, MOBILE } from './design/withViewType'
import { TypographicContext } from './design'

import { Box } from './design/ui'

const MULTIPURPOSE = 'ลาน 70ปี'
const AUDITORIUM = 'หอประชุม'

const Parent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
`

export class Schedule extends React.PureComponent {
  state = {
    currentTab: MULTIPURPOSE
  }

  handleTabChange = e => {
    this.setState({ currentTab: e.target.value })
  }
  render() {
    let content
    switch (this.state.currentTab) {
      case MULTIPURPOSE:
        content = (
          <div className="nes-table-reponsive">
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>วันที่</th>
                  <th>เวลา</th>
                  <th>สถานที่</th>
                  <th>ชื่อการแสดง</th>
                  <th>โดย</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 Jan</td>
                  <td>08:00 - 16:00</td>
                  <td>ลาน 70 ปี</td>
                  <td>Main Event</td>
                  <td>TUCMC!</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
        break

      case AUDITORIUM:
        content = (
          <div className="nes-table-reponsive">
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>วันที่</th>
                  <th>เวลา</th>
                  <th>สถานที่</th>
                  <th>ชื่อการแสดง</th>
                  <th>โดย</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="5">11 มกราคม</td>
                  <td>10:00 - 10:30</td>
                  <td>หอประชุม</td>
                  <td>Zangle</td>
                  <td>ชมรมสันทนากร</td>
                </tr>
                <tr>
                  <td>10:30 - 11:00</td>
                  <td>หอประชุม</td>
                  <td>French Chorus</td>
                  <td>French Chorus</td>
                </tr>
                <tr>
                  <td>11:00 - 13:00</td>
                  <td>หอประชุม</td>
                  <td>Heathers the Musical</td>
                  <td>English Drama Club</td>
                </tr>
                <tr>
                  <td>13:20 - 14:00</td>
                  <td>หอประชุม</td>
                  <td>Wing Symphony Orchestra</td>
                  <td>ชมรมดุริยางค์</td>
                </tr>
                <tr>
                  <td>14:00 - 16:00</td>
                  <td>หอประชุม</td>
                  <td>The last revolution</td>
                  <td>ชมรมนิเทศศิลป</td>
                </tr>
                <tr>
                  <td>12 มกราคม</td>
                  <td>09:30 - 11:30</td>
                  <td>หอประชุม</td>
                  <td>Heathers the Musical</td>
                  <td>English Drama Club</td>
                </tr>
                <tr>
                  <td>12 มกราคม</td>
                  <td>11:30 - 11:50</td>
                  <td>หอประชุม</td>
                  <td>Zangle</td>
                  <td>ชมรมสันทนากร</td>
                </tr>
                <tr>
                  <td>12 มกราคม</td>
                  <td>11:50 - 12:20</td>
                  <td>หอประชุม</td>
                  <td>หนังสั้นไม่ใช่หนังยาว</td>
                  <td>ชมรมภาพยนตร์สั้น ฯ</td>
                </tr>
                <tr>
                  <td>12 มกราคม</td>
                  <td>12:40 - 14:40</td>
                  <td>หอประชุม</td>
                  <td>The last revolution</td>
                  <td>ชมรมนิเทศศิลป</td>
                </tr>
                <tr>
                  <td>12 มกราคม</td>
                  <td>14:40 - 15:40</td>
                  <td>หอประชุม</td>
                  <td>หนังสั้นไม่ใช่หนังยาว</td>
                  <td>ชมรมภาพยนตร์สั้น ฯ</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
    return (
      <ParallaxLayer
        offset={
          this.props.viewType === XS_MOBILE
            ? 5
            : this.props.viewType === MOBILE
            ? 4
            : 2
        }
        factor={1}
        speed={0.5}
      >
        <Parent>
          <Box title="Schedule">
            <label>
              <input
                name="tabs"
                type="radio"
                value={MULTIPURPOSE}
                checked={this.state.currentTab === MULTIPURPOSE}
                onChange={this.handleTabChange}
                className="nes-radio"
              />
              <span>Multipurpose</span>
            </label>{' '}
            <label>
              <input
                name="tabs"
                type="radio"
                value={AUDITORIUM}
                checked={this.state.currentTab === AUDITORIUM}
                onChange={this.handleTabChange}
                className="nes-radio"
              />
              <span>Auditorium</span>
            </label>
            <TypographicContext>{content}</TypographicContext>
          </Box>
        </Parent>
      </ParallaxLayer>
    )
  }
}
