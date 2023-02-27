import {React,useContext }from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css";

function Navbar(props) {

   
   const {user}=useContext(AuthContext)

    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to="/">
                <span className='logo' >WonderBoyBooking</span>
                </Link>
                 <div className='navItem'>
                    <Link to={'/login'}> 
                           {user ? <span className='usernameS'>{user.username }</span> :(<button className='navButton'>Login</button>) }

                    </Link>
            
                </div>
            </div>
        </div>
    );
}

export default Navbar;