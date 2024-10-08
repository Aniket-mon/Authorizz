import { Link } from 'react-router-dom'
import './Signup.css'; 

export default function Signup() {
  return (
    <div className='ocean-background mt-8 p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg'>  
      <h1 className='text-5xl text-center my-6 text-slate-100 shadow-lg'>Register</h1> {/* Changed text color to yellow */}
      <form className='flex flex-col gap-6 mt-4'>  
        <input className='bg-white p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Username' id='username' />
        <input className='bg-white p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Email' id='email' />
        <input className='bg-white p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Password' id='password' />
        
        <button className='bg-blue-600 text-white uppercase p-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-6'>
        <p className='text-white font-semibold'>Have an account?</p> 
        <Link to='/signin'>
        <span className='text-blue-300 font-semibold'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
