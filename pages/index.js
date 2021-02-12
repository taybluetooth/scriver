import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => {

  return (
    <Layout bg={true}>
      <div className="index-background">
        <h1 className="index-header">
          Organise all your stuff with Scriver.
        </h1>
        <button className="index-button">
          Get Started
        </button>
      </div>
    </Layout>
  )
}

export default IndexPage
