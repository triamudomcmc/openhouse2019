import React from 'react'

import { enhance } from '../components/design/withViewType'

import { Layout } from '../components/layout'
import { Title } from '../components/title'
import { Booth } from '../components/booth'
import { Contest } from '../components/contest'
import { Schedule } from '../components/schedule'
import { Register } from '../components/register'
import { Direction } from '../components/direction'

import 'bulma/css/bulma.min.css'
import '../static/css/nes.css'
import '../static/css/index.css'
import '../static/css/nprogress.css'

class Index extends React.PureComponent {
  render() {
    const { viewType } = this.props
    return (
      <React.Fragment>
        <Layout>
          <Title viewType={viewType} />
          <Booth viewType={viewType} />
          <Contest />
          <Schedule />
          <Direction />
          <Register />
        </Layout>
      </React.Fragment>
    )
  }
}

export default enhance(Index)
