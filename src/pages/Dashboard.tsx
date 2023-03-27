import DataTable from '../components/DataTable'
import Navbar from '../components/NavBar'
import BookAccordion from '../components/BookAccordion'

import Background from '../assets/images/background1.svg'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import PageTransition from '../components/PageTransition';


function Dashboard() {

  const [isVisible, setIsVisible] = useState(false)


  const clicked = () => {
    setIsVisible(false)
}

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
      className="justify-center bg-cover bg-fixed"
    >
  
      <div 
      className="flex justify-center items-center h-full"
      >
    
        <PageTransition pageVariants={pageVariants}>
    
  
        <div 
        style={{ width: '80vw', height: '90%'}} 
        className="grid place-items-center p-4 m-10 bg-white bg-opacity-80 
        rounded-md drop-shadow-xl"
        >

        <Navbar />

          <p 
          className='font-2xl mt-2'
          >
            These are the books that have been checked in:
          </p>
          <p 
          className='font-2xl mt-2 text-center'
          >
            Note to Donovan and Shay: This has been shared with 
            friends for testing. I refuse to be held accountable
            for their actions.
            Cheers!
          </p>
      
        <BookAccordion />

        <div 
        style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button 
          className='place-items-center justify-center m-3 p-3 mb-5 
           bg-sky-300 bg-opacity-40 text-sky-600 rounded-md 
           hover:bg-sky-300 hover:border
           hover:border-sky-600 hover:text-white transition ease-linear duration-200'
          >
              <Link 
              to='/editdata' onClick={ clicked } 
              className="flex-items-center lg:inline-block lg:mt-0 mr-4 ml-4"
              >
                Ready to make your mark?
              </Link>

          </button>
        </div>
    </div>
    </PageTransition>
  </div>
</div>


  )
}

export default Dashboard