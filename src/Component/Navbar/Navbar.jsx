import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/marvel-babies-cute-and-amusing-character-illustrations-by-topher-welsh-1-removebg-preview.png';
import { AuthContext } from '../../Providers/AuthProviders';


// import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
   const { logOut, user } = useContext(AuthContext);


   const hendleLogout = () => {
      logOut()
   }
   return (
      <div className="navbar bg-black bg-opacity-75 text-white pr-4 md:px-8">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <div className="menu menu-md w-36 dropdown-content z-[1] shadow bg-black rounded-box ">
                  <button className='btn btn-ghost'><Link to={'/'}>Home</Link></button>

                  <button className='btn btn-ghost'><Link to={'/alltoy'}>All Toys</Link></button>

                  {
                     user ?
                        <div className='ml-4'>
                           <button className='btn btn-ghost'><Link to={'/mytoy'}>My Toys</Link></button>

                           <button className='btn btn-ghost'><Link to={'/addtoy'}>Add A Toy</Link></button>
                        </div>
                        : ''
                  }


                  <button className='btn btn-ghost'><Link to={'/blog'}>Blogs</Link></button>
               </div>
            </div>
            <div className='flex items-center'>
               <img src={logo} className='h-20 md:w-24' />
               <span className='md:text-4xl p-2'>|</span>
               <a className="md:text-3xl text-red-700">ToyHub</a>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal px-1 font-bold">
               <button className='btn btn-ghost'><Link to={'/'}>Home</Link></button>
               <button className='btn btn-ghost'><Link to={'/alltoy'}>All Toys</Link></button>

               {
                  user ?
                     <div>
                        <button className='btn btn-ghost'><Link to={'/mytoy'}>My Toys</Link></button>

                        <button className='btn btn-ghost'><Link to={'/addtoy'}>Add A Toy</Link></button>
                     </div>
                     : ''
               }


               <button className='btn btn-ghost'><Link to={'/blog'}>Blogs</Link></button>
            </div>
         </div>
         <div className="navbar-end gap-2">
            {
               user ? <button onClick={hendleLogout} className="btn btn-xs md:btn-sm">LogOut </button>
                  : <Link to={'/login'} className="btn btn-xs md:btn-sm">Login </Link>
            }
            <div className="avatar">
               <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} title={user?.displayName} />

               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
