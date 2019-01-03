import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import styled from 'styled-components'

import { XS_MOBILE, MOBILE } from '../design/withViewType'
import { TypographicContext, Fonts } from '../design'

import { Box, Parent } from '../design/ui'
import { Auditorium } from './auditorium'
import { Multipurpose } from './multipurpose'

const MULTIPURPOSE = 'ลาน 70ปี'
const AUDITORIUM = 'หอประชุม'

const Choice = styled.span`
  font-family: ${Fonts.body};
  font-size: 1.2rem;
  font-weight: 600;
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
        content = <Multipurpose />
        break

      case AUDITORIUM:
        content = <Auditorium />
        break
    }
    return (
      <ParallaxLayer
        offset={this.props.viewType === MOBILE ? 4 : 2}
        factor={this.props.viewType === MOBILE ? 2 : 1}
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
                className="nes-radio fix-webkit"
              />
              <Choice>ลาน 70ปี</Choice>
            </label>{' '}
            <label>
              <input
                name="tabs"
                type="radio"
                value={AUDITORIUM}
                checked={this.state.currentTab === AUDITORIUM}
                onChange={this.handleTabChange}
                className="nes-radio fix-webkit"
              />
              <Choice>หอประชุม</Choice>
            </label>
            <TypographicContext>{content}</TypographicContext>
          </Box>
        </Parent>
      </ParallaxLayer>
    )
  }
}
