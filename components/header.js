import React, { useState } from 'react'

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
        <a className="modal-link" href="/">HOME</a>
        <a className="modal-link" href="/">LOGIN</a>
        <a className="modal-link" href="/">SIGNUP</a>
      </Modal>
    </div>
  )
}

export default Header
