import React from 'react'
import { Day1, Day2 } from './larn70Data'

export class Multipurpose extends React.PureComponent {
  state = {
    currentDate: 1
  }

  handleDay1 = () => {
    this.setState({ currentDate: 1 })
  }

  handleDay2 = () => {
    this.setState({ currentDate: 2 })
  }

  render() {
    let content
    switch (this.state.currentDate) {
      case 1:
        content = <Day1 />
        break
      case 2:
        content = <Day2 />
        break
    }
    return (
      <div>
        <div>
          <span onClick={this.handleDay1}>11 Jan</span>{' '}
          <span onClick={this.handleDay2}>12 Jan</span>
          <br /> <br />
          <div className="nes-table-reponsive">
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>เวลา</th>
                  <th>ชื่อการแสดง</th>
                  <th>โดย</th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
