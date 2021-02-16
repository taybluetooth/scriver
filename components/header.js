import React, { useState } from 'react'

import {signIn, signOut, useSession} from 'next-auth/client'

import Link from 'next/link'

import Burger from '@animated-burgers/burger-squeeze'
import { Modal } from 'react-responsive-modal'

const Header = () => {

  const [session, loading] = useSession();
  const [open, setOpen] = useState(false)

  const openCloseModal = () => setOpen(!open)

  return (
    <nav>
    {!session && (
      <div>
        <nav className="navbar">
          <a className="nav-logo" href="/">SCRIVER</a>
          <div className="nav-toggle">
            <Burger isOpen={open} onClick={openCloseModal}/>
          </div>
        </nav>
        <Modal classNames={{overlay: 'modal-overlay', modal: 'modal-content'}}
        open={open} onClose={openCloseModal} showCloseIcon={false} center>
          <Link href="/"><a className="modal-link">HOME</a></Link>
          <button className='modal-link' onClick={signIn}><a className="modal-link">LOGIN</a></button>
        </Modal>
      </div>
    )}
    {session && (
      <div>
        <nav className="navbar">
          <a className="nav-logo" href="/">SCRIVER</a>
          <div className="nav-toggle">
            <Burger isOpen={open} onClick={openCloseModal}/>
          </div>
        </nav>
        <Modal classNames={{overlay: 'modal-overlay', modal: 'modal-content'}}
        open={open} onClose={openCloseModal} showCloseIcon={false} center>
          <Link href="/"><a className="modal-link">HOME</a></Link>
          <button className='modal-link' onClick={signOut}><a className="modal-link">LOGOUT</a></button>
        </Modal>
      </div>
    )}
  </nav>
  )
}

export default Header
