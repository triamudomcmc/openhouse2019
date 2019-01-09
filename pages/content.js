import React from 'react'

import Sci from '../content/02_sci.mdx'
import Soc from '../content/03_soc.mdx'
import Thai from '../content/04_thai.mdx'
import Wannasilp from '../content/10_wannasilp.mdx'
import Music from '../content/12_music.mdx'
import Art from '../content/13_art.mdx'
import Marchingband from '../content/14_marchingband.mdx'
import Sport from '../content/16_sport.mdx'
import Bumpen from '../content/17_bumpen.mdx'
import TUMED from '../content/18_tumed.mdx'
import Indy from '../content/24_indy.mdx'
import Chorus from '../content/26_chorus.mdx'
import Law from '../content/27_law.mdx'
import Book from '../content/28_book.mdx'
import Cartoon from '../content/29_cartoon.mdx'
import Globe from '../content/35_globe.mdx'
import Entertainer from '../content/36_entertainer.mdx'
import SciGer from '../content/41_sciger.mdx'
import SciEsp from '../content/43_sciesp.mdx'
import SciKor from '../content/45_scikor.mdx'
import SciJap from '../content/46_scijap.mdx'
import ArtMath from '../content/47_artmath.mdx'
import ArtKor from '../content/48_artkor.mdx'
import ArtChi from '../content/50_artchi.mdx'
import GS from '../content/58_gs.mdx'
import GM from '../content/59_gm.mdx'

import 'bulma/css/bulma.min.css'
import '../static/css/index.css'

class Contents extends React.Component {
  state = {
    id: ''
  }

  componentDidMount() {
    const getQueryString = function(field, url) {
      const href = url ? url : window.location.href
      const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
      let string = reg.exec(href)
      return string ? string[1] : null
    }
    this.setState({ id: getQueryString('id') })
  }

  render() {
    let content
    switch (this.state.id) {
      case '2':
        content = <Sci />
        break
      case '3':
        content = <Soc />
        break
      case '4':
        content = <Thai />
        break
      case '10':
        content = <Wannasilp />
        break
      case '12':
        content = <Music />
        break
      case '13':
        content = <Art />
        break
      case '14':
        content = <Marchingband />
        break
      case '16':
        content = <Sport />
        break
      case '17':
        content = <Bumpen />
        break
      case '18':
        content = <TUMED />
        break
      case '24':
        content = <Indy />
        break
      case '26':
        content = <Chorus />
        break
      case '27':
        content = <Law />
        break
      case '28':
        content = <Book />
        break
      case '29':
        content = <Cartoon />
        break
      case '35':
        content = <Globe />
        break
      case '36':
        content = <Entertainer />
        break
      case '41':
        content = <SciGer />
        break
      case '43':
        content = <SciEsp />
        break
      case '45':
        content = <SciKor />
        break
      case '46':
        content = <SciJap />
        break
      case '47':
        content = <ArtMath />
        break
      case '48':
        content = <ArtKor />
        break
      case '50':
        content = <ArtChi />
        break
      case '58':
        content = <GS />
        break
      case '59':
        content = <GM />
        break
    }

    return (
      <div className="container">
        <div className="content" style={{ marginTop: '50px' }}>
          <div className="box">{content}</div>
        </div>
      </div>
    )
  }
}

export default Contents
