import React from 'react'
import styled from 'styled-components'

export const Box = React.memo(props => (
  <div className="nes-container with-title is-light">
    <h1 className="title">{props.title}</h1>
    {props.children}
  </div>
))

export const Parent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
`
