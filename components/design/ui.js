import React from 'react'

export const Box = React.memo(props => (
  <div className="container with-title is-light">
    <h1 className="title">{props.title}</h1>
    {props.children}
  </div>
))
