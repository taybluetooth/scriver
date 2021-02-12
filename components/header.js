import React, { useState } from 'react'
import Link from 'next/link'

import Burger from '@animated-burgers/burger-squeeze'
import { Modal } from 'react-responsive-modal'

const Header = () => {

  const [open, setOpen] = useState(false)

  const openCloseModal = () => setOpen(!open)

  return (
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
        <Link href="/login"><a className="modal-link">LOGIN</a></Link>
        <Link href="/"><a className="modal-link">SIGNUP</a></Link>
      </Modal>
    </div>
  )
}

export default Header
