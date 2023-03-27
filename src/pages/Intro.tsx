import React from 'react'
import Background from '../assets/images/background1.svg'
import IntroBg from '../assets/images/intro-header.png'
import Navbar from '../components/NavBar'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import PageTransition from '../components/PageTransition';



function Intro() {

    const [isVisible, setIsVisible] = useState(false)


    const clicked = () => {
      setIsVisible(false)
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        ease: "easeInOut",
      },
    },
  };



  return (

    <div 
    style={{ backgroundImage: `url(${Background})`, height: 'calc(100vh) !important' }}
    className="flex justify-center bg-cover bg-fixed h-screen"
    >

      <div 
      className="flex justify-center items-center h-full"
      >
  
        <div 
        className="grid place-items-center p-4 m-10 bg-white bg-opacity-50 
        rounded-md drop-shadow-xl"
        >

      <Navbar />

      <PageTransition pageVariants={pageVariants}>

        <div 
        className="grid grid-cols-2 gap-4 items-center p-2 justify-center text-center text-sky-700 lg:text-2xl"
        >
          <img 
          src={IntroBg}  style={{ height: 'auto', width: 'auto' }} alt="" 
          className='rounded drop-shadow-2xl border-2px border-black'
          />

          <div>
          <p>
            One quick login with Google, and you've got access to this virtual library. 
            From your dashboard, you can update a book's info, delete a book entirely (although I hope you don't), and add your own.
                
                    
            <p>
              NOTE: I hope you find something that speaks to you! These are real recommendations in my top 20.
            </p>

            <p>
              NOTE, the sequel: Access to this database is, unfortunately for the user, not free. Payment can be made in the form of at least one book recommendation, and can be input directly into the database.
            </p>
          </p>
          </div>
        </div>

        <div 
        className='grid cols-1 mx-24'
        >
          <button 
          className='flex flex-grow place-items-center rounded-md 
          justify-center mt-5 p-3 bg-sky-300 bg-opacity-40 text-sky-600  
           hover:bg-sky-300 hover:border hover:border-sky-600 hover:text-white transition ease-linear duration-200'
          >
            <Link 
            to='/about' onClick={ clicked } 
            className="flex-items-center lg:inline-block lg:mt-0 mr-4 ml-4 lg:text-2xl"
            >
              Got it, take me to the "About" page for some more info.
            </Link>
          </button>
        </div>

          </PageTransition> 
              
      </div>    

    </div>
    
  </div>
  
  )
}

export default Intro
