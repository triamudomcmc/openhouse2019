import React from 'react'

export const Favicon = () => (
  <React.Fragment>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicons/apple-touch-icon.png"
    />
    <link rel="manifest" href="/static/manifest.json" />
    <link
      rel="mask-icon"
      href="/static/favicons/safari-pinned-tab.svg"
      color="#000000"
    />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta name="msapplication-config" content="/static/browserconfig.xml" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicons/32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicons/16x16.png"
    />
    <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
    <meta name="theme-color" color="#ffffff" />
  </React.Fragment>
)

export const Social = () => (
  <React.Fragment>
    <meta property="og:url" content="https://openhouse.triamudom.ac.th/" />
    <meta property="og:title" content="Triam Udom Open House 2019" />
    <meta
      property="og:description"
      content="นิทรรศการวิชาการ โรงเรียนเตรียมอุดมศึกษา ประจำปี ๒๕๖๑"
    />
    <meta
      property="description"
      content="นิทรรศการวิชาการ โรงเรียนเตรียมอุดมศึกษา ประจำปี ๒๕๖๑"
    />
    <meta
      property="og:image"
      content="https://openhouse.triamudom.ac.th/static/og.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@triamudomoph" />
    <meta property="og:site_name" content="Triam Udom Open House" />
    <meta name="twitter:image:alt" content="Triam Udom Open House 2019" />
  </React.Fragment>
)
