import { useContext, useEffect } from 'react'
import AuthContext from '../../store/AuthContext'
import { useNavigate } from 'react-router'

export default function AuthRoute({children}) {
  const ctx = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    ctx.getCurrentSignedInUser((user)=>{
        if(!user){
          return navigate('/signin')
        }
    })
  },[ctx,navigate])
  return (
    <>
    {children}
    </>
  )
}

