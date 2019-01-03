import React from 'react'
import {
  D1Page1,
  D1Page2,
  D1Page3,
  D1Page4,
  D1Page5,
  D2Page1,
  D2Page2,
  D2Page3
} from './larn70Data'

export class Multipurpose extends React.PureComponent {
  state = {
    currentPageD1: 1,
    currentPageD2: 1
  }

  incD1 = () => {
    this.setState((prevState, props) => ({
      currentPageD1: prevState.currentPageD1 + 1
    }))
  }

  decD1 = () => {
    this.setState((prevState, props) => ({
      currentPageD1: prevState.currentPageD1 - 1
    }))
  }

  incD2 = () => {
    this.setState((prevState, props) => ({
      currentPageD2: prevState.currentPageD2 + 1
    }))
  }

  decD2 = () => {
    this.setState((prevState, props) => ({
      currentPageD2: prevState.currentPageD2 - 1
    }))
  }

  render() {
    let contentD1
    let contentD2
    switch (this.state.currentPageD1) {
      case 1:
        contentD1 = <D1Page1 />
        break
      case 2:
        contentD1 = <D1Page2 />
        break
      case 3:
        contentD1 = <D1Page3 />
        break
      case 4:
        contentD1 = <D1Page4 />
        break
      case 5:
        contentD1 = <D1Page5 />
    }

    switch (this.state.currentPageD2) {
      case 1:
        contentD2 = <D2Page1 />
        break
      case 2:
        contentD2 = <D2Page2 />
        break
      case 3:
        contentD2 = <D2Page3 />
        break
    }
    return (
      <div>
        <div>
          <p>11 มกราคม</p>
          {this.state.currentPageD1 !== 1 && (
            <span onClick={this.decD1}>&larr;</span>
          )}{' '}
          {this.state.currentPageD1 !== 5 && (
            <span onClick={this.incD1}>&rarr;</span>
          )}
          <div className="nes-table-reponsive">
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>เวลา</th>
                  <th>ชื่อการแสดง</th>
                  <th>โดย</th>
                </tr>
              </thead>
              <tbody>{contentD1}</tbody>
            </table>
          </div>
        </div>
        <br />
        <div>
          <p>12 มกราคม</p>
          {this.state.currentPageD2 !== 1 && (
            <span onClick={this.decD2}>&larr;</span>
          )}{' '}
          {this.state.currentPageD2 !== 3 && (
            <span onClick={this.incD2}>&rarr;</span>
          )}
          <div className="nes-table-reponsive">
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>เวลา</th>
                  <th>ชื่อการแสดง</th>
                  <th>โดย</th>
                </tr>
              </thead>
              <tbody>{contentD2}</tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
