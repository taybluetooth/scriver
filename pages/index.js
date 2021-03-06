import React from 'react'

import {signIn, useSession} from 'next-auth/client'

import Layout from '../components/layout'

import Profile from './profile'

const IndexPage = () => {

  const [session, loading] = useSession();

  return (
    <main>
      {!session && (
        <Layout bg={true}>
          <div>
            <h1 className='index-header'>
              Organise all your stuff with Scriver.
            </h1>
            <button className='index-button' onClick={signIn}>
              Get Started
            </button>
          </div>
        </Layout>
      )}
      {session && (
        <Profile>

        </Profile>
      )}
    </main>
  )
}

export default IndexPage
