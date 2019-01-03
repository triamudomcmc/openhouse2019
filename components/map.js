import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'

import { MOBILE } from './design/withViewType'

import { Box, Parent } from './design/ui'

export const Map = React.memo(props => (
  <ParallaxLayer
    offset={props.viewType === MOBILE ? 6 : 3}
    factor={1}
    speed={0.5}
  >
    <Parent>
      <Box title="Maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.639170926213!2d100.52874121516979!3d13.740282301261436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed3828ba8e5%3A0xf0db3be87e158217!2sTriam+Udom+Suksa+School!5e0!3m2!1sen!2sth!4v1546388195343"
          width="800"
          height="600"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </Box>
    </Parent>
  </ParallaxLayer>
))
