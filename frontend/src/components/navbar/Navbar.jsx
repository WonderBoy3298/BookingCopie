import {React,useContext }from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { AuthContext } from '../../context/AuthContext';
function Navbar(props) {

    const {user} = useContext(AuthContext)
    console.log(`user ${user}`)

    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to="/">
                <span className='logo' >WonderBoyBooking</span>
                </Link>
                {!user && <div className='navItem'>
                    <Link to={'/login'}> 
                           <button className='navButton'>Login</button>
                    </Link>
            
                </div>}
            </div>
        </div>
    );
}

export default Navbar;