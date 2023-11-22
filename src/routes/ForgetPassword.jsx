import { useContext, useState } from 'react'
import AuthContext from '../store/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {
    const [isEmailSent,setIsEmailSent] = useState(false)
    const ctx = useContext(AuthContext)
    const forgetPasswordHandler = (e)=>{
        e.preventDefault()
        const email = e.target.form.email.value
        console.log(email)
        ctx.resetPasswordUsingEmail(email)
        .then(()=>{
            setIsEmailSent(true)
        })
        .catch(err=>console.log(err))
        
      }
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <Link to={'/'}>
            <h3 className="text-4xl font-bold text-purple-600">Forget Password</h3>
          </Link>
          
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className=" h-10 bg-gray-200  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            {isEmailSent&&<p className=' text-sm mt-1 text-green-800'>reset email sent to your email</p>}
            <div className="flex items-center mt-4">
              <button onClick={forgetPasswordHandler} type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Send Password Reset Link
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}
