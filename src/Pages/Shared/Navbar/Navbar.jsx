import  { useContext } from "react";
import logo from '../../../assets/icons/logo.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProviders";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={'/'}>Home</Link>
              </li>
             
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to={'/services'}>Services</Link>
              </li>
              
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link to={'/contact'}>
                Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">
            <img src={logo} className="w-2/3" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <Link to={'/'}>Home</Link>
              </li>
             
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to={'/services'}>Services</Link>
              </li>
              
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link to={'/contact'}>
                Contact
                </Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
         {
            user ? (
              <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost bg-slate-400">
                {user.email}
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box w-52 bg-slate-500"
              >
               
                <li>
                <Link to={'/bookings'}>
                 My Bookings
                </Link>
              </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
            ) : (
              <Link to={'/login'} className="btn btn-primary">Login</Link>
            )
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
