import React from 'react'

import DataTable from '../components/DataTable'
import Navbar from '../components/NavBar'
import BookAccordion from '../components/BookAccordion'

import Background from '../assets/images/background1.svg'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import PageTransition from '../components/PageTransition';

const EditData = () => {


const [isVisible, setIsVisible] = useState(false)


const clicked = () => {
  setIsVisible(false)
}

const pageVariants = {
  initial: {
    opacity: 0,

  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

return (

  <div 
  style={{ backgroundImage: `url(${Background})`, height: 'calc(100vh) !important' }}
  className="justify-center bg-cover bg-fixed h-screen"
  >
      <div 
      className="flex justify-center items-center h-full"
      >
  
      <PageTransition pageVariants={pageVariants}>

        <div 
        className="grid place-items-center p-4 m-10 bg-white bg-opacity-80 
        rounded-md drop-shadow-xl"
        >

      <Navbar />
    
      <DataTable />

        </div>
      </PageTransition>
    </div>
      
</div>
  )
}

export default EditData
