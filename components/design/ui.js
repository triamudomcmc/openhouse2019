import React from 'react'
import styled from 'styled-components'
import { ViewType } from './index'

export const Box = React.memo(props => (
  <div className="nes-container with-title is-light">
    <h1 className="title">{props.title}</h1>
    {props.children}
  </div>
))

export const Parent = styled.div`
  padding: 0 2rem;
  margin: 2rem;

  ${ViewType.mobile} {
    padding: 0;
    margin: 0;
  }
`
