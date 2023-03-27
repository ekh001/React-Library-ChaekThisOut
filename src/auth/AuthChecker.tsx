import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
    const signInOnClick = async () => {
      const response = await signInWithRedirect(auth, Providers.google);
    }
    // This checks if user is logged in. If so, it returns the children
    // which are passed as props. It's whatever component is either protected
    // or not. Otherwise, it will send the user to the login route.
    useEffect(() => {
      const auth_state = onAuthStateChanged(auth, (user) => {
        if (!user) {
          signInOnClick();
          navigate("/dashboard")
      } 
      } )
      return () => auth_state()
    }, [auth, navigate])
  return (
    <>{children}</>
  )
}

export default AuthChecker
