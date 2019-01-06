import React from 'react'
import styled from 'styled-components'

import { MOBILE } from './design/withViewType'

import { Clubs } from './clubs'
import { Programs } from './programs'
import { Box } from './design/ui'

const Parent = styled.div`
  transform: translateY(0);
`

export class Booth extends React.PureComponent {
  state = {
    isProgramsCollapse: true,
    isClubsCollapse: true
  }

  handlePExpand = () => {
    this.setState({ isProgramsCollapse: false })
  }

  handlePCollapse = () => {
    this.setState({ isProgramsCollapse: true })
  }

  handleCExpand = () => {
    this.setState({ isClubsCollapse: false })
  }

  handleCCollapse = () => {
    this.setState({ isClubsCollapse: true })
  }

  render() {
    return (
      <section className="section" id="content">
        <Parent>
          {this.props.viewType === MOBILE ? (
            <React.Fragment>
              <Programs
                collapseStatus={this.state.isProgramsCollapse}
                handlePCollapse={this.handlePCollapse}
                handlePExpand={this.handlePExpand}
                viewType={this.props.viewType}
              />
              <br />
              <Clubs
                collapseStatus={this.state.isClubsCollapse}
                handleCCollapse={this.handleCCollapse}
                handleCExpand={this.handleCExpand}
                viewType={this.props.viewType}
              />
            </React.Fragment>
          ) : (
            <Box title="Exhibition">
              <React.Fragment>
                <Programs />
                <br />
                <Clubs />
              </React.Fragment>
            </Box>
          )}
        </Parent>
      </section>
    )
  }
}
