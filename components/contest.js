import React from 'react'
import styled from 'styled-components'

import { Box } from './design/ui'
import { TypographicContext } from './design'

const Parent = styled.div`
  transform: translateY(0);
  display: flex;
  justify-content: center;
  width: 100%;
`
export const Contest = React.memo(() => (
  <section className="section">
    <div className="container">
      <Parent>
        <Box title="Contest">
          <TypographicContext>
            <ul
              className="nes-list is-disc"
              style={{ paddingLeft: '40px', paddingRight: '40px' }}
            >
              <li>
                17th Triam Udom Mathematic and Science Olympaid (TUMSO){' '}
                <a href="https://tumso.triamudom.cc/" target="_blank">
                  [Read More]
                </a>
              </li>
              <li>
                การแข่งขันตอบปัญหาวิชาสังคมศึกษา ระดับมัธยมศึกษาตอนต้น (TUGSA){' '}
                <a href="https://web.facebook.com/tugsasocial/" target="_blank">
                  [Read More]
                </a>
              </li>
              <li>การแข่งขันกีฬา 5 พระเกี้ยว</li>
              <li>
                การแข่งขันตอบปัญหากฎหมายระดับมัธยมศึกษาตอนปลาย ครั้งที่ 14{' '}
                <a
                  href="https://web.facebook.com/%E0%B8%8A%E0%B8%A1%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89-%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2-122742547806407/"
                  target="_blank"
                >
                  [Read More]
                </a>
              </li>
              <li>
                การแข่งขันโต้วาที{' '}
                <a href="https://web.facebook.com/WatasilpTU/" target="_blank">
                  [Read More]
                </a>
              </li>
              <li>Speech Contest</li>
              <li>Spelling Bee Contest</li>
              <li>Singing Contest</li>
              <li>
                Triam Udom Model United Nation (TUMUN){' '}
                <a
                  href="https://web.facebook.com/TRIAMMUNclub/"
                  target="_blank"
                >
                  [Read More]
                </a>
              </li>
            </ul>
          </TypographicContext>
        </Box>
      </Parent>
    </div>
  </section>
))
