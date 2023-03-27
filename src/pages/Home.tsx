import Background from '../assets/images/background1.svg'
import BookPile from '../assets/images/book1refracted.png'

import Navbar from '../components/NavBar'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';

import PageTransition from '../components/PageTransition';


function Home() {

  const [isVisible, setIsVisible] = useState(false)


  const clicked = () => {
    setIsVisible(false)
  }

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
  
    // Modal Style:
    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'white',
      color: 'rgba(0, 191, 255)',
      border: '4px solid rgba(0, 191, 255)',
      borderRadius: '20px',
      boxShadow: 24,
      p: 4,
    }

      // Page Transition:
    const pageVariants = {
      initial: {
        opacity: 0,
        x: "100vw",
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
        x: "-100vw",
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

      {/* YOUR EXPERIMENT STARTS HERE LIZ */}

      <PageTransition pageVariants={pageVariants}>

        <div 
        className="grid place-items-center p-4 m-10 bg-white bg-opacity-50 
        rounded-md drop-shadow-xl"
        >
      
      <Navbar />

          <div 
          className="flex items-center"
          >
            <img 
            src={BookPile} alt="" 
            className="h-96 w-96 mr-4 mt-4" 
            />

            <h1 
            style={{ fontFamily: 'Nanum Pen Script' }}
            className="flex-grow p-5 text-center text-5xl text-sky-700"
            >

              <div 
              className="place-items-center mt-4"
              >
                <button 
                onClick={handleOpen} title="What's this?" 
                className="p-2 rounded text-sky-500 text-6xl
                 hover:text-white transition ease-linear duration-500">
                    <h1 
                    className=''
                    >
                      책
                    </h1>
                </button>
              </div>
                    <p>
                      This Out: A Comprehensive(ish) Digital Library
                    </p>

              <button 
              className='flex flex-grow place-items-center rounded-md 
              justify-center mt-5 p-3 text-xl font-sans  bg-sky-300 bg-opacity-40 text-sky-600 
              hover:text-white hover:bg-sky-300 hover:border hover:border-sky-600  transition ease-linear duration-200'
              >
                <Link 
                to='/intro' onClick={ clicked } 
                className="flex-items-center lg:inline-block lg:mt-0 mr-4 ml-4"
                >
                  Get Started
                </Link>
              </button>
          </h1>       
      </div>  
        
      <Modal
        open={open}
        onClose={handleClose}
      > 
        <Box sx={style}>
          <Typography variant="h6" component="h2" 
          className='text-center'
          >
            "책", pronounced "chaek", is the Korean word for "book". 
          </Typography>
        </Box>
      </Modal>    
    </div>
    </PageTransition> 
  </div>
</div>

  )
}



export default Home

