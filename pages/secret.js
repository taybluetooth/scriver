import React, { useState, useEffect } from 'react'

import {signOut, useSession} from 'next-auth/client'

import Layout from '../components/layout'

const Secret = () => {
  const [session, loading] = useSession()
  const [content, setContent] = useState()

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('/api/secret/index')
      const json = await res.json

      if(json.content) {
        setContent(json.content)
      }
      fetchData()
    }
  }, [session])

  if(typeof window !== 'undefined' && loading) {
    return null
  }

  if(!session) {
    return (
      <main>
        <h1> You are not signed in.</h1>
      </main>
    )
  }

  return (
    <Layout bg={true}>
      <div className='index-background'>
        <h1 className='index-header'>
          Take Control of Disorder, {session.user.name}
        </h1>
        <button className='index-button' onClick={signOut}>
          Sign Out
        </button>
      </div>
    </Layout>
  )
}

export default Secret
