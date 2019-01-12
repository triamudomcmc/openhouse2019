import React from 'react'
import styled from 'styled-components'

import { Box } from './design/ui'
import { TypographicContext } from './design'

import { larn70 } from '../data/larn70'
import { Auditorium } from '../data/auditorium'

const Parent = styled.div`
  transform: translateY(0);
  display: flex;
  justify-content: center;
  width: 100%;
`

export class Schedule extends React.PureComponent {
  state = {
    isAuditoriumOpen: false,
    isLarn70Open: false
  }

  checkTime = data => {
    const UNIXcurrentDate = Date.now()
    const UNIXminDate = new Date(`${data.date} ${data.startTime}:00 GMT+7`)
    const UNIXmaxDate = new Date(`${data.date} ${data.endTime}:00 GMT+7`)

    if (
      UNIXcurrentDate + 2400000 > UNIXminDate &&
      UNIXcurrentDate + 2400000 < UNIXmaxDate
    ) {
      return true
    } else {
      return false
    }
  }

  render() {
    let currentLarn70 = larn70.filter(this.checkTime)
    let currentAuditorium = Auditorium.filter(this.checkTime)
    return (
      <section className="section">
        <div className="container">
          <Parent>
            <Box title="Now Showing!">
              <TypographicContext>
                <p>
                  หอประชุม :{' '}
                  {currentAuditorium.length
                    ? currentAuditorium.map(data => data.name)
                    : 'ยังไม่มีการแสดงใด ๆ ในขณะนี้'}
                </p>
                <p>
                  ลานอเนกประสงค์ 70 ปี ต.อ. :{' '}
                  {currentLarn70.length
                    ? currentLarn70.map(data => data.name)
                    : 'ยังไม่มีการแสดงใด ๆ ในขณะนี้'}
                </p>
                <div style={{ marginTop: '15px' }}>
                  <a
                    href="javascript:void()"
                    onClick={() => this.setState({ isAuditoriumOpen: true })}
                  >
                    ตารางหอประชุมฉบับเต็ม
                  </a>
                  <br />
                  <a
                    href="javascript:void()"
                    onClick={() => this.setState({ isLarn70Open: true })}
                  >
                    ตารางานอเนกประสงค์ 70 ปี ต.อ. ฉบับเต็ม
                  </a>
                </div>
              </TypographicContext>
            </Box>
          </Parent>
        </div>
        <TypographicContext>
          <div
            className={
              this.state.isAuditoriumOpen ? 'modal is-active' : 'modal'
            }
          >
            <div
              className="modal-background"
              onClick={() => this.setState({ isAuditoriumOpen: false })}
            />
            <div className="modal-content">
              <div>
                <h2 style={{ fontWeight: 700, color: 'white' }}>
                  Friday, 11 Jan 2019
                </h2>
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>เวลา</th>
                      <th>ชื่อการแสดง</th>
                      <th>โดย</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Auditorium.filter(
                      data => data.date === 'Fri, 11 Jan 2019'
                    ).map(data => (
                      <tr key={data.name}>
                        <td>{`${data.startTime}-${data.endTime}`}</td>
                        <td>{data.name}</td>
                        <td>{data.by}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
                <h2 style={{ fontWeight: 700, color: 'white' }}>
                  Saturday, 12 Jan 2019
                </h2>
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>เวลา</th>
                      <th>ชื่อการแสดง</th>
                      <th>โดย</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Auditorium.filter(
                      data => data.date === 'Sat, 12 Jan 2019'
                    ).map(data => (
                      <tr key={data.name}>
                        <td>{`${data.startTime}-${data.endTime}`}</td>
                        <td>{data.name}</td>
                        <td>{data.by}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => this.setState({ isAuditoriumOpen: false })}
            />
          </div>
        </TypographicContext>
        <TypographicContext>
          <div
            className={this.state.isLarn70Open ? 'modal is-active' : 'modal'}
          >
            <div
              className="modal-background"
              onClick={() => this.setState({ isLarn70Open: false })}
            />
            <div className="modal-content">
              <div>
                <h2 style={{ fontWeight: 700, color: 'white' }}>
                  Friday, 11 Jan 2019
                </h2>
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>เวลา</th>
                      <th>ชื่อการแสดง</th>
                      <th>โดย</th>
                    </tr>
                  </thead>
                  <tbody>
                    {larn70
                      .filter(data => data.date === 'Fri, 11 Jan 2019')
                      .map(data => (
                        <tr key={data.name}>
                          <td>{`${data.startTime}-${data.endTime}`}</td>
                          <td>{data.name}</td>
                          <td>{data.by}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <br />
                <h2 style={{ fontWeight: 700, color: 'white' }}>
                  Saturday, 12 Jan 2019
                </h2>
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>เวลา</th>
                      <th>ชื่อการแสดง</th>
                      <th>โดย</th>
                    </tr>
                  </thead>
                  <tbody>
                    {larn70
                      .filter(data => data.date === 'Sat, 12 Jan 2019')
                      .map(data => (
                        <tr key={data.name}>
                          <td>{`${data.startTime}-${data.endTime}`}</td>
                          <td>{data.name}</td>
                          <td>{data.by}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => this.setState({ isLarn70Open: false })}
            />
          </div>
        </TypographicContext>
      </section>
    )
  }
}
