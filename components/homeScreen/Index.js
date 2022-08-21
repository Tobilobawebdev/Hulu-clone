import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Section1 from './Section1'
import Section2 from './Section2'

const Index = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
        <Header setShowModal={setShowModal}/>
        <Section1 />
        <Section2 />
        <Footer/>
        {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}

export default Index