import React from 'react'

export const Auditorium = React.memo(() => (
  <div>
    <div>
      <p>11 มกราคม</p>
      <div className="nes-table-reponsive">
        <table className="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>เวลา</th>
              <th>ชื่อการแสดง</th>
              <th>โดย</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:00 - 10:30</td>
              <td>Zangle</td>
              <td>ชมรมสันทนากร</td>
            </tr>
            <tr>
              <td>10:30 - 11:00</td>
              <td>French Chorus</td>
              <td>French Chorus</td>
            </tr>
            <tr>
              <td>11:00 - 13:00</td>
              <td>Heathers the Musical</td>
              <td>English Drama Club</td>
            </tr>
            <tr>
              <td>13:20 - 14:00</td>
              <td>Wing Symphony Orchestra</td>
              <td>ชมรมดุริยางค์</td>
            </tr>
            <tr>
              <td>14:00 - 16:00</td>
              <td>The last revolution</td>
              <td>ชมรมนิเทศศิลป</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <div>
      <p>12 มกราคม</p>
      <div className="nes-table-reponsive">
        <table className="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>เวลา</th>
              <th>ชื่อการแสดง</th>
              <th>โดย</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09:30 - 11:30</td>
              <td style={{ width: '223.9px' }}>Heathers the Musical</td>
              <td>English Drama Club</td>
            </tr>
            <tr>
              <td>11:30 - 11:50</td>
              <td>Zangle</td>
              <td>ชมรมสันทนากร</td>
            </tr>
            <tr>
              <td>11:50 - 12:20</td>
              <td>หนังสั้นไม่ใช่หนังยาว</td>
              <td>ชมรมภาพยนตร์สั้น ฯ</td>
            </tr>
            <tr>
              <td>12:40 - 14:40</td>
              <td>The last revolution</td>
              <td>ชมรมนิเทศศิลป</td>
            </tr>
            <tr>
              <td>14:40 - 15:40</td>
              <td>หนังสั้นไม่ใช่หนังยาว</td>
              <td>ชมรมภาพยนตร์สั้น ฯ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
))
