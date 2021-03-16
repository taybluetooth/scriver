import React, { useState, useEffect } from 'react'

import {signOut, useSession} from 'next-auth/client'

import Layout from '../components/layout'

const Profile = () => {
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
        <h1>You are not signed in.</h1>
      </main>
    )
  }

  return (
    <Layout profile={true}>
      <div>
        <div className='profile-header'>
          <h1 className='profile-banner'> Welcome, {session.user.name}</h1>
          <img className='profile-image' src={session.user.image}></img>
        </div>
        <div className='profile-main'>
          <b><p>{session.user.name}'s To-Do-List </p></b>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
