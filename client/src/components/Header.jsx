import { Link } from 'react-router-dom'     

export default function Header() {
  return (
    <div className='bg-cyan-700'> 
        <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
            <Link to="/">
                <h1 className='font-bold'>Authorizz</h1>
            </Link>
            <ul className='flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signin">Sign-in</Link></li>           
            </ul>
        </div>
    </div>
  )
}
