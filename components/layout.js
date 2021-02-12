import React from 'react'

import Header from './header'

import '../styles/layout.scss'

const Layout = (props) => {
  return (
    <div className="layout-container">
      <Header />
      {(props.bg ?
      <div className="layout-content-bg">
        {props.children}
      </div>
      :
      <div className="layout-content">
        {props.children}
      </div>
      )}
    </div>
  )
}

export default Layout
