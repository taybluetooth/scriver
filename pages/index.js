import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'

import Layout from '../components/layout'

const IndexPage = () => {

  const [session, loading] = useSession();

  return (
    <main>
      {!session && (
        <>
          Not Signed In
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {session && (
        <Layout bg={true}>
          <div className="index-background">
            <h1 className="index-header">
              Organise all your stuff with Scriver.
            </h1>
            <button className="index-button">
              Get Started
            </button>
            <button className="index-button" onClick={signOut}>
              Sign Out
            </button>
          </div>
        </Layout>
      )}
    </main>
    /*
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
    */
  )
}

export default IndexPage
