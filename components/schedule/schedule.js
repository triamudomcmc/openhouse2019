import React from 'react'
import styled from 'styled-components'

import { Box } from '../design/ui'
import { TypographicContext } from '../design'

import { larn70 } from './larn70'
import { Auditorium } from './auditorium'

const Parent = styled.div`
  transform: translateY(0);
  display: flex;
  justify-content: center;
  width: 100%;
`

export class Schedule extends React.PureComponent {
  checkTime = data => {
    const UNIXcurrentDate = Date.now()
    const UNIXminDate = new Date(`${data.date} ${data.startTime}:00 GMT+7`)
    const UNIXmaxDate = new Date(`${data.date} ${data.endTime}:00 GMT+7`)

    if (UNIXcurrentDate > UNIXminDate && UNIXcurrentDate < UNIXmaxDate) {
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
                    : 'COMING SOON!'}
                </p>
                <p>
                  ลานอเนกประสงค์ 70 ปี ต.อ. :{' '}
                  {currentLarn70.length
                    ? currentLarn70.map(data => data.name)
                    : 'COMING SOON!'}
                </p>
              </TypographicContext>
            </Box>
          </Parent>
        </div>
      </section>
    )
  }
}
