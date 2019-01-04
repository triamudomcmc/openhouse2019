import React from 'react'
import styled from 'styled-components'

import { TypographicContext, Fonts } from '../design'

import { Box } from '../design/ui'
import { Auditorium } from './auditorium'
import { Multipurpose } from './multipurpose'

const MULTIPURPOSE = 'ลาน 70ปี'
const AUDITORIUM = 'หอประชุม'

const Parent = styled.div`
  transform: translateY(0);
  display: flex;
  justify-content: center;
  width: 100%;
`
const Choice = styled.span`
  font-family: ${Fonts.body};
  font-size: 1.2rem;
  font-weight: 600;
`

export class Schedule extends React.PureComponent {
  render() {
    return (
      <section className="section">
        <div className="container">
          <Parent>
            <Box title="Schedule">
              <h1
                style={{
                  fontSize: '2rem',
                  color: '#f793c2',
                  textAlign: 'center'
                }}
              >
                COMING SOON!
              </h1>
            </Box>
          </Parent>
        </div>
      </section>
    )
  }
}
