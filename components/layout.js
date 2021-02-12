import React from 'react'

import Header from './header'

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
