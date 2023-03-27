import { useState } from 'react'
import { Link } from 'react-router-dom'

import navBarSource from '../assets/images/bookshelves-undraw.svg'

import Button from './Button'

import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }
    
    return (
        <nav 
        className='flex items-center w-full justify-between flex-wrap p-3 '
        >
            <div 
            className='flex items-center flex-shrink-0 text-sky-500 mr-6'
            >
                <Link 
                to='/' 
                className='font-semibold text-xl tracking-tight'
                >
                    Bookie McLibrary
                </Link>
            </div>

            {/* <div className="block"> */}
            {/* <img src={navBarSource} style={{ height: '45px', width: '75px' }} alt="" className=''/> */}
                <button
                onClick={dropDown}
                className='flex items-center px-3 py-2 text-sky-500 border rounded border-blue-400
                    hover:text-blue-300 hover:border-blue-300'
                 >

                    <i 
                    className="fa-solid fa-bars"
                    >
                    </i>

                </button>

                { isVisible ? ( 
                    <div 
                    style={{ transition: 'all 5s' }} 
                    className={`w-full flex text-center transition-all ease-out duration-5000`}
                    >
                        <div 
                        className='text-sm flex-grow'
                        >
                            <Button 
                            className="p-2 m-5 bg-sky-200 opacity-70 justify-center rounded-md 
                                hover:text-sky-700 hover:bg-sky-300 transition ease-linear duration-200"
                            >
                                <div>
                                    <Link 
                                    to='/' 
                                    onClick={ clicked } 
                                    className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-sky-600 hover:text-white mr-4 ml-4"
                                        >
                                            Home
                                    </Link>
                                </div>
                            </Button>

                            <Button 
                            className="p-2 m-5 bg-sky-200 opacity-70 justify-center rounded-md
                            hover:text-sky-700 hover:bg-sky-300 transition ease-linear duration-200"
                            >
                                <div>
                                    <Link 
                                    to='/about' 
                                    onClick={ clicked } 
                                    className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-sky-600 hover:text-white mr-4 ml-4 transition ease-linear duration-200"
                                    >
                                        About
                                    </Link>
                                </div>
                            </Button>

                            <Button 
                            className="p-2 m-5 bg-sky-200 opacity-70 justify-center rounded-md
                            hover:text-sky-700 hover:bg-sky-300 transition ease-linear duration-200"
                            >
                                <div>
                                    <Link 
                                    to='/dashboard' 
                                    onClick={ clicked } 
                                    className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-sky-600 hover:text-white mr-4 ml-4 transition ease-linear duration-200"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            </Button>

                            {
                                !auth.currentUser ?
                                <>

                                <Button 
                                className="p-2 m-5 bg-sky-200 opacity-70 justify-center rounded-md
                                hover:text-sky-700 hover:bg-sky-300 transition ease-linear duration-200"
                                >
                                    <div>
                                        <Link 
                                        to="/" 
                                        onClick={ () => { signInOnClick()}} 
                                        className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-sky-600 hover:text-white mr-4 ml-4 transition ease-linear duration-200"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </Button>
                                </>
                                :
                                <>

                                <Button 
                                className="p-2 m-5 bg-sky-200 opacity-70 justify-center rounded-md
                                hover:text-sky-700 hover:bg-sky-300 transition ease-linear duration-200"
                                >
                                    <div>
                                        <Link 
                                        to="/" 
                                        onClick={ () => { signOutOnClick()}} 
                                        className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-sky-600 hover:text-white mr-4 ml-4 transition ease-linear duration-200"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                </Button>
                                </>
                            }
                        </div>
                    </div>
                    ) : ( 
                    <></> 
                )}
            {/* </div> */}
        </nav>
  )
}

export default Navbar
